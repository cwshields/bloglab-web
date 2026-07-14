import { type Metric } from "web-vitals";
import { AxiosError } from "axios";

declare global {
  interface Blog {
    id: number;
    title: string;
    banner?: string;
    body?: string;
    description: string;
    readTime: number;
    date: string;
    tags: Array<string>;
    user: User;
    likes?: Likes;
  }

  interface Comment {
    body: string;
    date: string;
    user: User;
  }

  interface Episode {
    name: string;
    description: string;
    avatar: string;
    date: string;
    comments: Array<Comment>;
  }

  interface EpisodeDetailProps extends Episode {
    podcastName: string;
  }

  interface LatestEpisode {
    podcast: Podcast;
    episode: Episode;
  }

  interface Likes {
    userID: Array<number>;
    blogId: Array<number>;
  }

  interface Listing {
    id: number;
    header: string;
    body: string;
    tags: Array<string>;
    user: User;
    date: string;
    category: string;
  }

  interface ListingModalType extends Listing {
    show: boolean;
    onHide: () => void;
  }

  interface ListingsType {
    url: string;
    name: string;
  }

  interface Podcast {
    name: string;
    description: string;
    avatar: string;
    episodes: Array<Episode>;
  }

  interface PodcastList {
    name: string;
    avatar: string;
  }

  interface ShopCarouselProps {
    items: Array<ShopItem>;
  }

  interface ShopItem {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  interface ShopItemCardProps extends ShopItem {
    className?: string;
  }

  interface Tag {
    name: string;
    color: string;
    description: string;
    guidelines: string;
    about?: string;
    icon?: string;
  }

  interface User {
    firstName: string;
    lastName: string;
    username?: string;
    email?: string;
    avatar?: string;
    password?: string;
    description?: string;
    location?: string;
    education?: string;
    work?: string;
    joined_date?: string;
    admin?: boolean;
    employee?: boolean;
  }
  
  type SignupDataType = {
    email: string;
    username: string;
    password1: string;
    password2: string;
    agree: boolean;
  };

  type DataType = "blogs" | "listings" | "podcasts";

  type GetDataType<T extends DataType> = T extends "blogs"
    ? [Array<Blog>, boolean, AxiosError<any, any> | null]
    : T extends "listings"
      ? [Array<Listing>, boolean, AxiosError<any, any> | null]
      : T extends "podcasts"
        ? [Array<Podcast>, boolean, AxiosError<any, any> | null]
        : any[];

  type LoginDataType = {
    email: string;
    password: string;
  };

  type ReportCallback = (metric: Metric) => void;
}
