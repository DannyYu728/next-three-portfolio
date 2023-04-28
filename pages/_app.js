import { ChakraProvider, Spinner, Box } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  const route = useRouter()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    let delayTimeout;
    const handleStart = () => {
      delayTimeout = setTimeout(() => {
        setLoading(true)
      }, 250)
    }
    const handleComplete = () => {
      clearTimeout(delayTimeout)
      setLoading(false)
    }

    route.events.on('routeChangeStart', handleStart)
    route.events.on('routeChangeComplete', handleComplete)
    route.events.on('routeChangeError', handleComplete)

    return () => {
      route.events.off('routeChangeStart', handleStart)
      route.events.off('routeChangeComplete', handleComplete)
      route.events.off('routeChangeError', handleComplete)
      clearTimeout(delayTimeout)
    }
  }, [route])

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <Layout router={router}>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <Component {...pageProps} router={router} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      )}
    </ChakraProvider>
  )
}

export default Website
