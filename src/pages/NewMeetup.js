import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-db-a5311-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
