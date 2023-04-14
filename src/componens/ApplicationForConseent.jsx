import React, { useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { _postApi } from "../helpers/helper";

export default function ApplicationForConseent() {
  const [list, setList] = useState({
    right_of_occupancy_number: "",
    name_of_applicant: "",
    local_and_correspondence: "",
    name_of_holder: "",
    local_of_right_of_occupancy: "",
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
          right_of_occupancy_number: "",
          name_of_applicant: "",
          local_and_correspondence: "",
          name_of_holder: "",
          local_of_right_of_occupancy: "",
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
        <h5 className="mb-3">Application For Consent To Mortgate</h5>
        {/* {JSON.stringify(list)} */}
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Right Of OCCupancy Number</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="right_of_occupancy_number"
                value={list.right_of_occupancy_number}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">Name Of Applicant</label>
            <div>
              <input
                type="text"
                className="input_field"
                name="name_of_applicant"
                value={list.name_of_applicant}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="input_label">
              Local And Correspondence Address
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                name="local_and_correspondence"
                value={list.local_and_correspondence}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">
              Name Of Holder (If Defferent From Application)
            </label>
            <div>
              <input
                type="text"
                className="input_field"
                name="name_of_holder"
                value={list.name_of_holder}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={6}>
            <label className="input_label">
              Location Of Right Of Occupancy
            </label>
            <div>
              <input
                className="input_field"
                type="number"
                name="local_of_right_of_occupancy"
                value={list.local_of_right_of_occupancy}
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
