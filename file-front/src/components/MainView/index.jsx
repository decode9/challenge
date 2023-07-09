import React, { useEffect, useMemo } from 'react'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import Table from '../Table'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../store/actions'
import Loader from '../Loader'

const MainView = () => {
  const dispatch = useDispatch()
  const { showLoader } = useSelector((state) => state?.intermitence)
  const { files } = useSelector((state) => state?.file)

  const searchParams = new URLSearchParams(document.location.search)
  useEffect(() => {
    dispatch(getFiles(searchParams?.get('fileName') || ''))
  }, [])

  const tableLines = useMemo(() => {
    const data = files.reduce((prev, next) => {
      const lines = next?.lines
      for (const line of lines) {
        line.fileName = next?.file
        prev.push(line)
      }
      return prev
    }, [])
    return data
  }, [files, files?.length])

  return (
    <Container style={{ width: '100%', maxWidth: '100%', padding: 0 }}>
      <Header />
      <Table lines={tableLines} fileName={searchParams?.get('fileName')} />
      {showLoader && <Loader />}
    </Container>
  )
}

export default MainView
