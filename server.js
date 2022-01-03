const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");
const ObjectId = require("mongodb").ObjectId;
const Car = require("./models/carModel");

app.use(express.json({ extend: true }));

app.get("/", (req, res) => {
  res.send("My API is running");
});

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.get("/api/cars/getallcars",async (req, res) => {
    const carsData = await Car.find();
  res.json(carsData);
});



app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
