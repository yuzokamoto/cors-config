import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const corsConfig = {
  origin: "https://puzzled-property.surge.sh",
  optionsSuccessStatus: 200
}

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
app.use(express.json())
app.use(cors(corsConfig))

app.get("/", (req, res) => {
  res.send({
    result: "Servidor online!"
  })
})

app.listen(process.env.PORT)
