import React from 'react'
import {Flex, Button, Stack} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'

import {Input} from '../components/Form/Input'

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
  }

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
        onSubmit={handleSubmit(handleSignIn)}
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
            {...register('email')}
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
            {...register('password')}
          />
        </Stack>

        <Button 
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
