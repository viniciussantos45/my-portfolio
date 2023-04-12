import { Avatar, Box, Button, Heading, IconButton, Text, VStack, useColorMode } from '@chakra-ui/react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import { MdLightMode, MdNightlight } from 'react-icons/md'
const MotionVStack = motion(VStack)

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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

  return (
    <MotionVStack
      alignItems='center'
      spacing={4}
      p={4}
      h='100vh'
      borderRadius='md'
      bgGradient='linear(to-br, #e0f7fa, #ffff)'
      backgroundSize='200% 200%'
      variants={gradientVariants}
      initial='initial'
      animate='animate'
    >
      <Avatar
        size='2xl'
        name='Vinicius Gomes'
        src='https://media.licdn.com/dms/image/D4D03AQHWh2FUXeoMyw/profile-displayphoto-shrink_800_800/0/1667180672485?e=1686787200&v=beta&t=ogdXjOKfq40hhFUvJacC2LH9bJrCDBpzZyoBqdF2caI' // Sua imagem aqui
      />
      <Heading as='h3' size='md' color='gray.600'>
        Vinicius Gomes
      </Heading>
      <Text fontSize='md'>Desenvolvedor Full Stack</Text>
      <Box>
        <IconButton
          as='a'
          href='https://github.com/seuusuario'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
          icon={<FontAwesomeIcon icon={faGithub} />}
          mr={2}
        />
        <IconButton
          as='a'
          href='https://linkedin.com/in/seuperfil'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Linkedin'
          icon={<FontAwesomeIcon icon={faLinkedin} />}
        />
      </Box>
      <Button
        marginInline='20px'
        size='xs'
        onClick={() => {
          toggleColorMode()
        }}
      >
        {colorMode === 'dark' ? <MdLightMode /> : <MdNightlight />}
      </Button>
    </MotionVStack>
  )
}

export default Sidebar
