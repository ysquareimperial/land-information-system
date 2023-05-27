import React, { useEffect, useState } from 'react'
import { Button, Card, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { _fetchApi, _postApi, useQuery } from '../helpers/helper';
import moment from 'moment';
import RequestForSurveyReportView from './PDF/RequestForSurveyReportView';

export default function SurveyReport() {
    const query = useQuery();
    const [newForm, setNewForm] = useState({})
  const application_file_number = query.get('application_file_number')
    const [app,setApp]=useState([])
    const getAppBYID = ()=>{
      _fetchApi(`/api/getAppBYID?application_file_number=${application_file_number}`,
      (res)=>{
        setApp(res.results[0])
      },
      (err)=>{
        console.log(err)
      }
      )
    }
    const [data,setData]=useState([])
    const getID =()=>{
      _fetchApi('/api/plots',
      (res)=>{
        setData(res.results[0])
      },(err)=>{
        console.log(err)
      }
      )
    }
    // newData

    const newData = data?.filter(i=>i.plots_numbers===app[0]?.plot_no)
    useEffect(
      ()=>{
      
     
        // getID();
        setNewForm((p)=>({...newData[0],file_no:application_file_number,date:app[0]?.persec_sign_date}))

      },[application_file_number,newData])
      useEffect(
      ()=>{
      
        getAppBYID();
        getID();
        // setNewForm((p)=>({...newData[0],file_no:application_file_number,date:app[0]?.persec_sign_date}))

      },[application_file_number]
    )
    const [modal3, setModal3] = useState(false)
    const toggle3 = () => setModal3(!modal3)
    const handleSubmit = ()=>{
      _postApi(`/api/update_survey?file_no=${application_file_number}`,
      (res)=>{
        console.log(res)
        if(res.success){
          toggle3()
        }
      },(err)=>{
        console.log(err)
      }
      )
    }
  return (
    <div>
        <Modal isOpen={modal3} toggle={toggle3} size="lg">
        <ModalHeader>Continue With</ModalHeader>
        <ModalBody>
          {/* <Require_documents />
           */}
          <RequestForSurveyReportView form={newForm} />
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
      <h5 className="mb-4">Survey Report</h5>
        {/* {JSON.stringify(data)} */}
      <center><u>REQUEST FOR SURVEY REPORT</u></center>
        {/* {JSON.stringify(newForm)} */}
      <ol><b>Please find enclosed herewith the following:</b>
        <li>Complete Application Form</li>
        <li>Four copies of site-plan and</li>
        <li>Local Government Confirmation</li>
       
      </ol>
      <span>You are to record the application and prepare survey/cadastral report in due course.</span>
      <div className='d-flex justify-content-between'>
        <span>Date : <b>{app[0]?.persec_sign_date}</b></span>
      <span>Name : <b>Director Cadestral</b></span>
      </div>
 <center><u>PERMANENT SECREATARY</u></center>

 <h6 className='mt-2'>The above application has been allocated Right Of Occupancy No: <b>{app[0]?.application_file_number}</b></h6>
 <span className='mt-2'>Item G. No : </span>
 <span className='mt-2'>1. The ground is open and applicaion is completed satisfactory with regards to survey requirements </span>
 <span className='mt-2'>2. I have to report that : </span>
 <span className='mt-2'>(A). The correct description of the plot is : <b>{app[0]?.plan_no} based an approved, {app[0]?.plot_no} at {app[0]?.location} in Kumbotso</b></span>
<span className='mt-2'>(b). Survey will be Neccessary : <b>Yes:<Input  type="radio" /> No:<Input  type="radio" /></b></span>
<span className='mt-2'>(c). The applicant is require to <b>comfirm/Note</b> that be the plot is demand by the following property beacons number</span>
<span className='mt-2'>following property beacons number : </span>
<span className='mt-2'><b>{newData[0]?.beacon_numbers}</b></span>
<div className='d-flex mt-3'><span>Date : <b>{moment().format('DD-MM-YY')}</b></span></div>
<center><button className='app_btn' onClick={()=>{handleSubmit();toggle3()}}>Approve</button></center>
      </Card>
    </div>
  )
}
