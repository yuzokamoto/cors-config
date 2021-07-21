import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const corsConfig = {
  origin: "https://puzzled-property.surge.sh",
  optionsSuccessStatus: 200
}

const app = express()
app.use(express.json())
app.use(cors(corsConfig))

app.get("/", (req, res) => {
  try {
    res.send({
      result: "Servidor online!"
    })
  } catch (error) {
    console.log(error)
    res.send({error})
  }
})

app.listen(process.env.PORT)
