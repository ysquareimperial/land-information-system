import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Input, Row } from 'reactstrap'
import { _fetchApi, _postApi } from '../helpers/helper'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
export default function Require_documents() {
  const [docs, setDocs] = useState({
    application_id: '',
    document_id: '',
    document_name: '',
    document_object: '',
  })
  const handleChange = ({ target: { name, value } }) => {
    setDocs((p) => ({ ...p, [name]: value }))
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    setLoading(true)
    _postApi('/api/required_docs?in_query_type=Insert', docs, (res) => {
      console.log(res)
      if (res.succes) {
        setLoading(false)
        setDocs({
          application_id: '',
          document_id: '',
          document_name: '',
          document_object: '',
        })
        alert('success')
      }
    }),
      (err) => {
        setLoading(false)
        console.log(err)
      }
  }

  
  // called every time a file's `status` changes
  const [radios,setRadio]=useState({
    order:[],
})
const handleChanges = ({target:{name,value}})=>{
  setRadio((p)=>({...p, [name]:value}))
}
  const [data,setData]=useState([])
    const getList =()=>{

        _fetchApi('/api/getList',
        (res)=>{
            console.log(res)
            setData(res.results)
        },
        (err)=>{
            console.log(err)
        }
        )
    }
    useEffect(
        ()=>{
            getList()  
        },
        []
    )
    //  value={'by-project'}
  return (
    <div>
      <Card className="app_primary_card m-2 shadow p-4">
        {JSON.stringify(radios)}
        <h5 className="mb-3">Attach Document</h5>
       {
       data[0]?.map((item,index)=>(
          <Row className='mb-3'>
        <Col md={1}>
            <Input  name={item.document_name} value={item.document_name} type='checkbox' onChange={handleChanges} />
            </Col>
            <Col md={3}>
              <p>{item.document_name}</p>
            </Col>
            
            <Col md={4}>
            <input className='input_field' type='file' />
            </Col>
            </Row>
       ))
       }
     
       
        <div>
          <button className="mt-3 app_btn" onClick={handleSubmit}>
            {loading ? '...loading' : 'Submit'}
          </button>
        </div>
      </Card>
    </div>
  )
}
