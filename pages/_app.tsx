import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import useStyles from '@/styles/App.styles'
import '@/styles/global.css'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [navOpen, setNavOpen] = useState(false)

  const { classes } = useStyles()

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <div className={classes.withNavbar}>
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        <Navbar navOpen={navOpen} />
        <main className={classes.main}>
          <div className={classes.content}>
            <Component {...pageProps} />
            <Footer />
          </div>
        </main>
      </div>
    </MantineProvider>
  )
}

export default MyApp
