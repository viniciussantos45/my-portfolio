import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

interface Project {
  id: number
  title: string
  image: string
  description: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Projeto 1',
    image: 'https://via.placeholder.com/150',
    description: 'Descrição do projeto 1'
  }
  // Adicione mais projetos conforme necessário
]

const Projects = () => {
  return (
    <VStack spacing={4}>
      {projectsData.map((project) => (
        <Box key={project.id} w='100%' p={4} boxShadow='md' borderRadius='md' bgGradient='linear(to-br, #e0f7fa, #ffffff)'>
          <HStack>
            <Image src={project.image} boxSize='100px' />
            <VStack alignItems='start'>
              <Heading as='h4' size='md'>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </VStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  )
}

export default Projects
