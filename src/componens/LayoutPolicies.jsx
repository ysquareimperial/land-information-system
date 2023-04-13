import React, { useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { _postApi } from "../helpers/helper";

export default function LayoutPolicies() {
  const [list, setList] = useState({
    layout_number: "",
    policy_item_id: "",
    policy_name: "",
    item_description: "",
    item_value: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }));
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    _postApi("/api/layout_policies", list, (res) => {
      console.log(res);
      if (res.succes) {
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
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-3">Layout Policies</h5>
        {/* {JSON.stringify(list)} */}
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Layout Number</label>
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
