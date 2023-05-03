import React, { useEffect, useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { Button, Card, Col, Input, Row, Table } from "reactstrap";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { _fetchApi } from "../helpers/helper";

function CertificateOfOccupancyRent() {
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
          <h5 className="mb-3">Certificate Of Occupancy Rent</h5>
        </center>
        <Row>
          <Col md={3}>
            <p>
              <b>Number: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>

          <Col md={3}>
            <p>
              <b>Date Of Issue: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Date Of Expiry: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Rent Per Annum: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Location Station: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>District: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <p>The rent and fees payable are made as fol: lows:- </p>
          <Col md={3}>
            <p>
              <b>Rent From: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Per Annum N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Registration Fees: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Survey Fees: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Preparation Fees: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Development: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Total N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <p>Less: </p>
          <Col md={3}>
            <p>
              <b>Amount Deposited On Kano CRC No: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Of: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>20: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>N: </b>
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <Col md={3}>
            <p>
              <b>Balance Due To Government Applicet N: </b>{" "}
              {/* {data[0]?.date_of_issue} */}
            </p>
          </Col>
          <p className="mt-2">
            <p>
              2. Will you please remint this sum diect to this office not later
              then a month from the date of this later
            </p>
            <p>
              3. I would take this opportunity of reminding you that further
              annul rent payable.
            </p>
          </p>
        </Row>
        <div>
          <button className="mt-3 app_btn">Submit</button>
        </div>
      </Card>
    </div>
  );
}

export default CertificateOfOccupancyRent;
