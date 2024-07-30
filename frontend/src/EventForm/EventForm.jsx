import axios from "axios";
import React, { useState } from "react";
import "./EventForm.css";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const createEvent = async () => {
    const event = {
      title: title,
      date: date,
      time: time,
      description: description,
      location: location,
    };
    const response = await axios.post("http://localhost:5000/api/event", event);

    console.log(response);
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={createEvent} className="form">
        <label className="label">
          Title:&nbsp;
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>

        <label className="label">
          Date:&nbsp;
          <input
            type="date"
            name="date"
            placeholder="Date Of Event"
            value={date}
            onChange={handleDateChange}
            required
          />
        </label>

        <label className="label">
          Time:&nbsp;
          <input
            type="time"
            name="time"
            placeholder="Event Time"
            value={time}
            onChange={handleTimeChange}
          />
        </label>

        <label className="label">
          Description:&nbsp;
          <input
            type="text"
            name="description"
            placeholder="Event Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>

        <label className="label">
          Location:&nbsp;
          <input
            type="text"
            name="location"
            placeholder="Location of Event"
            value={location}
            onChange={handleLocationChange}
          />
        </label>

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
