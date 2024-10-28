import CommanForm from "@/components/ui/common-form"
import FormControls from "@/components/ui/common-form/form-control"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signUpFormControls } from "@/config"
import { signInFormControls } from "@/config"

import { GraduationCap } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")

  const handleTabChange = (value) => {
    setActiveTab(value)

  }
  return (

    <div className='flex flex-col bg-zinc-100 min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' to={'/'} >
        </Link>
        <GraduationCap className='h-8 w-8 mr-4' />
        <span className='font-extrabold text-xl' >LMS LEARN</span>
      </header>
      <div className='flex items-center justify-center min-h-screen bg-background'>
        <Tabs value={activeTab} defaultValue="signin" onValueChange={handleTabChange} className='w-full max-w-md'>

          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='signin'>Sign In</TabsTrigger>
            <TabsTrigger value='signup'>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value='signin'>
            <CommanForm formControls={signInFormControls} />
          </TabsContent>
          <TabsContent value='signup'>
            <CommanForm  formControls={signUpFormControls}/>
           
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )

}

export default AuthPage