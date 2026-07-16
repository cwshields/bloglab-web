import { useMemo, useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import FormTabModal from "../FormTabModal/FormTabModal";
import "../../sass/CommentList.scss";

export default function CommentList({ comments }: CommentListProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sortedComments = useMemo(
    () =>
      [...comments].sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()),
    [comments],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          readOnly
          rows={3}
          placeholder="Log in to leave a comment..."
          onClick={() => setShowLoginModal(true)}
        />
        <Button
          variant="success"
          className="post-comment-btn"
          type="submit"
          onClick={() => setShowLoginModal(true)}
        >
          Post Comment
        </Button>
      </form>
      {comments.length === 0 ? (
        <div className="no-comments">
          No comments yet. Be the first to comment!
        </div>
      ) : (
        <div className="comment-list">
          {sortedComments.map((comment: Comment, index: number) => (
            <div className="comment-card" key={index}>
              <div className="user-wrap">
                <img
                  className="avatar"
                  src={comment.user.avatar}
                  alt="avatar"
                />
                <div className="text-wrap">
                  <div className="user">
                    {comment.user.firstName} {comment.user.lastName}
                  </div>
                  <div className="date">
                    {moment(comment.date).format("MMM DD YYYY")}
                  </div>
                </div>
              </div>
              <div className="body">{comment.body}</div>
            </div>
          ))}
        </div>
      )}
      <FormTabModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
    </div>
  );
}
