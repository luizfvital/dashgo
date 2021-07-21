import {Box, Flex, Avatar, Text}  from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Fernando</Text>
          <Text color="gray.300" fontSize="small">
            luizfvital@gmail.com
          </Text>
        </Box>
      )}

      <Avatar 
        size="md" 
        name="Luiz Fernando" 
      />
    </Flex>
  )
}