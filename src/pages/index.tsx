import { Box, Flex } from '@chakra-ui/react'
import PortfolioTabs from '../components/PortfolioTabs'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <Flex>
      <Box w='30%'>
        <Sidebar />
      </Box>
      <Box w='70%' p={4}>
        <PortfolioTabs />
      </Box>
    </Flex>
  )
}

export default Home
