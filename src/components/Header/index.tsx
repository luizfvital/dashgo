import {Flex, useBreakpointValue} from '@chakra-ui/react'

import {Profile} from './Profile'
import {NotificationsNav} from './NotificationsNav'
import {Logo} from './Logo'
import {SearchBox} from './SearchBox'

export function Header() {
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