import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Projects from './Projects'
import Skills from './Skills'

const PortfolioTabs = () => {
  return (
    <Tabs isFitted>
      <TabList>
        <Tab>Skills</Tab>
        <Tab>Projects</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PortfolioTabs
