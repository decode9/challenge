import express from 'express'

const app = express()

app.use((req, res, next) => {
  res.append('Content-Type', 'application/json')
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  res.append('Access-Control-Allow-Origin', ['*'])
  next()
})

export default app
