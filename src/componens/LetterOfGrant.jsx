import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'

export default function LetterOfGrant() {
  const _form = {
    letter_id: '',
    file_no: '',
    date_of_issue: '',
    serial_no: '',
    permsec_signature: '',
    signature_date: '',
  }
  const [letterOfGrantForm, setLetterOfGrantForm] = useState(_form)
  const [loading, setLoading] = useState(false)
  const handleChange = ({ target: { name, value } }) => {
    setLetterOfGrantForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/create-letter-of-grant', letterOfGrantForm, (res) => {
      setLoading(false)
      console.log(res)
      if (res.success) {
        alert('success')
        setLetterOfGrantForm(_form)
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
        <h5 className="mb-3">Letter of Grant</h5>
        {/* {JSON.stringify(letterOfGrantForm)} */}

        <Row>
          <Col md={3}>
            <label className="input_label">Letter ID</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="letter_id"
                value={letterOfGrantForm.letter_id}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">File No</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="file_no"
                value={letterOfGrantForm.file_no}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Date of Issue</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="date_of_issue"
                value={letterOfGrantForm.date_of_issue}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={3}>
            <label className="input_label">Serial No</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="serial_no"
                value={letterOfGrantForm.serial_no}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <label className="input_label">Perm Sec Signature</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="permsec_signature"
                value={letterOfGrantForm.permsec_signature}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Signature Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="signature_date"
                value={letterOfGrantForm.signature_date}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="app_btn mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Card>
    </div>
  )
}
