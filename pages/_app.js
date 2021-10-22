import '../styles/globals.scss'
import { useEffect } from 'react'
import { wrapper } from '../redux'
import { connect } from 'react-redux'

const MyApp = ({
  Component,
  pageProps,
  mode
}) => {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return getLayout(
    <Component {...pageProps} />
  )
}

const mapStateToProps = state => {
  return {
    mode: state.modeReducer.mode
  }
}

export default wrapper.withRedux(connect(mapStateToProps, null)(MyApp))
