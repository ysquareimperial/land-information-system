import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { useQuery } from '../helpers/helper'

export default function ApplicationLetter() {
    const query =useQuery()
    const name= query.get('name')
    const file = query.get('file_no')
    const address = query.get('address')
  return (
    <div>
         <Card className="app_primary_card m-2 shadow p-4">
  <Row>
    <Col md={4}></Col>
    <Col md={3}></Col>
    <Col md={4}>
        <legend>NO. {address}<br />QTRS ,KANO<br />02/11/2022</legend>
    </Col>
    <Col md={1}></Col>
  </Row>
  <Row>
  <Col md={1}></Col>
    <Col md={6}>
    <legend>The Permanent Secretary<br />Kano State Bureau for land Management,<br />NO.2,Dr Bala Muhammad Road,Kano.<br />sir,</legend>
    </Col>
    <Col md={2}></Col>
    <Col md={3}>
      
    </Col>
  </Row>
  <center><legend><u>APPLICATION FOR CONSENT TO ASSIGN MY PROPERTY</u></legend></center>
  <center><legend><u>COVERED BY C OF NO.{file}</u></legend></center>
<Row>
    <Col md={1}></Col>
    <Col md={10}><h4>I here by write to apply for consent to assign my property covered by C OF O<br />
  no.<b>{file}.</b>to ALH.{name} of No. 3 {address}<br />
  DUTSE ROAD KANO.  
  </h4></Col>
    <Col md={1}></Col>
    <Col md={1}></Col>
    <Col md={10}> <h5 className='mr-5'>I hope my application will meet your kind consideration please.<br /><br />Faithfully Yours,<br /><br /><br /><br />MUSA JIBRIL SHEKA</h5></Col>
    <Col md={1}></Col>
</Row>
  <center></center>
 
         </Card>
    </div>
  )
}
