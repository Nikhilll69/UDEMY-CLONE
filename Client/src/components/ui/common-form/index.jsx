import React from 'react'
import { Button } from '../button'
import FormControls from './form-control'

function CommanForm( {handleSubmit ,buttonText, formControls=[],formData,setFormData}) {
  return (
     <form onSubmit={handleSubmit}>
        {/*render form controls here */}

        <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
         



        <Button type='submit'>{buttonText || "submit"}</Button>
     </form>
  )
}

export default CommanForm