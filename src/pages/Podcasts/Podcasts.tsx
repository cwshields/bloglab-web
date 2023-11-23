import { Link, Outlet } from "react-router-dom";
import Podcast from "../../types/Podcast";
import podcasts from "../../data/podcasts";
import "../../sass/Podcasts.scss";
import "../../sass/App.scss";
import FadeIn from "react-fade-in/lib/FadeIn";
import { PodcastList, podcastList } from "../../data/podcastList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Podcasts() {
  const podcastListMap = podcastList.map(
    (podcast: PodcastList, index: number) => {
      return (
        <div key={index} className="podcast-list-card-wrap">
          <Link to="/#">
            <div className="podcast-list-card">
              <LazyLoadImage
                className="image-lazyload"
                effect="blur"
                alt={podcast.name}
                src={podcast.avatar}
              />
              <h5 className="name overflow-ellipsis">{podcast.name}</h5>
            </div>
          </Link>
        </div>
      );
    }
  );

  // const getRandomInt = (max: number) => {
  //   return Math.floor(Math.random() * max).toString();
  // };

  const podcastListSorted = podcastListMap.sort(function (a, b) {
    const aSort =
      a.props.children.props.children.props.children[1].props.children;
    const bSort =
      b.props.children.props.children.props.children[1].props.children;
    return aSort.localeCompare(bSort);
  });

  return (
    <>
      <Outlet />
      <div className="podcast-wrap">
        <h2>Podcasts</h2>
        <FadeIn delay={100}>
          <h3>Latest Episodes</h3>
          <div className="podcast-latest">
            {podcasts
              .map((podcast: Podcast, index: number) => {
                return (
                  <Link to={podcast.name} className="podcast-card" key={index}>
                    <div className="image-lazyload">
                      <LazyLoadImage
                        effect="blur"
                        alt={podcast.name}
                        src={podcast.avatar}
                      />
                    </div>
                    <div className="text-wrap">
                      <h5>{podcast.episodes[0].name}</h5>
                    </div>
                  </Link>
                );
              })
              .slice(0, 4)}
          </div>
          <h3>Featured Shows</h3>
          <div className="featured-wrap">
            <div className="featured-card">
              <Link to="/#">
                <div className="image-lazyload">
                  <LazyLoadImage
                    className="featured-show"
                    effect="blur"
                    alt="Featured Podcast"
                    src={`https://picsum.photos/id/203/350/350`}
                  />
                </div>
                <h5>Lorem ipsum dolor sit amet</h5>
              </Link>
            </div>
            <div className="featured-card">
              <Link to="/#">
                <LazyLoadImage
                  className="featured-show"
                  effect="blur"
                  alt="Featured Podcast"
                  src={`https://picsum.photos/id/201/350/350`}
                />
                <h5>Numquam praesentium</h5>
              </Link>
            </div>
            <div className="featured-card">
              <Link to="/#">
                <LazyLoadImage
                  className="featured-show"
                  effect="blur"
                  alt="Featured Podcast"
                  src={`https://picsum.photos/id/202/350/350`}
                />
                <h5>Itaque aperiam delectus</h5>
              </Link>
            </div>
          </div>
          <h3>Browse</h3>
          <div>{podcastListSorted}</div>
        </FadeIn>
      </div>
    </>
  );
}
