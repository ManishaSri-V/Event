const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const port = 5000;

const mongoUrl =
  "mongodb+srv://rasurimanishasri:S1ryf8HP89FVLfcy@cluster0.zv8dxjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl, {});
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB successfully");
});

const eventRoutes = require("./routes/eventRoute");
app.use("/api", eventRoutes);

app.listen(port, () => {
  console.log("My server has started on port" + " " + port);
});
