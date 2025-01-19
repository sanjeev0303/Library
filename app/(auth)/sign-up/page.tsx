"use client"

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validation'

import React from 'react'

const SignUpPage = () => (
    <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
        email: "",
        password: "",
        fullname: "",
        universityId: 0,
        universityCard: "",
    }}
    onSubmit={() => {}}
    />
)

export default SignUpPage
