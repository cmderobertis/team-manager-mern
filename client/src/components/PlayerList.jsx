import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import DeleteButton from "./DeleteButton"

const PlayerList = ({ players, setPlayers, removeFromDom }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((response) => setPlayers(response.data))
  }, [])

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Players</h4>
        <table className="table table-bordered table-striped table-hover m-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <tr key={player._id} className="align-baseline">
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td className="">
                    <Link
                      to={"/players" + "/edit/" + player._id}
                      className="btn btn-success me-3"
                    >
                      Edit
                    </Link>

                    <DeleteButton
                      playerId={player._id}
                      successCallback={() => removeFromDom(player._id)}
                    />
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

export default PlayerList
