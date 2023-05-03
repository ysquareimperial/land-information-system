import React, { useEffect, useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { Button, Card, Col, Input, Row, Table } from "reactstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { _fetchApi } from "../helpers/helper";

function ForInformation() {
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
          <h5 className="mb-3">For Information</h5>
        </center>

        {/* <thead> */}
        <p>
          The grantee has accepted the term and conditions of the grant and date
          of commencement of the
        </p>
        {/* {data?.map((item) => (    */}
        <p>
          <b>Tittle</b>: {data[0]?.date_of_issue}
        </p>
        <p style={{ marginRight: 10 }}>
          <b>Day Of</b>
          {}
        </p>
        {/* ))} */}
        <p className="mt-2">2. He has nominated you to survey his plot</p>
        <p className="mt-2">
          3. It is not intended to prepare the certificate the occupancy unit
          initial fee has been paid
        </p>
        <p style={{ textAlign: "right" }}>Name____________________</p>
        <p style={{ textAlign: "right" }}>Rank____________________</p>
        <p style={{ textAlign: "right" }}>
          For Director Land____________________
        </p>
        <div>
          <button className="mt-3 app_btn">Submit</button>
        </div>
      </Card>
    </div>
  );
}

export default ForInformation;
