import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper';

function Plots() {
    const [list,setList]=useState({
        layout_number:''  
    })

    const handleChange = ({ target: { name, value } }) => {
        setList((p) => ({ ...p, [name]: value }));
      };

      const handleSubmit = () => {
        _postApi('/api/plots',list,
        (res)=>{
            console.log(res)
        },(err)=>{
            console.log(err)
        }
        )
      };
  return (
    <div>
         <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Plots</h5>
        <Row className="mb-1">
        <Col md={6}>
            <label className="input_label">layout_number</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="layout_number"
                value={list.layout_number}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label">Plots_numbers</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="Plots_numbers"
                value={list.Plots_numbers}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label">beacon numbers</label>
            <div>
              <textarea
                type="text"
                className="input_field"
                name="beacon_numbers"
                value={list.beacon_numbers}
                onChange={handleChange}
              />
            </div>
          </Col>

        

          <Col md={6}>
            <label className="input_label">plan_number</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="plan_number"
                value={list.plan_number}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label">location</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="location"
                value={list.location}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="mt-3 app_btn" onClick={handleSubmit}>
          Submit
            {/* {loading ? "...loading" : "Submit"} */}
          </button>
        </div>
        </Card>
    </div>
  )
}

export default Plots