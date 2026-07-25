import { useMemo, useState } from "react";
import moment from "moment";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useBlogsData } from "../../context/BlogsDataContext";
import BlogCard from "../BlogCard/BlogCard";
import FormTabModal from "../../components/FormTabModal/FormTabModal";
import CommentActionsModal from "../../components/CommentActionsModal/CommentActionsModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import slugify from "../../utils/slugify";
import getUserKey from "../../utils/getUserKey";
import useLongPress from "../../utils/useLongPress";
import { editBlogCommentRequest, deleteBlogCommentRequest } from "../../axios/commentApi";
import "../../sass/Profile.scss";
import "../../sass/BlogCard.scss";

function isSameUser(a: User, b: User): boolean {
  if (a.id && b.id) return a.id === b.id;
  if (a.username && b.username) return a.username === b.username;
  if (a.email && b.email) return a.email === b.email;
  return a.firstName === b.firstName && a.lastName === b.lastName;
}

function mergeUser(users: Map<string, User>, user: User) {
  const key = getUserKey(user);
  users.set(key, { ...users.get(key), ...user });
}

function collectUsers(blogsData?: Array<Blog>): User[] {
  if (!blogsData) return [];
  const users = new Map<string, User>();
  blogsData.forEach((blog) => {
    mergeUser(users, blog.user);
    (blog.comments ?? []).forEach((comment) => {
      mergeUser(users, comment.user);
    });
  });
  return [...users.values()];
}

