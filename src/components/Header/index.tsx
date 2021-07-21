import React from 'react'
import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'

import {Profile} from './Profile'
import {NotificationsNav} from './NotificationsNav'
import {Logo} from './Logo'
import {SearchBox} from './SearchBox'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import {RiMenuLine} from 'react-icons/ri'

export function Header() {
  const {onOpen} = useSidebarDrawer()

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        >

        </IconButton>
      )}

      <Logo />

      {isWideScreen && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      > 
        <NotificationsNav />

        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  )
}