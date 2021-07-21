import {Flex, Button, Stack} from '@chakra-ui/react'
import React from 'react'

import {Input} from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center" 
    >
      <Flex
        flexDir="column"
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.700"
        p="8" 
        borderRadius={8}
      >

        <Stack spacing="4">
          
          <Input
            name="email"
            type="email"
            label="Email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
          />
        
          <Input
            name="password"
            type="password"
            label="Senha"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900'
            }}
            size="lg"
          />
        </Stack>

        <Button 
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
