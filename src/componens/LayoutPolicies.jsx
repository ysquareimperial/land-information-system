import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { _fetchApi, _postApi } from "../helpers/helper";

export default function LayoutPolicies() {
  const [list, setList] = useState({
    layout_number: "",
    policy_item_id: "",
    policy_name: "",
    item_description: "",
    item_value: "",
    survey_charges:'',
          development_charges:'',
          term:'',
          annual_ground_rent:'',
  });
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }));
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    _postApi("/api/layout_policies", list, (res) => {
      console.log(res);
      if (res.success) {
        setLoading(false);
        setList({
          layout_number: "",
          policy_item_id: "",
          policy_name: "",
          item_description: "",
          item_value: "",
        });
        alert("success");
      }
    }),
      (err) => {
        setLoading(false);
        console.log(err);
      };
  };
  const [data,setData]=useState([])

  const getList = ()=>{
    _fetchApi('/api/getPlotiig',
    (res)=>{
        setData(res.results[0])
    },(err)=>{
        console.log(err)
    }
    )
  }
  useEffect(
    ()=>{
        getList();
        
    },[]
  )
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Layout Policies</h5>
        {/* {JSON.stringify(data[0])} */}
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Layout Number</label>
            <div>
              <select
                // type="text"
                className="input_field"
                name="layout_number"
                value={list.layout_number}
                onChange={handleChange}
              >
                <option>---select---</option>
                {
                  data.map((item)=>(<option>{item.layout_number}</option>))
                }
              </select>
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Policy Item ID</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="policy_item_id"
                value={list.policy_item_id}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="input_label">Policy Name</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="policy_name"
                value={list.policy_name}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Item Description</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="item_description"
                value={list.item_description}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Item Value</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="item_value"
                value={list.item_value}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label"> Survey Charges</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="survey_charges"
                value={list.survey_charges}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Development Charges</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="development_charges"
                value={list.development_charges}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Term</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="term"
                value={list.term}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Annual Ground Rent</label>
            <div>
              <input
                className="input_field"
                type="number"
                name="annual_ground_rent"
                value={list.annual_ground_rent}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div>
          <button className="mt-3 app_btn" onClick={handleSubmit}>
            {loading ? "...loading" : "Submit"}
          </button>
        </div>
      </Card>
    </div>
  );
}
