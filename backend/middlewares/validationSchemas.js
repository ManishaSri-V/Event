const Joi = require("joi");

const createEventSchema = Joi.object({
  title: Joi.string().min(8).max(60).required(),
  date: Joi.date().required(),
});

module.exports = { createEventSchema };
