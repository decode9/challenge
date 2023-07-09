import { GET_FILES, GET_FILES_DATA, fetchService, onlyNumbers } from '../../utils/index.js'

const formatData = async (file) => {
  const lines = []
  try {
    const fileData = await fetchService(`${GET_FILES_DATA}/${file}`)
    const separateLine = fileData.split('\n')
    if (separateLine?.length <= 1) return null
    const header = []
    for (const data in separateLine) {
      const line = {}
      const elements = separateLine[data].split(',')
      for (const element in elements) {
        if (Number(element) !== 0) {
          if (Number(data) === 0) header.push(elements[element])
          if (Number(data) !== 0 && elements[element]) {
            const selectHeader = header[element - 1]
            if (selectHeader === 'number') {
              if (onlyNumbers.test(elements[element])) line[selectHeader] = Number(elements[element])
              continue
            }
            if (selectHeader === 'hex') {
              if (elements[element].length === 32) line[selectHeader] = elements[element]
              continue
            }
            line[selectHeader] = elements[element]
          }
        }
      }
      if (Object.keys(line)?.length === 3) lines.push(line)
    }
    return lines
  } catch (error) {
    return null
  }
}

const formatFiles = async (files) => {
  const filesData = []
  for (const file of files) {
    const data = {
      file,
      lines: []
    }
    const lines = await formatData(file)
    if (lines && lines?.length > 0) {
      data.lines = lines
      filesData.push(data)
    }
  }

  return filesData
}

export const getFilesData = async (req, res) => {
  try {
    const fileName = req.query?.fileName

    const response = await fetchService(GET_FILES)
    const files = response?.files || []
    const formatted = await formatFiles(files)
    if (fileName) {
      const file = formatted.find((indexFile) => indexFile?.file === fileName)
      if (file) return res.send([file])
      throw Error(JSON.stringify({ status: 404, message: 'File not found or doesn\'t have lines' }))
    }
    res.send(formatted)
  } catch (err) {
    const data = JSON.parse(err?.message)
    return res.status(data?.status || 500).send({ error: data?.message || 'an error has ocurred' })
  }
}

export const getFiles = async (req, res) => {
  try {
    const response = await fetchService(GET_FILES)
    const files = response?.files || []
    res.send(files)
  } catch (err) {
    const data = JSON.parse(err?.message)
    return res.status(data?.status || 500).send({ error: data?.message || 'an error has ocurred' })
  }
}
