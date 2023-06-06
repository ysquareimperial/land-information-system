import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card } from 'reactstrap'

export default function CommentSection() {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
     

    
              <Card className='mt-2'>
    {/* <center><p className='m-0'>Director land</p></center> */}
    <hr className='m-0 '></hr>
    <b>To:  Director land</b>
    <hr className='m-0 '></hr>
    gkl
    <hr className='m-0 '></hr>
    <span style={{color:"GrayText"}}>fri 4:12</span>
      </Card>
          
         
    
    </div>
  )
}
