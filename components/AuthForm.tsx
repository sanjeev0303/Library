import React from 'react'
import { FieldValues } from 'react-hook-form'

interface AuthFormProps<T extends FieldValues> {

}

const AuthForm = ({type, schema, defaultValues, onSubmit}:AuthFormProps ) => {
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm
