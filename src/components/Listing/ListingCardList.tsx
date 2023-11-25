import { ReactElement } from "react";
import ListingCard from "./ListingCard";
import Listing from "../../types/Listing";
import { useGetData } from "../../data/bloglabDataHooks";

export default function ListingCardList() {
  const [ listingData, listingLoading, listingError ] = useGetData("listings");

  const listingDataEl: Array<ReactElement> = listingData?.map(
    (listing: Listing, index: number) => (
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
  const classTernary: string | null = listingLoading ? "display-center" : null;

  return (
    <div className={classList + classTernary}>
      {listingLoading ? (
        <img src="https://www.onwebchat.com/img/spinner.gif" alt="Loading..." />
      ) : (
        listingDataEl.sort((a: ReactElement, b: ReactElement) =>
          b.props.date
            .split("/")
            .join()
            .localeCompare(a.props.date.split("/").join())
        )
      )}
      {listingError && <div>Error: couldn't load listings</div>}
    </div>
  );
}
