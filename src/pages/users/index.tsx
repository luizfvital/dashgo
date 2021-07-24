import React from 'react'
import Link from 'next/link'
import {useQuery} from 'react-query'

import {Box, Button, Checkbox, Flex, Heading, Text, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner} from '@chakra-ui/react'
import {RiAddLine} from 'react-icons/ri'

import {Header} from '../../components/Header'
import Pagination from '../../components/Pagination'
import {Sidebar} from '../../components/Sidebar'

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function UserList() {
  const {data, isLoading, error} = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    
    const users: User[] = data.users.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users
  }, {
    staleTime: 5000 // 5s
  })

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["6", "8"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha pra obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideScreen && <Th>Data de Cadastro</Th>}
                </Tr>
              </Thead>

              <Tbody>
                {data.map(user => (
                  <Tr key={user.id}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{user.name}</Text>
                      <Text fontSize="sm" color="gray.300">{user.email}</Text>
                    </Box>
                  </Td>
                  {isWideScreen && <Td>{user.createdAt}</Td>}
                </Tr>
                ))}
              </Tbody>
            </Table>

            <Pagination />
          </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}