import React from "react";
import { BsArrowLeft, BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table } from "reactstrap";

export default function ApplicationForConseentTable() {
    const navigate = useNavigate()
  return (
    <Card className="app_primary_card m-2 shadow p-4">
      <center>
        <h5 className="mb-3">Application Form Consent To Mortgate</h5>
      </center>

      <button
        className="mt-2 app_btn col-md-2"
        onClick={() => navigate("/executive-govermor")}
      >
        <BsPlusLg /> New Application
      </button>
      <div>
        <Table borderless striped responsive className="mt-3">
          <thead>
            <tr>
              <td>S/N</td>
              <td>Right</td>
              <td>Name Of Applicant</td>
              <td>Location Of Application</td>
              <td>Name Of Holder (If Different From Application )</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>woww</td>
              <td>woww</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>india</td>
              <td>india</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>{" "}
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>dadd</td>
              <td>daad</td>
              <td>
                {/* <button className="table_btn">Re-Grant</button> */}
                Edit
              </td>
            </tr>{" "}
            <tr>
              <td scope="row">1</td>
              <td>Mark</td>
              <td>america</td>
              <td>india</td>
              <td>india</td>
              <td>
                {/* <button className="table_btn">Edit</button> */}
                Edit
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  );
}
