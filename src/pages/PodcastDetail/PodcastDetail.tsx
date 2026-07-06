import { Link } from "react-router-dom";
import Podcast from "../../types/Podcast";
import Episode from "../../types/Episode";
import moment from "moment";
import "../../sass/PodcastDetail.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function PodcastDetail(props: Podcast) {
  const { name, description, avatar, episodes } = props;
  const [follow, setFollow] = useState(false);

  return (
    <div className="podcast-detail-wrap">
      <div className="podcast-detail-header">
        <LazyLoadImage
          className="avatar"
          effect="blur"
          alt={name}
          src={avatar}
        />
        <div className="header-text-wrap">
          <div className="text-wrap">
            <h2>{name}</h2>
            <div className="episode-count">
              {episodes.length} episode{episodes.length !== 1 && "s"} -{" "}
              <span className="rating">rating: 4.7/5</span>
            </div>
          </div>
          <Button
            className="follow-button"
            variant={follow ? "outline-light" : "primary"}
            onClick={() => setFollow((current) => !current)}
          >
            {follow ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
      <div className="description">{description}</div>
      <h3>Episodes</h3>
      <div className="episode-list">
        {episodes.map((episode: Episode, index: number) => (
          <Link
            to={"/podcasts/" + name + "/" + episode.name}
            className="episode-card"
            key={index}
          >
            <LazyLoadImage
              className="episode-avatar"
              effect="blur"
              alt={episode.name}
              src={episode.avatar}
            />
            <div className="episode-body">
              <div className="episode-header">
                <h5>{episode.name}</h5>
                <div className="date">
                  {moment(episode.date).format("MMM DD YYYY")}
                </div>
              </div>
              {episode.description && (
                <div className="description overflow-ellipsis">{episode.description}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
