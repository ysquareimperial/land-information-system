import React from 'react'
import { Card, Row, Col } from 'reactstrap'
import { useState } from 'react'

export default function GenerateRecComm() {
  const [loading, setLoading] = useState()
  const handleSubmit = () => {}
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Generate Recommendation Letter</h5>
        <Row>
          <Col md={3}>
            <label className="input_label">Application File No</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Value of Proposed Dev</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Time of Completion</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Development Charges</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Survey Charges</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Location</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plot No</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Plan No</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Term</label>
            <h5>fasdfsda</h5>
          </Col>
          <Col md={3}>
            <label className="input_label">Annual Ground Rent</label>
            <h5>fasdfsda</h5>
          </Col>
          <hr />

          <Row>
            <Col lg={3}>
              <label className="input_label">
                Director Land Recommendation
              </label>
              <h5>fasdfsda fasfasdf fasfa sfasddfas df afasdfasd</h5>
            </Col>
            <Col lg={3}>
              <label className="input_label">Director Land Signature</label>
              <h5>Dir. Land</h5>
            </Col>
            <Col lg={3}>
              <label className="input_label">
                Director Land Signature Date
              </label>
              <h5>12/12/2022</h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={3}>
              <label className="input_label">Perm. Sec. Recommendation</label>
              <h5>fasdfsda fasfasdf fasfa sfasddfas df afasdfasd</h5>
            </Col>
            <Col lg={3}>
              <label className="input_label">Perm. Sec. Signature</label>
              <h5>Dir. Land</h5>
            </Col>
            <Col lg={3}>
              <label className="input_label">Perm. Sec. Signature Date</label>
              <h5>12/12/2022</h5>
            </Col>
          </Row>
          <hr />

          <Col lg={3}>
            <label className="input_label">Date</label>
            <div>
              <input type="date" className="input_field" />
            </div>
          </Col>
        </Row>

        <label className="input_label mt-3">
          Recommendation Commissioner/Governor
        </label>
        <div>
          <textarea
            type=""
            className="input_field"
            placeholder="write recommendation here..."
            rows={4}
          />
        </div>
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
              Send to Account.
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}
