import React from 'react'
import FormWrapper from '../tab-wrapper/TabWrapper'
import Application_form from './Application_form'
function Apps() {
  return (
    <div>
        <FormWrapper
        steps={["Application", "Required Documents"]}
        handleSubmit={()=>alert('success')}
      >
<Application_form />
<Require_documents />

      </FormWrapper>
    </div>
  )
}

export default Apps