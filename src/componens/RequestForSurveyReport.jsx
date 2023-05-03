import React, { useEffect, useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { Button, Card, Col, Input, Row, Table } from "reactstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { _fetchApi } from "../helpers/helper";

function RequestForSurveyReport() {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getList = () => {
    _fetchApi(
      "/api/getGrant",
      (res) => {
        setData(res.results[0]);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getList();
  }, []);
  const [hello, setHello] = useState("");

  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(data)} */}
        <center>
          <h5 className="mb-3">Request For Survey Report</h5>
        </center>

        {/* <thead> */}
        <p>Please find enclosed herewith the following:</p>
        <p> a) Completed application forms</p>
        <p> b) Four copies of side-plan and</p>
        <p> c) Local government confimation</p>
        <p> Your are to record the application and prepare survcy cadastral report in due course. </p>
        <p>
          <b>Tittle</b>: {data[0]?.date_of_issue}
       </p>
        <p style={{ textAlign: "right" }}>Name______________________</p>
        <p style={{ textAlign: "right" }}>Rank______________________</p>
        <p style={{ textAlign: "right" }}>
          For Director Land______________________ 
        </p>
        <div>
          <button className="mt-3 app_btn">Submit</button>
        </div>
      </Card>
    </div>
  );
}

export default RequestForSurveyReport;
