import React, { useEffect, useState } from "react";
import { Card, Col, Input, Modal, ModalBody, Row, Table } from "reactstrap";
import { _fetchApi, _postApi, useQuery } from "../helpers/helper";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import SearchBar from "./SearchBar";

function FinanceForm() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({
    application_id: "",
    applicant_full_name: "",
    amount: "",
    type: "",
    description: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setList((p) => ({ ...p, [name]: value }));
  };
  const [data, setData] = useState([]);
  const [charges, setCharges] = useState([]);
  const getID = () => {
    _fetchApi(
      "/api/getBYID?status=application",
      (res) => {
        setData(res.results);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const getCharges = () => {
    _fetchApi(
      "/api/getCharges",
      (res) => {
        setCharges(res.results);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getID();
    getCharges();
  }, []);
  const navigate = useNavigate();
  const postFinace = () => {
    setLoading(true);
    _postApi(
      "/api/post-finace",
      list,
      (res) => {
        if (res.success) {
          setLoading(false);
          alert("success");
          navigate(-1);
        }
        console.log(res);
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };
  const query = useQuery();
  const type = query.get("type");
  const byResidential = charges[0]?.filter((i) => i.type === type || list.type);
  const total =
    byResidential &&
    byResidential.reduce((total, item) => parseFloat(item.amount) + total, 0);

  const applicant_full_name = query.get("applicant_full_name");
  const application_id = query.get("application_id");
 
      useEffect(
        ()=>{
          setList((p)=>({...p, amount:total,applicant_full_name:applicant_full_name,application_id:application_id,type:type==='null'?'':type}))
        },[]
        )
        useEffect(
        ()=>{
          setList((p)=>({...p, amounts:type==='schedule payment'?12000:total?.toLocaleString(),amount:type==='schedule payment'?12000:total}))
        },[total]
      )
      const [modal3, setModal3] = useState(false)
      const toggle3 = () => setModal3(!modal3)

  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(type==='null'?"iam empty": type)} */}
        <center>
          <h5 className="mb-3">Finance</h5>
        </center>
        <Row className="mb-1">
          <Col md={6}>
            <label className="input_label">Application Type</label>
            <div>
              <select
                className="input_field"
                name="type"
                value={list.type}
                onChange={handleChange}
              >
                <option>---select----</option>
                <option>residential</option>
                <option>commercial</option>
                <option>grant</option>
                <option>schedule payment</option>
             </select>
            </div>
          </Col>
          <Col md={6} className="mt-0">
            <label className="input_label">Application Number</label>
            <div className="search_input_form">
              <input
                className="input_field"
                value={list.application_id}
                onChange={handleChange}
                name="hotel"
              />  
              <BsSearch className="search_icon" onClick={toggle3} />
              <Modal isOpen={modal3} toggle={toggle3} size="xl">
                <ModalBody>
                  <SearchBar />
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Applicant Name</th>
                        <th>Applicantion Number</th>
                        <th>State of origin</th>
                        <th>Bussiness Occupation</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data[0]?.map((item) => (
                        <tr>
                          <td>{item.Applicant_full_name}</td>
                          <td>{item.application_id}</td>
                          <td>{item.State_of_origin}</td>
                          <td>{item.occupation_business}</td>
                          <td>
                            <button
                              className="app_btn"
                              onClick={() => {
                                setList((p) => ({
                                  ...p,
                                  application_id: item.application_id,
                                  applicant_full_name: item.Applicant_full_name,
                                }));
                                toggle3();
                              }}
                            >
                              select
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </ModalBody>
              </Modal>
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label">Applicant Name</label>
            <div>
              <input
                disabled
                className="input_field"
                name="applicant_full_name"
                value={list.applicant_full_name}
                onChange={handleChange}
              />
            </div>
          </Col>

          <Col md={6}>
            <label className="input_label">Amount</label>
            <div>
              <input
                className="input_field"
                name="amounts"
                value={list.amounts}
                onChange={handleChange}
                // type='number'
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
          <Col>
            <div className="d-flex justify-content-around mt-4">
              {byResidential?.map((item) => (
                <span style={{ fontSize: 10 }}>
                  {" "}
                  <Input checked type="checkbox" />
                  {item.name} :{parseInt(item.amount).toLocaleString()}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <div>
          <button onClick={postFinace} className="mt-3 app_btn">
            {loading ? "...loading" : "Submit"}
          </button>
        </div>
      </Card>
    </div>
  );
}

export default FinanceForm;
