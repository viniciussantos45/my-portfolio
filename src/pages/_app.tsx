import { ChakraProvider, StyleFunctionProps, extendTheme } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#53EAFA',
      200: '#6ED9F6',
      300: '#8AC9E6',
      400: '#A5B9D6',
      500: '#BFA9C6'
    }
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'full',
          borderColor: 'gray.500',
          _checked: {
            bg: 'green.500',
            color: 'white',
            borderColor: 'green.500'
          },
          _focus: {
            boxShadow: 'outline'
          }
        }
      }
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white.100', 'gray.900')(props),
        color: mode('gray.800', 'white.100')(props)
      }
    })
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
