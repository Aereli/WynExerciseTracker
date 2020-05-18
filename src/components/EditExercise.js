import React, { useState, useEffect } from "react"
import axios from "axios"

const EditExercise = (props) => {
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState()
  const [users, setUsers] = useState([""])

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/" + props.match.params.id)
      .then((response) => {
        setUsername(response.data.username)
        setDescription(response.data.description)
        setDuration(response.data.duration)
      })

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        setUsers(response.data.map((user) => user.username))
      })

      .catch((error) => {
        console.log(error)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
    }

    console.log(exercise)

    axios
      .post(
        "http://localhost:5000/exercises/update/" + props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data))

    window.location = "/"
  }

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            refs="userInput"
            className="form-control"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            defaultValue={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  )
}

export default EditExercise
