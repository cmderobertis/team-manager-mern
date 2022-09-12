import React, { useState, useEffect } from "react"
import PlayerList from "../components/PlayerList"
import axios from "axios"

const Manager = () => {
  const [players, setPlayers] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((response) => {
        setPlayers(response.data)
        setLoaded(true)
      })
      .catch((error) => console.error(error))
  }, [])

  const removeFromDom = (playerId) => {
    setPlayers(players.filter((p) => p._id != playerId))
  }

  return (
    <div>
      {loaded && (
        <PlayerList
          removeFromDom={removeFromDom}
          players={players}
          setPlayers={setPlayers}
        ></PlayerList>
      )}
    </div>
  )
}

export default Manager
