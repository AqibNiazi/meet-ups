import NewMeetupForm from "@components/meetups/NewMeetupForm";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const NewMeetupsPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const addMeetupHandler = async (meetupData) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://react-basic-641f6-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const data = await response.json();
      console.log("Data successfully sent to Firebase", data);
      toast.success("Data successfully sent to Firebase");
      navigate("/");
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
      toast.error("Error sending data to Firebase");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} loading={loading} />
    </div>
  );
};

export default NewMeetupsPage;
