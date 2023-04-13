import React, { useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function Require_documents() {
  const [docs, setDocs] = useState({
    application_id: '',
    document_id: '',
    document_name: '',
    document_object: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setDocs((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/required_docs?in_query_type=Insert', docs, (res) => {
      console.log(res)
      if (res.succes) {
        setLoading(false)
        setDocs({
          application_id: '',
          document_id: '',
          document_name: '',
          document_object: '',
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
        <h5 className="mb-3">Documents</h5>
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Application ID</label>
            <div>
              <input
                className="input_field"
                name="application_id"
                value={docs.application_id}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Document ID</label>
            <div>
              <input
                className="input_field"
                name="document_id"
                value={docs.document_id}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="input_label">Documents Name</label>
            <div>
              <input
                className="input_field"
                name="document_name"
                value={docs.document_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Document Object</label>
            <div>
              <input
                className="input_field"
                name="document_object"
                value={docs.document_object}
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
