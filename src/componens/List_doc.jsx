import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function List_doc() {
  const [list, setList] = useState({
    application_id: '',
    type_application: '',
    document_name: '',
    description: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/list_doc?in_query_type=Insert', list, (res) => {
      console.log(res)
      if (res.succes) {
        setLoading(false)
        setList({
          document_id: '',
          type_application: '',
          document_name: '',
          description: '',
        })
        alert('success')
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">List Documents</h5>
        {/* {JSON.stringify(list)} */}
        <Row className="">
          <Col md={6}>
            <label className='input_label'>Document ID</label>
            <div>
              <input
                className="input_field"
                name="document_id"
                value={list.document_id}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className='input_label'>Application Type</label>
            <div>
              <input
                className="input_field"
                name="type_application"
                value={list.type_application}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className='input_label'>Document Name</label>
            <div>
              <input
                className="input_field"
                name="document_name"
                value={list.document_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className='input_label'>Description</label>
            <div>
              <input
                className="input_field"
                name="description"
                value={list.description}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="mt-2 app_btn" onClick={handleSubmit}>
            {loading ? '...loading' : 'Submit'}
          </button>
        </div>
      </Card>
    </div>
  )
}
