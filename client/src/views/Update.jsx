import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import PlayerForm from "../components/PlayerForm"
import DeleteButton from "../components/DeleteButton"

const Update = (props) => {
  const [player, setPlayer] = useState({})
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/players/" + id).then((response) => {
      setPlayer(response.data)
      setLoaded(true)
    })
  }, [])

  const updatePlayer = (player) => {
    axios
      .put("http://localhost:8000/api/players/" + id, player)
      .then((response) => {
        console.log(response.data)
        navigate("/")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key in errorResponse) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div>
      {loaded && (
        <>
          <PlayerForm
            onSubmitProp={updatePlayer}
            initialName={player.name}
            initialPosition={player.position}
            heading="Update Player"
            errors={errors}
          />
          <p></p>
          <DeleteButton
            playerId={player._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update
