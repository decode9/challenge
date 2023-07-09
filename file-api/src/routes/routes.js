import { app } from '../bootstrap/index.js'
import { getFiles, getFilesData } from '../controllers/index.js'

app.get('/', (req, res) => {
  res.send({ result: 'hello from file API' })
})

app.get('/files/data', getFilesData)

app.get('/files/list', getFiles)
