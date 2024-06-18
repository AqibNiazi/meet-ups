import React, { useState, useEffect } from "react";
import MeetupList from "@components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await fetch(
          "https://react-basic-641f6-default-rtdb.firebaseio.com/meetups.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        const loadedMeetups = [];

        for (const key in data) {
          loadedMeetups.push({
            id: key,
            ...data[key],
          });
        }

        setMeetups(loadedMeetups);
      } catch (error) {
        console.log("error", error);
        setMeetups(DUMMY_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetups();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {meetups.length === 0 ? (
        <div className="flex justify-center">
          <p>No Meetup Available to display</p>
        </div>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </section>
  );
};

export default AllMeetupsPage;
