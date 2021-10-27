import '../styles/globals.scss'
import { useEffect } from 'react'
import { wrapper } from '../redux'
import { connect } from 'react-redux'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

const MyApp = ({
  Component,
  pageProps,
  mode
}) => {
  const getLayout = Component.getLayout || ((page) => page)
  const client = new QueryClient()

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return getLayout(
    <QueryClientProvider
      client={client}
    >
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const mapStateToProps = state => {
  return {
    mode: state.modeReducer.mode
  }
}

export default wrapper.withRedux(connect(mapStateToProps, null)(MyApp))
