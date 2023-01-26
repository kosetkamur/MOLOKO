const express = require('express')
let cors = require('cors')
const app = express()
const port = 'http://zinchi5d.beget.tech'

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.get('/api/news.list', cors(corsOptions), (req, res) => {
  res.send(
      require('http://zinchi5d.beget.tech')
  )
})

