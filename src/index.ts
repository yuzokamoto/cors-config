import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Servidor online.")
})

app.listen(process.env.PORT)
