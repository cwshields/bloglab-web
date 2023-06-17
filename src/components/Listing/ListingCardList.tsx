import { ReactElement } from "react";
import ListingCard from "./ListingCard";
import useAxios from "axios-hooks";
import ListingProps from "../../types/ListingProps";

export default function ListingCardList() {
  const [{ data, loading, error } /*, refetch*/] = useAxios({
    method: "GET",
    url: "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/get-listings",
  });

  const listingData: Array<ReactElement> = data?.listings.map(
    (listing: ListingProps, index: number) => (
      <ListingCard
        id={listing.id}
        key={index}
        header={listing.header}
        body={listing.body}
        tags={listing.tags}
        user={listing.user}
        date={listing.date}
        category={listing.category}
      />
    )
  );

  const classList: string = "listing-wrap ";
  const classTernary: string | null = loading ? "display-center" : null;

  return (
    <div className={classList + classTernary}>
      {loading ? (
        <img src="https://www.onwebchat.com/img/spinner.gif" alt="Loading..." />
      ) : (
        listingData.sort((a: ReactElement, b: ReactElement) =>
          b.props.date
            .split("/")
            .join()
            .localeCompare(a.props.date.split("/").join())
        )
      )}
      {error && <div>Error: couldn't load blogs</div>}
    </div>
  );
}
