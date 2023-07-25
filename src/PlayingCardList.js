import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, getCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  console.log(cards);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={getCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(item => (
          <PlayingCard key={item.id} front={item.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
