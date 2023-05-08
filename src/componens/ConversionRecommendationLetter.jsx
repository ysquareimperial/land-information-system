import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { _fetchApi, useQuery } from '../helpers/helper'
import RecForGrOfStatRightOfOccupView from './PDF/RecForGrOfStatRightOfOccupView'
export default function ConversionRecommendationLetter() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getConversions = () => {
    _fetchApi(
      '/api/getConversion?status=paid',
      (res) => {
        setData(res.results)
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getConversions()
  }, [])
  const query = useQuery()
  const role = query.get('type')
  const [modal3, setModal3] = useState(false)
  const toggle3 = () => setModal3(!modal3)
  const [newForm, setNewForm] = useState([])
  const getRecBy = (num) => {
    _fetchApi(
      `/api/getAppBYID?application_file_number=${num}`,
      (res) => {
        if (res.success) {
          setNewForm(res.results[0])
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
  return (
    <>
      {/* {JSON.stringify(role)} */}
      <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          {/* <Require_documents />
           */}
          <RecForGrOfStatRightOfOccupView form={newForm[0]} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggle3()
              // navigate(-1)
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Card className="app_primary_card m-2 shadow p-4">
        <h5 className="mb-4">Generate Conversion Recomendation Letters</h5>
        {/* {JSON.stringify(data[0])} */}
        <input
          type="search"
          placeholder="Search"
          className="input_field mb-3"
        />
        <div>
          <Table striped borderless size="sm" style={{ fontSize: 14 }}>
            <thead>
              <tr>
                <td style={{ fontWeight: 'bold' }}>File Number</td>
                <td style={{ fontWeight: 'bold' }}>Applicant Full Name</td>
                <td style={{ fontWeight: 'bold' }}>Applicant Nationality</td>
                <td style={{ fontWeight: 'bold' }}>State Of Origin</td>
                <td style={{ fontWeight: 'bold' }}>Occupation Business</td>
                {/* <th style={{border:'1px solid #f1f1f1',width:'30%',height:"100%",textAlign:"center"}}>Company Registered Unde</td> */}
                <td style={{ fontWeight: 'bold' }}>Length Of Term Required</td>
                <td style={{ fontWeight: 'bold' }}>Action</td>
              </tr>
            </thead>
            <tbody>
              {data[0]?.map((item) => (
                <tr>
                  <td>{item.file_no}</td>
                  <td>{item.applicant_full_name}</td>
                  <td>{item.nationality}</td>
                  <td>{item.state_of_origin}</td>
                  <td>{item.occupation}</td>
                  <td>{item.len_of_time_req}</td>
                  <td>
                    {/* {item.land_status==='generated'?'hello':'fuck yu'} */}
                    <button
                      className="paid"
                      onClick={() =>
                        navigate(
                          `/recommendation-letter?file_no=${item.file_no}&role=${role}&name=${item.applicant_full_name}&type=conversion`,
                        )
                      }
                    >
                      process
                    </button>

                    {/* <button
                  className="paid"
                  onClick={() => navigate(`/recommendation-letter?file_no=${item.file_no}&role=${role}`)}
                >
                  process
                </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  )
}
