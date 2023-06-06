import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { Col, Modal, ModalBody, ModalFooter, Row } from 'reactstrap'
import { _postApi } from '../helpers/helper'
export default function Commetmodal({modal3=f=>f,toggle3=f=>f,data={}}) {
  const [form,setForm]=useState({
    file_no:data.file_no,
    document_no:'2',
    comments:'',
    comment_by:data.role,
    comment_to:''
  })

  const handleChange = ({target:{name,value}})=>{
    setForm((p)=>({...p,[name]:value}))
  }

  const handleSubmit = ()=>{
    _postApi('/api/post-comments?query_type=Insert',form,
    (res)=>{
      if(res.success){
        alert('succesfully send!!');
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
        {/* {JSON.stringify(form)} */}

        <ModalBody>
            <Row>
                <Col lg={4}>
                  <label>File Number</label>
                <input className='input_field'name='file_no' value={form.file_no} onChange={handleChange} />
                </Col>

                   <Col lg={4}>
                    <label>send to</label>
                    <select  className="input_field" name='comment_to' value={form.comment_to} onChange={handleChange}>
        <option>select</option>
        <option>Director Land</option>
        <option>Director Cadestral</option>
        <option>Director Account</option>
        <option>Director Deed</option>
        <option>select</option>
      </select>
                </Col>
                <Col lg={12} className='mt-2'>
                <textarea
          
            name="comments"
            value={form.comments}
            onChange={handleChange}
            className="input_field"
            placeholder="write comment here..."
            rows={4}
          />
                </Col>
            </Row>
            <button className='app_btn mt-2' onClick={handleSubmit}><BsSend />Send</button>
         
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  )
}
