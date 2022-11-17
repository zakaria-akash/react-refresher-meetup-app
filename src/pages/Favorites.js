import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favContext = useContext(FavoritesContext);
  if (favContext.totalFavorites === 0) {
    return (
      <section>
        <h3>
          No meetup has been selected yet as{" "}
          <strong>
            <u>Favorite</u>!
          </strong>
        </h3>
      </section>
    );
  } else {
    return (
      <section>
        <h1>My Favorite Meetups</h1>
        <MeetupList meetups={favContext.favorites} />
      </section>
    );
  }
};

export default Favorites;
