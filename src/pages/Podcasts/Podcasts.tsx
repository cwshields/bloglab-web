import { Link } from "react-router-dom";
import { useGetData } from "../../data/bloglabDataHooks";
import "../../sass/Podcasts.scss";
import FadeIn from "react-fade-in/lib/FadeIn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

function getLatestEpisodes(
  podcasts: Array<Podcast>,
  count: number,
): Array<LatestEpisode> {
  return podcasts
    .flatMap((podcast) =>
      podcast.episodes.map((episode) => ({ podcast, episode })),
    )
    .sort(
      (a, b) =>
        new Date(b.episode.date).getTime() - new Date(a.episode.date).getTime(),
    )
    .slice(0, count);
}

export default function Podcasts() {
  const [podcastsData, podcastsLoading, podcastsError] = useGetData("podcasts");
  const featuredPodcasts = podcastsData?.slice(0, 3);

  const podcastsSorted = podcastsData
    ? [...podcastsData].sort((a, b) => a.name.localeCompare(b.name))
    : undefined;

  const latestEpisodes = podcastsData
    ? getLatestEpisodes(podcastsData, 4)
    : undefined;

  const [follow, setFollow] = useState(false);

  return (
    <>
      <div className="podcast-wrap">
        <h2>Podcasts</h2>
        <FadeIn delay={100}>
          {podcastsLoading ? (
            <img
              src="https://www.onwebchat.com/img/spinner.gif"
              alt="Loading..."
            />
          ) : (
            <>
              <h3>Latest Episodes</h3>
              <div className="podcast-latest-wrap">
                <div className="podcast-latest">
                  {latestEpisodes?.map(
                    ({ podcast, episode }, index: number) => (
                      <Link
                        to={"/podcasts/" + podcast.name + "/" + episode.name}
                        className="podcast-card"
                        key={index}
                      >
                        <div className="image-lazyload">
                          <LazyLoadImage
                            effect="blur"
                            alt={episode.name}
                            src={episode.avatar}
                          />
                        </div>
                        <div className="text-wrap">
                          <h5>{episode.name}</h5>
                        </div>
                      </Link>
                    ),
                  )}
                </div>
              </div>
              <h3>Featured Shows</h3>
              <div className="featured-wrap">
                {featuredPodcasts?.map((podcast: Podcast, index: number) => (
                  <div className="featured-card" key={index}>
                    <Link to={"/podcasts/" + podcast.name}>
                      <div className="image-lazyload">
                        <LazyLoadImage
                          className="featured-show"
                          effect="blur"
                          alt={podcast.name}
                          src={podcast.avatar}
                        />
                      </div>
                      <h5>{podcast.name}</h5>
                    </Link>
                  </div>
                ))}
              </div>
              <h3>Browse</h3>
              <div className="podcast-list-wrap">
                {podcastsSorted?.map((podcast: Podcast, index: number) => (
                  <div key={index} className="podcast-list-card-wrap">
                    <Link to={"/podcasts/" + podcast.name}>
                      <div className="podcast-list-card">
                        <div className="img-wrap">
                          <LazyLoadImage
                            className="image-lazyload"
                            effect="blur"
                            alt={podcast.name}
                            src={podcast.avatar}
                          />
                        </div>
                        <h5 className="name overflow-ellipsis">
                          {podcast.name}
                        </h5>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <Button
                className="bl-button"
                variant={follow ? "outline-light" : "primary"}
                onClick={() => setFollow((current) => !current)}
              >
                {follow ? "Following" : "Follow"}
              </Button>
            </>
          )}
        </FadeIn>
        {podcastsError && <div>Error: couldn't load podcasts</div>}
      </div>
    </>
  );
}
