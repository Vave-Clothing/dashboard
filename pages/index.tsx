import PageContent from '@/components/PageContent'
import PageHeader from '@/components/PageHeader'
import type { NextPage } from 'next'
import { Text } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <>
      <PageHeader title="Home" description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
      <PageContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati vero ullam quibusdam adipisci suscipit, expedita facere qui autem voluptatum nam iure, repellat optio explicabo at voluptatibus veritatis tempora aut.
        </Text>
      </PageContent>
    </>
  )
}

export default Home
