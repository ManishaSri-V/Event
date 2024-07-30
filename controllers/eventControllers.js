const Event = require("../models/eventModel");

exports.createEvent = async (req, res) => {
  try {
    const { title, date, time, description, location } = req.body;

    const newEvent = new Event({
      title: title,
      date: date,
      time: time,
      description: description,
      location: location,
    });
    await newEvent.save();
    res.status(201).json({
      success: true,
      data: newEvent,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ isDeleted: false });

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateEventById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const event = await Event.findByIdAndUpdate(id, body);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "No such event exists in the database",
      });
    }
    res.status(200).json({
      success: true,
      date: body,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

exports.softDeletedById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndUpdate(id, { isDeleted: true });
    event.isDeleted = true;
    event.save();

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
