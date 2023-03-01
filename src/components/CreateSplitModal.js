import { Form, Modal, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import { useState, useRef } from 'react'
import { v4 as uuidV4 } from 'uuid'

export default function CreateSplitModal({ show, handleClose }) {
  const [items, setItems] = useState([
    { key: uuidV4(), id: '', qty: '', desc: '', cost: '' },
  ])

  const addItem = () => {
    setItems([...items, { key: uuidV4(), id: '', qty: '', desc: '', cost: '' }])
  }

  const splitNameRef = useRef()
  const dateRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(data.values)
  }

  // function updateItem(key) {
  //   const editItem = items.map((item) => {
  //     if (item.key === item) {
  //       // Increment the clicked counter
  //       return {}
  //     } else {
  //       // The rest haven't changed
  //       return item
  //     }
  //   })
  //   setItems(editItem)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const newSplit = {
  //     name: splitNameRef.current.value,
  //     date: dateRef.current.value,
  //     items: items,
  //   }
  //   console.log(newSplit)
  // }

  return (
    <Modal show={show} onHide={handleClose} fullscreen={true}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Add New Tab to Split</Modal.Title>
          <Button onClick={addItem} size='sm'>
            Add Item
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className='mb-4'>
              <Col xs={12} md={8}>
                <Form.Group controlId='splitName'>
                  <Form.Label>
                    <h5>Split Name</h5>
                  </Form.Label>
                  <Form.Control
                    key='name'
                    type='text'
                    ref={splitNameRef}
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={8} md={4}>
                <Form.Group controlId='date'>
                  <Form.Label>
                    <h5>Date</h5>
                  </Form.Label>
                  <Form.Control key='date' type='date' ref={dateRef} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Row className='mb-2'>
                <Col xs={4} md={1}>
                  <h5>Qty</h5>
                </Col>
                <Col xs={10} md={8}>
                  <h5>Item Name</h5>
                </Col>
                <Col xs={6} md={3}>
                  <h5>Cost</h5>
                </Col>
              </Row>

              {items.map((item) => {
                return (
                  <Row className='mb-3'>
                    <Col xs={4} md={1}>
                      <Form.Control
                        id='qty'
                        type='number'
                        placeholder='Qty'
                        min={0}
                      />
                    </Col>
                    <Col xs={10} md={8}>
                      <Form.Control
                        id='item'
                        type='text'
                        placeholder='Item Name'
                      />
                    </Col>
                    <Col xs={6} md={3}>
                      <Form.Control
                        id='cost'
                        type='number'
                        min='0.01'
                        step='0.01'
                        placeholder='Cost'
                      />
                    </Col>
                  </Row>
                )
              })}
            </Form.Group>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button type='submit'>Submit</Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
