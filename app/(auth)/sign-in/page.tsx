"use client"

import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validation'
import React from 'react'

const SignInPage = () => (
    <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
        email: "",
        password: "",
    }}
    onSubmit={() => {}}
    />
)

export default SignInPage
