import React, { useState, useEffect } from "react";
import MeetupList from "@components/meetups/MeetupList";

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
  console.log("Meetups to display", meetups);
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
