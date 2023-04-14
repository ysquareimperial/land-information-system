import React from 'react'
import { Col, Row } from 'reactstrap'

export default function ForOfficialUseForm({ onChange, name, value, label }) {
  return (
    <div>
      <h6 className='mt-4 blue p-2 for'>For Official Use Only</h6>
      <Row className="mb-2">
        <Col md={3}>
          <label className="input_label">Application Fee</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>
        <Col md={3}>
          <label className="input_label">R.C.R. No</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>{' '}
        <Col md={3}>
          <label className="input_label">R.C.R. No of</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>{' '}
        <Col md={3}>
          <label className="input_label">T.C. No</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <label className="input_label">T.C. No of</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>
        <Col md={3}>
          <label className="input_label">{label}</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>{' '}
        <Col md={3}>
          <label className="input_label">Date</label>
          <div>
            <input
              className="input_field"
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
