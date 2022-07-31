import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      chainRpc={{
          [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/74a4aaa7ac6b493cbe18d68ed692b2e6',
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
