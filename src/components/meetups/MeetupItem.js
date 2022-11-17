import React, { useContext } from "react";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favContext = useContext(FavoritesContext);
  const itemIsFavorite = favContext.itemIsFavorite(props.id);
  const toggleFavoriteMeetup = () => {
    if (itemIsFavorite) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteMeetup}>
            {itemIsFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
