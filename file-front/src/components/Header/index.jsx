import React, { useState } from 'react'
import { Navbar, Container, InputGroup, Form, Button } from 'react-bootstrap'

const Header = () => {
  const [search, setSearch] = useState('')

  const searchAction = () => {
    window.location.assign(`/${search ? `?fileName=${search}` : ''}`)
  }
  return (
    <Navbar expand='lg' className='bg-body-secondary'>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Navbar.Brand href='#home'>Test List React App + Express</Navbar.Brand>
        <InputGroup>
          <Form.Control
            value={search}
            placeholder='Search'
            aria-label='search'
            onChange={(value) => { setSearch(value.currentTarget.value) }}
            onKeyUp={(value) => { if (value.key === 'Enter') searchAction() }}
          />
          <Button variant='outline-secondary' id='button-addon2' onClick={searchAction}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </Navbar>
  )
}

export default Header
