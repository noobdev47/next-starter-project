import '../styles/globals.scss'
import { wrapper } from '../redux'

const MyApp = ({
  Component,
  pageProps
}) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
