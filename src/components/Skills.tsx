import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Heading,
  Image,
  VStack
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface SkillDetail {
  title: string
  skills: string[]
}

interface Skill {
  id: number
  title: string
  logo: string
  technologies: SkillDetail[]
}

const skillsData: Skill[] = [
  {
    id: 1,
    title: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    technologies: [
      {
        title: 'ReactJS',
        skills: [
          'Componentes, ciclo de vida',
          'Gerenciamento de estado, Context API',
          'Hooks (useState, useEffect, etc.)',
          'React Router',
          'Integração de APIs, bibliotecas',
          'Eventos, formulários',
          'Otimização, renderização condicional',
          'Testes (Jest, React Testing Library)'
        ]
      },
      {
        title: 'Node.js',
        skills: [
          'Fundamentos JavaScript, Node.js',
          'Programação assíncrona',
          'Gerenciamento de pacotes (npm, yarn)',
          'Servidores HTTP (Express, Koa, Hapi)',
          'Solicitações, respostas',
          'Integração com banco de dados',
          'Autenticação, autorização',
          'Teste, depuração'
        ]
      },
      {
        title: 'React Native',
        skills: [
          'Componentes, APIs React Native',
          'Gerenciamento de estado (Redux, MobX)',
          'Navegação entre telas',
          'Estilização, layout',
          'Entrada do usuário, eventos',
          'Integração de APIs, bibliotecas',
          'Teste, depuração',
          'Construção, distribuição (iOS, Android)'
        ]
      },
      {
        title: 'DOM',
        skills: [
          'Navegação, manipulação DOM',
          'Seleção de elementos',
          'Criação, inserção, remoção',
          'Atributos, propriedades',
          'Classes CSS, estilos',
          'Eventos, manipuladores',
          'Traversal, manipulação de nós',
          'Otimização, manipulação eficiente'
        ]
      },
      {
        title: 'jQuery',
        skills: [
          'Seleção, filtragem',
          'Manipulação de elementos',
          'Navegação DOM',
          'Classes CSS, estilos',
          'Eventos, manipuladores',
          'Animações, efeitos',
          'AJAX, APIs',
          'Extensibilidade, plugins'
        ]
      }
    ]
  }
  // Adicione mais habilidades conforme necessário
]

const Skills = () => {
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
    <VStack spacing={4}>
      {skillsData.map((skill) => (
        <MotionBox
          key={skill.id}
          w='100%'
          p={4}
          boxShadow='md'
          borderRadius='md'
          bgGradient='linear(to-br, #e0f7fa, #ffff)'
          backgroundSize='200% 200%'
          variants={gradientVariants}
          initial='initial'
          animate='animate'
        >
          <HStack>
            <Image src={skill.logo} boxSize='50px' />
            <Heading as='h4' size='md'>
              {skill.title}
            </Heading>
          </HStack>
          <Accordion allowMultiple marginTop='3'>
            {skill.technologies.map((tech, index) => (
              <AccordionItem key={index} border='none'>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    {tech.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack alignItems='start' spacing={2}>
                    {tech.skills.map((item, itemIndex) => (
                      <Checkbox key={itemIndex} borderRadius='full' color='gray.600' isChecked>
                        {item}
                      </Checkbox>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBox>
      ))}
    </VStack>
  )
}

export default Skills
