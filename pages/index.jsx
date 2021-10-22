import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/layouts/noAuth'
import UserService from '../services/api/user.api'
import NoAuth from '../components/layouts/noAuth'
import Vertical from '../components/layouts/vertical'

const LandingPage = () => {

  useEffect(() => {
    UserService('noobdev47')
  }, [])

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <div>
        <Link href='/auth/login'>
          Go to Login
        </Link>

      </div>
    </>
  )
}

LandingPage.getLayout = function getLayout(page) {
  return (
    <NoAuth>
      {page}
    </NoAuth>
  )
}

export default LandingPage