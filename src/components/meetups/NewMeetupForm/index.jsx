import React, { useRef } from "react";
import Card from "@components/ui/Card";
import styles from "./NewMeetupForm.module.css";
import Spinner from "@components/ui/Spinner";
const NewMeetupForm = ({ onAddMeetup, loading }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef?.current.value;
    const enteredImageUrl = imageInputRef?.current.value;
    const enteredAddress = addressInputRef?.current.value;
    const enteredDescription = descriptionInputRef?.current.value;
    const meetupData = {
      title: enteredTitle,
      imageUrl: enteredImageUrl,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>
            {loading ? <Spinner loading={loading} /> : "Add Meetup"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
