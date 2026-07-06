import Episode from "../../types/Episode";
import Comment from "../../types/Comment";
import moment from "moment";
import "../../sass/EpisodeDetail.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface EpisodeDetailProps extends Episode {
  podcastName: string;
}

export default function EpisodeDetail(props: EpisodeDetailProps) {
  const { podcastName, name, description, avatar, date, comments } = props;

  return (
    <div className="episode-detail-wrap">
      <div className="episode-detail-header">
        <LazyLoadImage
          className="avatar"
          effect="blur"
          alt={name}
          src={avatar}
        />
        <div className="text-wrap">
          <div className="podcast-name">{podcastName}</div>
          <h2>{name}</h2>
          <div className="date">{moment(date).format("MMM DD YYYY")}</div>
        </div>
      </div>
      {description && <div className="description">{description}</div>}
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <div className="no-comments">
          No comments yet. Be the first to comment!
        </div>
      ) : (
        <div className="comment-list">
          {comments.map((comment: Comment, index: number) => (
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
    </div>
  );
}
