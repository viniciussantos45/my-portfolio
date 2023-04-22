import { ChakraProvider, Container, StyleFunctionProps, extendTheme } from '@chakra-ui/react'

import { mode } from '@chakra-ui/theme-tools'
import { motion } from 'framer-motion'
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

const MotionContainer = motion(Container)

const gradientVariants = {
  initial: { backgroundPosition: '0% 50%' },
  animate: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MotionContainer
        minW='100%'
        padding={0}
        bgGradient='linear(to-br, #1DE9B644, #00E5FF55)'
        backgroundSize='200% 200%'
        variants={gradientVariants}
        initial='initial'
        animate='animate'
      >
        <Component {...pageProps} />
      </MotionContainer>
    </ChakraProvider>
  )
}

export default MyApp
