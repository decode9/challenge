import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import styles from './styles.module.css'
const Loader = () => (
  <Modal show centered fullscreen contentClassName={styles._customContent}>
    <Modal.Body style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </Modal.Body>

  </Modal>
)

export default Loader
