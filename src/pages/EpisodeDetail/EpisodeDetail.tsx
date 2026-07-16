import moment from "moment";
import "../../sass/EpisodeDetail.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CommentList from "../../components/CommentList/CommentList";

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
      <CommentList comments={comments} />
    </div>
  );
}
