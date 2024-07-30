import React, { useState, useEffect } from "react";
import axios from "axios";
import EventItem from "../EventItem/EventItem";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const fetchAllEvents = async () => {
    const response = await axios.get("http://localhost:5000/api/events");
    setEvents(response.data.data);
  };

  console.log("These are my events", events);

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      <div className="flexbox">
        {events.map((event, _) => {
          return (
            <EventItem event={event} setEvents={setEvents} events={events} />
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