export default function Profile() {
  const { user: authUser } = useAuth();
  const { profileId } = useParams<{ profileId?: string }>();
  const { blogsData, blogsLoading, refetchBlogs } = useBlogsData();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [follow, setFollow] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [commentOverrides, setCommentOverrides] = useState<
    Record<number, { body?: string; deleted?: boolean }>
  >({});
  const [actionsComment, setActionsComment] = useState<Comment | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);

  const isOwnProfile = !profileId;

  const allUsers = useMemo(() => collectUsers(blogsData), [blogsData]);

  const profileUser = useMemo<User | null>(() => {
    if (isOwnProfile) return authUser;
    return allUsers.find((candidate) => getUserKey(candidate) === profileId) ?? null;
  }, [isOwnProfile, authUser, allUsers, profileId]);

  const feed = useMemo<ProfileFeedItem[]>(() => {
    if (!profileUser || !blogsData) return [];

    const userBlogs: ProfileFeedItem[] = blogsData
      .filter((blog) => isSameUser(blog.user, profileUser))
      .map((blog) => ({ type: "blog", date: blog.date, blog }));

    const userComments: ProfileFeedItem[] = blogsData.flatMap((blog) =>
      (blog.comments ?? [])
        .filter((comment) => isSameUser(comment.user, profileUser))
        .filter((comment) => !commentOverrides[comment.id]?.deleted)
        .map((comment) => {
          const overrideBody = commentOverrides[comment.id]?.body;
          return {
            type: "comment",
            date: comment.date,
            comment: overrideBody !== undefined ? { ...comment, body: overrideBody } : comment,
            blog,
          };
        }),
    );

    return [...userBlogs, ...userComments].sort(
      (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
    );
  }, [blogsData, profileUser, commentOverrides]);

  const postsPublished = feed.filter((item) => item.type === "blog").length;
  const commentsWritten = feed.filter((item) => item.type === "comment").length;
  const tagsFollowed = 0; // no tag-follow tracking exists yet

  const startEditingComment = (comment: Comment) => {
    setEditingId(comment.id);
    setEditText(comment.body);
    setEditError(null);
  };

  const cancelEditingComment = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveCommentEdit = async (commentId: number) => {
    if (!editText.trim() || savingEdit) return;

    setSavingEdit(true);
    setEditError(null);
    try {
      const updated = await editBlogCommentRequest(commentId, editText.trim());
      setCommentOverrides((current) => ({
        ...current,
        [commentId]: { ...current[commentId], body: updated.body },
      }));
      cancelEditingComment();
      refetchBlogs().catch(() => {});
    } catch (err) {
      setEditError("Failed to update comment. Please try again.");
    } finally {
      setSavingEdit(false);
    }
  };

  const performDeleteComment = async (commentId: number) => {
    setEditError(null);
    setDeleting(true);
    try {
      await deleteBlogCommentRequest(commentId);
      setCommentOverrides((current) => ({
        ...current,
        [commentId]: { ...current[commentId], deleted: true },
      }));
      refetchBlogs().catch(() => {});
      setConfirmDeleteId(null);
    } catch (err) {
      setEditError("Failed to delete comment. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const closeActionsModal = () => setActionsComment(null);

  const handleEditFromModal = () => {
    if (!actionsComment) return;
    startEditingComment(actionsComment);
    closeActionsModal();
  };

  const handleDeleteFromModal = () => {
    if (!actionsComment) return;
    setConfirmDeleteId(actionsComment.id);
    closeActionsModal();
  };

  const bindLongPress = useLongPress<Comment>(setActionsComment);

  if (!isOwnProfile && authUser && profileId === getUserKey(authUser)) {
    return <Navigate to="/profile" replace />;
  }

  if (isOwnProfile && !authUser) {
    return (
      <Container>
        <div className="jumbotron display-center">
          <div>
            <p>Log in to see your profile.</p>
            <Button variant="success" onClick={() => setShowLoginModal(true)}>
              Log In
            </Button>
          </div>
        </div>
        <FormTabModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      </Container>
    );
  }

  if (!isOwnProfile && !blogsLoading && !profileUser) {
    return (
      <Container>
        <div className="jumbotron display-center">
          <p>This profile could not be found.</p>
        </div>
      </Container>
    );
  }

  if (!profileUser) {
    return (
      <Container>
        <img
          src="https://www.onwebchat.com/img/spinner.gif"
          alt="Loading..."
        />
      </Container>
    );
  }

  const { firstName, lastName, avatar, description, location, education, work, joined_date } =
    profileUser;

  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          lg={{ span: 10, order: 2 }}
          xl={{ span: 6, order: 1 }}
          xxl={{ span: 8, order: 1 }}
          className="profile-wrap"
        >
          <h2>{isOwnProfile ? "My Activity" : `${firstName}'s Activity`}</h2>
          {blogsLoading ? (
            <img
              src="https://www.onwebchat.com/img/spinner.gif"
              alt="Loading..."
            />
          ) : feed.length === 0 ? (
            <div className="no-activity">
              {isOwnProfile
                ? "You haven't posted any blogs or comments yet."
                : `${firstName} hasn't posted any blogs or comments yet.`}
            </div>
          ) : (
            <div className="feed-list">
              {feed.map((item) =>
                item.type === "blog" ? (
                  <BlogCard key={`blog-${item.blog.id}`} {...item.blog} />
                ) : (
                  <div
                    className="comment-feed-card"
                    key={`comment-${item.comment.id}`}
                    {...bindLongPress(
                      item.comment,
                      !!item.comment.isOwnComment && editingId !== item.comment.id,
                    )}
                  >
                    {item.comment.isOwnComment && editingId !== item.comment.id && (
                      <div className="comment-actions">
                        <button
                          type="button"
                          className="icon-btn"
                          aria-label="Edit comment"
                          onClick={() => startEditingComment(item.comment)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          type="button"
                          className="icon-btn"
                          aria-label="Delete comment"
                          onClick={() => setConfirmDeleteId(item.comment.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    )}
                    <div className="user-wrap">
                      <img
                        className="avatar"
                        src={item.comment.user.avatar}
                        alt="avatar"
                      />
                      <div className="text-wrap">
                        <div className="history-text">
                          Commented on{" "}
                          <Link to={`/blog/${slugify(item.blog.title)}`}>
                            {item.blog.title}
                          </Link>
                        </div>
                        <div className="date">
                          {moment(item.comment.date).format("MMM DD YYYY")}
                        </div>
                      </div>
                    </div>
                    {editingId === item.comment.id ? (
                      <div className="comment-edit">
                        <textarea
                          rows={3}
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                        {editError && <div className="comment-error">{editError}</div>}
                        <div className="comment-edit-actions">
                          <Button
                            size="sm"
                            variant="success"
                            disabled={savingEdit || !editText.trim()}
                            onClick={() => saveCommentEdit(item.comment.id)}
                          >
                            {savingEdit ? "Saving..." : "Save"}
                          </Button>
                          <Button size="sm" variant="outline-light" onClick={cancelEditingComment}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="body">{item.comment.body}</div>
                    )}
                  </div>
                ),
              )}
            </div>
          )}
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          lg={{ span: 10, order: 1 }}
          xl={{ span: 5, order: 2 }}
          xxl={{ span: 4, order: 2 }}
          className="author-wrap"
        >
          <div className="author blog-card">
            <div className="user-wrap">
              <img className="avatar" alt="avatar" src={avatar} />
              <div className="name">
                {firstName} {lastName}
              </div>
            </div>
            {!isOwnProfile && (
              <Button
                className={`follow-button${follow ? " following" : ""}`}
                variant={follow ? "outline-light" : "primary"}
                onClick={() => setFollow((current) => !current)}
              >
                <span className="label-default">{follow ? "Following" : "Follow"}</span>
                {follow && <span className="label-hover">Unfollow</span>}
              </Button>
            )}
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="info-wrap">
              <div className="sub-header">Location</div>
              <div>{location}</div>
              <div className="sub-header">Education</div>
              <div>{education}</div>
              <div className="sub-header">Work</div>
              <div>{work}</div>
              <div className="sub-header">Joined</div>
              <div>{joined_date}</div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://medium.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-medium"></i>
              </a>
              <a href="https://dev.to" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-dev"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="stats blog-card">
            <div className="stat-row">
              <i className="fa-regular fa-file-lines"></i>
              <span>{postsPublished} posts published</span>
            </div>
            <div className="stat-row">
              <i className="fa-regular fa-comment"></i>
              <span>{commentsWritten} comments written</span>
            </div>
            <div className="stat-row">
              <i className="fa-solid fa-hashtag"></i>
              <span>{tagsFollowed} tags followed</span>
            </div>
          </div>
        </Col>
      </Row>
      <CommentActionsModal
        show={!!actionsComment}
        onHide={closeActionsModal}
        canEdit={!!actionsComment?.isOwnComment}
        canDelete={!!actionsComment?.isOwnComment}
        onEdit={handleEditFromModal}
        onDelete={handleDeleteFromModal}
      />
      <ConfirmDeleteModal
        show={confirmDeleteId !== null}
        onHide={() => setConfirmDeleteId(null)}
        onConfirm={() => confirmDeleteId !== null && performDeleteComment(confirmDeleteId)}
        deleting={deleting}
      />
    </Container>
  );
}
