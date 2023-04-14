import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'

function FinanceForm() {
    const [loading,setLoading]=useState(false)
    const [list, setList] = useState({
        application_id: '',
        type_application: '',
        document_name: '',
        description: '',
      })
      const handleChange = ({ target: { name, value } }) => {
        setList((p) => ({ ...p, [name]: value }))
      }
  return (
    <div>
          <Card className='app_primary_card m-2 shadow p-4'>
        <center><h5 className="mb-3">Finance</h5></center>
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Application ID</label>
            <div>
              <select className="input_field">
<option>1</option>
              </select>
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Applicant Name</label>
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
            <label className="input_label">Amount</label>
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
            <label className="input_label">Description</label>
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
          <button className="mt-3 app_btn" >
            {loading ? '...loading' : 'Submit'}
          </button>
        </div>
        </Card>
    </div>
  )
}

export default FinanceForm