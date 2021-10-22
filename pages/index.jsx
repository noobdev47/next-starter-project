import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/layout'
import UserService from '../services/api/user.api'

const LandingPage = () => {

  useEffect(() => {
    UserService('noobdev47')
  }, [])

  return (
    <Layout>
      <p>Landing Page</p>
      <Link href='/auth/login'>
        Go to Login
      </Link>
    </Layout>
  )
}

export default LandingPage