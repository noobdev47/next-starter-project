import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NoAuth from '../../components/layouts/noAuth'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <h5>Login Page</h5>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return (
    <NoAuth>
      {page}
    </NoAuth>
  )
}

export default Login
