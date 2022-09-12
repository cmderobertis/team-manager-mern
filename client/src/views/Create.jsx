import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import PlayerForm from "../components/PlayerForm"

const Create = (props) => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const createPlayer = (player) => {
    axios
      .post("http://localhost:8000/api/players", {
        ...player,
        status1: "undecided",
        status2: "undecided",
        status3: "undecided",
      })
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
      <PlayerForm
        onSubmitProp={createPlayer}
        errors={errors}
        initialName=""
        heading="Create Player"
      ></PlayerForm>
    </div>
  )
}

export default Create
