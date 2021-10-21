import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'

const Login = () => {
  return (
    <Layout>
    <Head>
      <title>Login Page</title>
    </Head>
      <h5>Login Page</h5>
      <Link href='/' >
        Back to Home
      </Link>
      <Image
        src='/images/profile.jpg'
        width={144}
        height={144}
        alt="Image Lmao"
      />
    </Layout>
  )
}

export default Login
