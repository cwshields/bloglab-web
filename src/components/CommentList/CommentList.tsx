import { useMemo, useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormTabModal from "../FormTabModal/FormTabModal";
import CommentActionsModal from "../CommentActionsModal/CommentActionsModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import "../../sass/CommentList.scss";
import { useAuth } from "../../context/AuthContext";
import getUserKey from "../../utils/getUserKey";
import useLongPress from "../../utils/useLongPress";
import {
  postBlogCommentRequest,
  editBlogCommentRequest,
  deleteBlogCommentRequest,
  editPodcastCommentRequest,
  deletePodcastCommentRequest,
} from "../../axios/commentApi";
import { useBlogsData } from "../../context/BlogsDataContext";

type CommentSummary = Pick<Comment, "id" | "body" | "date" | "user" | "isOwnComment">;

export default function CommentList({ comments, blogId }: CommentListProps) {
  const { user } = useAuth();
  const { refetchBlogs } = useBlogsData();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [localComments, setLocalComments] = useState<Array<CommentSummary>>(comments);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);
  const [actionsComment, setActionsComment] = useState<CommentSummary | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState(false);

  const isBlogComments = blogId !== undefined;
  const editCommentRequest = isBlogComments ? editBlogCommentRequest : editPodcastCommentRequest;
  const deleteCommentRequest = isBlogComments ? deleteBlogCommentRequest : deletePodcastCommentRequest;

  const sortedComments = useMemo(
    () =>
      [...localComments].sort(
        (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
      ),
    [localComments],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    if (!blogId || !commentText.trim() || submitting) return;

    setSubmitting(true);
    setError(null);
    try {
      const posted = await postBlogCommentRequest(blogId, commentText.trim());
      setLocalComments((current) => [
        { id: posted.id, body: posted.body, date: posted.createdAt, user, isOwnComment: true },
        ...current,
      ]);
      setCommentText("");
      refetchBlogs().catch(() => {});
    } catch (err) {
      setError("Failed to post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const startEditing = (comment: CommentSummary) => {
    setError(null);
    setEditingId(comment.id);
    setEditText(comment.body);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = async (commentId: number) => {
    if (!editText.trim() || savingEdit) return;

    setSavingEdit(true);
    setError(null);
    try {
      const updated = await editCommentRequest(commentId, editText.trim());
      setLocalComments((current) =>
        current.map((comment) =>
          comment.id === commentId ? { ...comment, body: updated.body } : comment,
        ),
      );
      cancelEditing();
    } catch (err) {
      setError("Failed to update comment. Please try again.");
    } finally {
      setSavingEdit(false);
    }
  };

  const performDelete = async (commentId: number) => {
    setError(null);
    setDeleting(true);
    try {
      await deleteCommentRequest(commentId);
      setLocalComments((current) => current.filter((comment) => comment.id !== commentId));
      setConfirmDeleteId(null);
    } catch (err) {
      setError("Failed to delete comment. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const closeActionsModal = () => setActionsComment(null);

  const handleEditFromModal = () => {
    if (!actionsComment) return;
    startEditing(actionsComment);
    closeActionsModal();
  };

  const handleDeleteFromModal = () => {
    if (!actionsComment) return;
    setConfirmDeleteId(actionsComment.id);
    closeActionsModal();
  };

  const bindLongPress = useLongPress<CommentSummary>(setActionsComment);

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        {user ? (
          <textarea
            rows={3}
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        ) : (
          <textarea
            readOnly
            rows={3}
            placeholder="Log in to leave a comment..."
            onClick={() => setShowLoginModal(true)}
          />
        )}
        {error && <div className="comment-error">{error}</div>}
        <Button
          variant="success"
          className="post-comment-btn"
          type="submit"
          disabled={submitting || (!!user && !commentText.trim())}
          onClick={() => !user && setShowLoginModal(true)}
        >
          {submitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
      {localComments.length === 0 ? (
        <div className="no-comments">
          No comments yet. Be the first to comment!
        </div>
      ) : (
        <div className="comment-list">
          {sortedComments.map((comment) => {
            const isEditing = editingId === comment.id;
            const canDelete = comment.isOwnComment || user?.is_admin;
            return (
              <div
                className="comment-card"
                key={comment.id}
                {...bindLongPress(comment, !!canDelete && !isEditing)}
              >
                {canDelete && !isEditing && (
                  <div className="comment-actions">
                    {comment.isOwnComment && (
                      <button
                        type="button"
                        className="icon-btn"
                        aria-label="Edit comment"
                        onClick={() => startEditing(comment)}
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    )}
                    {canDelete && (
                      <button
                        type="button"
                        className="icon-btn"
                        aria-label="Delete comment"
                        onClick={() => setConfirmDeleteId(comment.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </div>
                )}
                <div className="user-wrap">
                  <img
                    className="avatar"
                    src={comment.user.avatar}
                    alt="avatar"
                  />
                  <div className="text-wrap">
                    <div className="user">
                      <Link to={`/profile/${getUserKey(comment.user)}`}>
                        {comment.user.firstName} {comment.user.lastName}
                      </Link>
                    </div>
                    <div className="date">
                      {moment(comment.date).format("MMM DD YYYY")}
                    </div>
                  </div>
                </div>
                {isEditing ? (
                  <div className="comment-edit">
                    <textarea
                      rows={3}
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <div className="comment-edit-actions">
                      <Button
                        size="sm"
                        variant="success"
                        disabled={savingEdit || !editText.trim()}
                        onClick={() => saveEdit(comment.id)}
                      >
                        {savingEdit ? "Saving..." : "Save"}
                      </Button>
                      <Button size="sm" variant="outline-light" onClick={cancelEditing}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="body">{comment.body}</div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <FormTabModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
      <CommentActionsModal
        show={!!actionsComment}
        onHide={closeActionsModal}
        canEdit={!!actionsComment?.isOwnComment}
        canDelete={!!(actionsComment?.isOwnComment || user?.is_admin)}
        onEdit={handleEditFromModal}
        onDelete={handleDeleteFromModal}
      />
      <ConfirmDeleteModal
        show={confirmDeleteId !== null}
        onHide={() => setConfirmDeleteId(null)}
        onConfirm={() => confirmDeleteId !== null && performDelete(confirmDeleteId)}
        deleting={deleting}
      />
    </div>
  );
}
