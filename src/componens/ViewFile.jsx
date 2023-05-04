import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper'
import { useNavigate } from 'react-router-dom'

function ViewFile() {
  const query = useQuery()
  const application_id = query.get('application_id')
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const getData = () => {
    _fetchApi(
      `/api/generate?application_id=${application_id}`,
      (res) => {
        console.log(res)
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  const [finance, setFinance] = useState([])
  const getF = () => {
    _fetchApi(
      `/api/getF?application_id=${application_id}`,
      (res) => {
        console.log(res)
        setFinance(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const [appid, setAppid] = useState()
  const generateFIle = () => {
    _postApi(
      `/api/generate-file-no?application_id=${application_id}`,
      {},
      (res) => {
        console.log(res)
        if (res.success) {
          alert('success')
          setAppid(res.file_no)
          // navigate(-1)
          toggle3()
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getData()
    getF()
  }, [])
  return (
    <div>
      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          {/* <Require_documents />
           */}
          Your File number : {appid}
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle3()
              navigate(-1)
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Card className="app_primary_card m-2 shadow p-4">
        {/* {JSON.stringify(finance[0])} */}

        <h5 className="mb-3">Generate FIle Number</h5>
        <Row>
          <Col md={4}>
            <b>Applicant Full Name</b> :{' '}
            {data[0] && data[0][0]?.Applicant_full_name}
          </Col>
          <Col md={4}>
            <b>Bussiness Location</b> :{' '}
            {data[0] && data[0][0]?.Business_location}
          </Col>
          <Col md={4}>
            <b>Correspondance Address</b> :{' '}
            {data[0] && data[0][0]?.correspondance_address}
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md={4}>
            <b>Allocated before </b>: {data[0] && data[0][0]?.Allocated_before}
          </Col>
          <Col md={4}>
            <b>Applicant nationality </b>:{' '}
            {data[0] && data[0][0]?.Applicant_nationality}
          </Col>
          <Col md={4}>
            <b>State of origin</b> : {data[0] && data[0][0]?.State_of_origin}
          </Col>
        </Row>

        <Row className="mt-2">
          <Col md={4}>
            <b>occupation business</b>:{' '}
            {data[0] && data[0][0]?.occupation_business}
          </Col>
          <Col md={4}>
            <b>nature of business </b>:{' '}
            {data[0] && data[0][0]?.nature_of_business}
          </Col>
          <Col md={4}>
            <b>company registered under</b> :{' '}
            {data[0] && data[0][0]?.company_registered_under}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={4}>
            <b>when where occupancy no</b>:{' '}
            {data[0] && data[0][0]?.when_where_occupancy_no}
          </Col>
          <Col md={4}>
            <b>purpose of land use </b>:{' '}
            {data[0] && data[0][0]?.purpose_of_land_use}
          </Col>
          <Col md={4}>
            <b>purpose for application required</b> :{' '}
            {data[0] && data[0][0]?.purpose_for_application_required}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={4}>
            <b>acitivity intended to undertake </b>:{' '}
            {data[0] && data[0][0]?.acitivity_intended_to_undertake}
          </Col>
          <Col md={4}>
            <b>estimated amount to spen</b>:{' '}
            {data[0] && data[0][0]?.estimated_amount_to_spenr}
          </Col>
          <Col md={4}>
            <b>length of term required</b> :{' '}
            {data[0] && data[0][0]?.length_of_term_required}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={4}>
            <b>application date </b>: {data[0] && data[0][0]?.application_date}
          </Col>
          <Col md={4}>
            <b>application id</b>: {data[0] && data[0][0]?.application_id}
          </Col>
          <Col md={4}>
            <b>Status </b> : {data[0] && data[0][0]?.status}
          </Col>
        </Row>
        {/* <center> */}
        <div>
          <h5 className="legend mt-4">Finance</h5>
        </div>
        <Col md={12} className="">
          {/* <div style={{border:'black 1px solid'}}> */}

          <Row>
            <Col md={3}>
              <b>applicant full name</b>:{' '}
              {finance[0] && finance[0][0]?.applicant_full_name}
            </Col>
            <Col md={3}>
              <b>amount</b>: {finance[0] && finance[0][0]?.amount}
            </Col>
            <Col md={3}>
              <b>Cr </b> : {finance[0] && finance[0][0]?.cr}
            </Col>
            <Col md={3}>
              <b>DB </b> : {finance[0] && finance[0][0]?.db}
            </Col>
          </Row>
          {/* </div> */}
        </Col>
        <div>
          <button className="app_btn mt-3" onClick={generateFIle}>
            Generate File number
          </button>
        </div>
      </Card>
    </div>
  )
}

export default ViewFile
