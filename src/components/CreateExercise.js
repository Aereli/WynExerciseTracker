import React, { useState, useEffect } from "react"

const CreateExercise = () => {
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState(0)
  const [users, setUsers] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    const exercise = {
      username: username,
      description: description,
      duration: duration,
    }
    console.log(exercise)
    window.location = "/"
  }

  useEffect((users) => {
    setUsers(["test"])
    setUsername("test user")
  }, [])

  return (
    <div>
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              refs="userInput"
              required
              className="form-control"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            >
              {users &&
                users.map(function (user) {
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
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateExercise
