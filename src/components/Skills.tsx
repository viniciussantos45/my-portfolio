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
  },
  {
    id: 2,
    title: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    technologies: [
      {
        title: 'Python',
        skills: [
          'Sintaxe básica',
          'Controle de fluxo',
          'Funções e módulos',
          'Orientação a objetos',
          'Manipulação de arquivos',
          'Bibliotecas populares (requests, numpy, pandas, etc.)',
          'Frameworks web (Django, Flask, etc.)'
        ]
      },
      {
        title: 'Automação',
        skills: [
          'Selenium',
          'Puppeteer',
          'Web scraping',
          'Manipulação de navegador',
          'Extração de dados',
          'Interação com formulários e páginas web'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'PHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    technologies: [
      {
        title: 'PHP',
        skills: [
          'Sintaxe básica',
          'Controle de fluxo',
          'Funções',
          'Arrays e manipulação',
          'Orientação a objetos',
          'Integração com banco de dados',
          'Autenticação e autorização',
          'Frameworks (Laravel, Symfony, etc.)'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    technologies: [
      {
        title: 'HTML5',
        skills: [
          'Estrutura básica',
          'Elementos semânticos',
          'Atributos',
          'Formulários e validação',
          'Multimídia (áudio, vídeo)',
          'APIs HTML5 (Canvas, Geolocation, etc.)'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    technologies: [
      {
        title: 'CSS3',
        skills: [
          'Seletores',
          'Propriedades e valores',
          'Layouts (Flexbox, Grid)',
          'Responsividade',
          'Animações e transições',
          'Pseudo-elementos e pseudo-classes',
          'Variáveis CSS',
          'Pré-processadores (SASS, LESS, Stylus)'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Banco de Dados',
    logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png',
    technologies: [
      {
        title: 'SQL',
        skills: [
          'Comandos básicos (SELECT, INSERT, UPDATE, DELETE)',
          'Chaves primárias e estrangeiras',
          'Índices',
          'Funções de agregação',
          'Junções (INNER JOIN, LEFT JOIN, etc.)',
          'Subconsultas',
          'Procedimentos armazenados e funções',
          'Otimização de consultas'
        ]
      },
      {
        title: 'NoSQL',
        skills: [
          'Tipos de bancos NoSQL (document, key-value, graph, etc.)',
          'Modelagem de dados',
          'CRUD básico',
          'Consulta e agregação',
          'Escalabilidade e desempenho',
          'Popular bancos NoSQL (MongoDB, Redis, etc.)'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Outras Habilidades',
    logo: 'https://i.pinimg.com/originals/5e/e6/0d/5ee60db9e7cca0f6a844ea9cee17041e.jpg',
    technologies: [
      {
        title: 'Versionamento de Código',
        skills: [
          'Git',
          'Comandos básicos (add, commit, push, pull, etc.)',
          'Branches e merge',
          'Resolução de conflitos',
          'GitHub, GitLab, Bitbucket'
        ]
      },
      {
        title: 'Metodologias Ágeis',
        skills: [
          'Scrum',
          'Kanban',
          'Planejamento e estimativas',
          'Reuniões e rituais (daily, review, retrospective, etc.)',
          'Ferramentas (Jira, Trello, Asana, etc.)'
        ]
      },
      {
        title: 'APIs',
        skills: ['REST', 'GraphQL', 'Autenticação e autorização (JWT, OAuth2, etc.)', 'Documentação (Swagger, Postman, etc.)']
      },
      {
        title: 'Deploy e Infraestrutura',
        skills: ['Servidores (Apache, Nginx)', 'Hospedagem (AWS, Heroku, Firebase, etc.)', 'CI/CD', 'Docker, Kubernetes']
      },
      {
        title: 'Segurança',
        skills: [
          'Criptografia',
          'Proteção contra ataques comuns (XSS, CSRF, SQL Injection, etc.)',
          'Autenticação e autorização',
          'Práticas de segurança em desenvolvimento',
          'Políticas de segurança e CORS',
          'Segurança em APIs e aplicações web'
        ]
      },
      {
        title: 'Arquitetura e Padrões de Projeto',
        skills: [
          'Arquitetura de software (monolítica, microsserviços, etc.)',
          'Padrões de projeto (singleton, factory, observer, etc.)',
          'Clean code e princípios SOLID',
          'Testes unitários, de integração e de aceitação',
          'Refatoração e manutenibilidade do código'
        ]
      },
      {
        title: 'DevOps',
        skills: [
          'Integração contínua (CI)',
          'Entrega contínua (CD)',
          'Automatização de processos',
          'Monitoramento e análise de logs',
          'Gestão de configurações e infraestrutura como código (IaC)'
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
    <VStack spacing={3}>
      {skillsData.map((skill) => (
        <MotionBox
          key={skill.id}
          w='100%'
          p={4}
          boxShadow='md'
          borderRadius='xl'
          bgGradient='linear(to-br, #84FFFF99, #ffff)'
          backgroundSize='200% 200%'
          variants={gradientVariants}
          initial='initial'
          animate='animate'
        >
          <HStack gap={3}>
            <Image src={skill.logo} boxSize='50px' />
            <Heading as='h4' size='md' color='gray.700'>
              {skill.title}
            </Heading>
          </HStack>
          <Accordion allowMultiple marginTop='3' defaultIndex={[0]} allowToggle>
            {skill.technologies.map((tech, index) => (
              <AccordionItem key={index} border='none'>
                <AccordionButton>
                  <Box flex='1' textAlign='left' color='gray.600'>
                    {tech.title}
                  </Box>
                  <AccordionIcon color='gray.600' />
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
