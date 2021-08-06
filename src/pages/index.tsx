import React from 'react'
import {Flex, Button, Stack} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import {Input} from '../components/Form/Input'
import {useAuth} from '../contexts/AuthContext'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  password: yup.string().required('Senha é obrigatória')
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {signIn} = useAuth()

  const {errors} = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    // await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    await signIn(values)
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
            error={errors.email}
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
            error={errors.password}
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
