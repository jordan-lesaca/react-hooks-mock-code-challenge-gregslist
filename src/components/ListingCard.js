import React, { useState } from "react";

function ListingCard({ id, image, description, location, onDeleteClick }) {
  const [favorite, setFavorite] = useState(false)

  function handleClick(){
    setFavorite((favorite) => !favorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE', 
    });
    onDeleteClick(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        
          <button onClick={handleClick} className="emoji-button favorite active">{favorite ? "★" : "☆"}</button>
        
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
