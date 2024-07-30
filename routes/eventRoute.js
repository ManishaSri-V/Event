const express = require("express");
const router = express.Router();
/*const { validate } = require("../middlewares/validate");
const createEventSchema = require("../middlewares/validationSchemas");*/

const {
  createEvent,
  getAllEvents,
  updateEventById,
  softDeletedById,
} = require("../controllers/eventControllers");

router.post("/event", createEvent);
router.get("/events", getAllEvents);
router.put("/update/:id", updateEventById);
router.delete("/delete/:id", softDeletedById);

module.exports = router;
