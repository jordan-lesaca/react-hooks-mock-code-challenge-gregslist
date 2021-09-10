import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, onDeleteClick }) {
  const listingList = listing.map(({id, description, image, location, onDeleteClick }) => {
    return (
      <ListingCard 
      key={id}
      id={id}
      description={description}
      image={image}
      location={location}
      onDeleteClick={onDeleteClick} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
