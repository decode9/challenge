import React from 'react'
import { Container, Table } from 'react-bootstrap'

const MainTable = ({ lines, fileName }) => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      {(fileName && !lines?.length)
        ? (
          <h2 className='text-center'>Can't Find the searched file or doesn't have valid lines</h2>
          )
        : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {lines?.map((line, index) => {
                return (
                  <tr key={index}>
                    <td>{line?.fileName}</td>
                    <td>{line?.text}</td>
                    <td>{line?.number}</td>
                    <td>{line?.hex}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          )}
    </Container>
  )
}

export default MainTable
