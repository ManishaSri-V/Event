import React, { useState } from "react";
import axios from "axios";
import "./EventItem.css";

const EventItem = ({ event, setEvents, events }) => {
  const [currentEvent, setCurrentEvent] = useState({
    _id: event ? event._id : "", //Ternary operation
    title: event ? event.title : "",
    date: event ? event.date : "",
    time: event ? event.time : "",
    location: event ? event.location : "",
    description: event ? event.description : "",
  });

  const [editMode, setEditMode] = useState(false);

  const updateEvent = async () => {
    const response = await axios.put(
      `http://localhost:5000/api/update/${currentEvent._id}`,
      currentEvent
    );

    console.log("Update happened successfully", response.data);
    if (response.data.success) {
      setEvents(
        events.map((item) =>
          item._id === currentEvent._id ? currentEvent : item
        )
      );
      setEditMode(false);
    }
  };

  const handleSubmit = () => {
    if (!editMode) {
      setEditMode(true);
    } else {
      updateEvent();
    }
  };

  const deleteEvent = async () => {
    const response = await axios.delete(
      `http://localhost:5000/api/delete/${currentEvent._id}`
    );

    if (response.data.success) {
      setEvents(events.filter((item) => item._id !== currentEvent._id));
    }
  };

  const handleDelete = () => {
    deleteEvent();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentEvent({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <div className="event-item">
      {editMode ? (
        <>
          <div className="event-item-key">
            Title: &nbsp;
            <input
              type="text"
              name="title"
              value={currentEvent.title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="event-item-key">
            Date: &nbsp;
            <input
              type="text"
              name="date"
              value={currentEvent.date}
              onChange={handleChange}
            ></input>
          </div>
          <div className="event-item-key">
            Time: &nbsp;
            <input
              type="text"
              name="time"
              value={currentEvent.time}
              onChange={handleChange}
            ></input>
          </div>
          <div className="event-item-key">
            Location: &nbsp;
            <input
              type="text"
              name="location"
              value={currentEvent.location}
              onChange={handleChange}
            ></input>
          </div>
          <div className="event-item-key">
            Description: &nbsp;
            <input
              type="text"
              name="description"
              value={currentEvent.description}
              onChange={handleChange}
            ></input>
          </div>
        </>
      ) : (
        <>
          <h3>{event.title}</h3>
          <p>
            <span className="event-item-key">Date:</span>{" "}
            {new Date(event.date).toLocaleDateString()}
          </p>
          <p>
            <span className="event-item-key">Time:</span> {event.time}
          </p>
          <p>
            <span className="event-item-key">Location:</span> {event.location}
          </p>
          <p>
            <span className="event-item-key">Description:</span>{" "}
            {event.description}
          </p>
        </>
      )}

      <button onClick={handleSubmit}>{editMode ? "Submit" : "Edit"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EventItem;
