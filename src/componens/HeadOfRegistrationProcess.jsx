import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function HeadOfRegistrationProcess() {
  const handleSubmit = () => {}
  const [loading, setLoading] = useState()
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <Row>
          <Col md={12}>
            {' '}
            <h5 className="mb-3">
              Application for consent to assign statutory right of occupancy
              (For Official Use Only)
            </h5>
          </Col>
        </Row>
        <div className="d-flex mb-2 mt-3" style={{ gap: 10 }}>
          <p className="m-0">
            Applicant Name:<b>fasf</b>
          </p>
          <p className="m-0">
            Assignee Name:<b>fasf</b>
          </p>
          <p className="m-0">
            Right Of Occupancy No:<b>fasf</b>
          </p>
        </div>
        <Row>
          <Col md={3}>
            <label className="input_label">Type of building</label>
            <div>
              <select
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              >
                <option>--select--</option>
                <option>Office</option>
                <option>Bungalow</option>
                <option>Duplex</option>
                <option>Warehouse</option>
                <option>Factory building</option>
                <option>Block of flats</option>
                <option>Filling station</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">No of floors</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>{' '}
          <Col md={3}>
            <label className="input_label">No of blocks</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>{' '}
          <Col md={3}>
            <label className="input_label">Stage of development</label>
            <div>
              <select
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              >
                <option>--select--</option>
                <option>Completed</option>
                <option>Under construction</option>
              </select>
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Value of development</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>{' '}
          <Col md={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Head of valuation signature</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <p>
            I recommend the Application by: the holder/on behalf of the owner of
            the property covered by right of occupancy No: for consent to Assign
            the Same Right of Occupancy to: fo consideration of N
          </p>
          <p className="m-0">
            Tex Clearance Certificate ABC and all Ground Rent/Charges have been
            paid up to date:
          </p>
        </div>
        <Row>
          <Col md={3}>
            <label className="input_label">Date</label>
            <div>
              <input
                className="input_field"
                type="date"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={3}>
            <label className="input_label">Signature</label>
            <div>
              <input
                className="input_field"
                type="text"
                name="name_of_original_holder"
                // value={form.name_of_original_holder}
                // onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          {loading ? (
            <button
              className="app_btn mt-3"
              disabled
              style={{ cursor: 'not-allowed', backgroundColor: '#A9A9A9' }}
            >
              Loading...
            </button>
          ) : (
            <button className="app_btn mt-3" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}
