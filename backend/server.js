const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true, //Ernie mentioned to add this line to avoid (node:36179) DeprecationWarning
})
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

const exercisesRouter = require("./routes/exercises")
const usersRouter = require("./routes/users")

app.use("/exercises", exercisesRouter)
app.use("/users", usersRouter)

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
})
