import React, { useState, useEffect } from "react"
import axios from "axios"

const StatusList = ({ num }) => {
  const [player, setPlayer] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [players, setPlayers] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players/")
      .then((response) => {
        console.log("useEffect -->", response.data[0].status3)
        setPlayers(response.data)
        setLoaded(true)
      })
      .catch((error) => console.error(error))
  }, [player])
  const updateStatus = (playerId, status) => {
    setPlayer(players.filter((p) => p._id === playerId)[0])
    axios
      .put("http://localhost:8000/api/players/" + playerId, {
        ...player,
        ["status" + num]: status,
      })
      .then((response) => {
        console.log("updateStatus -->", response.data.status3)
        setPlayer(response.data)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Players</h4>
        <table className="table table-bordered table-striped table-hover m-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              players.map((player) => {
                return (
                  <tr key={player._id} className="align-baseline">
                    <td>{player.name}</td>
                    <td>
                      <button
                        className={
                          "btn " +
                          (player[`status${num}`] == "playing"
                            ? "btn-success"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(player._id, "playing")}
                      >
                        Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (player[`status${num}`] == "not playing"
                            ? "btn-danger"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(player._id, "not playing")}
                      >
                        Not Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (player[`status${num}`] == "undecided"
                            ? "btn-warning"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(player._id, "undecided")}
                      >
                        Undecided
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StatusList
