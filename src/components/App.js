import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListing] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listData=> setListing(listData))
  }, [] ) 

  function deleteListing(listingId){
    const listingCards = listing.filter((listings) => listings.id !== listingId)
    setListing(listingCards)
  }

  return (
    <div className="app">
      <Header search={search}
      setSearch={setSearch}/>

      <ListingsContainer 
      listing={listing}
      onDeleteClick={deleteListing}/>
    </div>
  );
}

export default App;
