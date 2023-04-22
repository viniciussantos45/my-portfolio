import { Button, TabList, TabPanel, TabPanels, Tabs, useTab } from '@chakra-ui/react'
import React from 'react'
import Projects from './Projects'
import Skills from './Skills'

const PortfolioTabs = () => {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    const baseStyle = {
      padding: '5px 20px',
      mr: '1px',
      borderRadius: '5px',
      borderBottomWidth: '5px',
      backgroundColor: '#ffffff'
    }
    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = {
      selected: { ...baseStyle, borderBottomColor: 'blue.300', color: 'blue.400' },
      notSelected: { ...baseStyle, borderBottomColor: 'gray.300', color: 'gray.500' }
    }

    return (
      <Button __css={isSelected ? styles.selected : styles.notSelected} {...tabProps}>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <Tabs>
      <TabList style={{ borderColor: '#fff00000', borderRadius: '5px', borderBottomWidth: '5px', borderBottomColor: 'red.300' }}>
        <CustomTab>Skills</CustomTab>
        <CustomTab>Projects</CustomTab>
      </TabList>

      <TabPanels>
        <TabPanel padding={0} paddingTop={4}>
          <Skills />
        </TabPanel>
        <TabPanel padding={0} paddingTop={4}>
          <Projects />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PortfolioTabs
