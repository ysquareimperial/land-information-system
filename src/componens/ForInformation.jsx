import React, { useEffect, useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { Button, Card, Col, Input, Row, Table } from "reactstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { _fetchApi, useQuery } from "../helpers/helper";

function ForInformation() {
  // const [data, setData] = useState([]);
  const query = useQuery()
  const file_no = query.get('file_no')
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getList = () => {
    _fetchApi(
      `/api/getreByIDs?file_no=${file_no}`,
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
        <Row>
      <Col md={9} ></Col>
        <Col md={3} >
        <div style={{border:'2px solid black',padding:'20px',borderRadius:'6px'}}>
          <span>Code : LAND 16</span>
          <span>SERIAL No.....</span>
        </div>
        </Col></Row>

        <Row className="mt-3">
      <Col md={8} ></Col>
        <Col md={4} >
        <div >
          <span>REF/NO./LKN : {data[0]?.file_no}</span><br />
          <span>Kano State Bureau for Land Management</span>
          <span>office of the Executive Governor</span>
          <span>P.M.B 3083,</span>
          <span>No. 2 Dr,Bala  Muhhamad Road,</span>
          <span>Kano State</span>
        </div>
        </Col></Row>

        <span>The Director Survey,</span>
        <span>Survey Department.</span>
        {/* {JSON.stringify(data)} */}
        <center>
          <h5 className="mb-3"><u>For Information</u></h5>
        </center>

        {/* <thead> */}
        <p>
          The grantee has accepted the term and conditions of the grant and date
          of commencement of the
        </p>
        {/* {data?.map((item) => (    */}
        <p>
          Tittle: {data[0]?.application_date}
        </p>
        <p style={{ marginRight: 10 }}>
          <b>Day Of</b>
          {}
        </p>
        {/* ))} */}
        <p className="mt-2 m-3">2. He has nominated you to survey his plot</p>
        <p className="mt-2 m-3">
          3. It is not intended to prepare the certificate the occupancy unit
          initial fee has been paid
        </p>
        <p style={{ textAlign: "right" }}>Name____________________</p>
        <p style={{ textAlign: "right" }}>Rank____________________</p>
        <p style={{ textAlign: "right" }}>
        ____________________<br />For Director Land
        </p>
        <div>
          <button className="mt-3 app_btn">Submit</button>
        </div>
      </Card>
    </div>
  );
}

export default ForInformation;
