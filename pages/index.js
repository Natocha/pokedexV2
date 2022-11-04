import Head from 'next/head'
import Link from '@nextui-org/react';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { pokeApi } from '../api';
import Layout from "../components/layouts"
export default function Home({pokemons}) {
  console.log(pokemons)
  return (
    
    <div >
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
      <h1>Pokedex</h1> 
      <Grid.Container gap={2}>
        {pokemons.map((pokemon) => (
          <>
           <Grid xs={6} sm={3}/*  key={pokemon.id} */>
          <Card isPressable>
          <Link
           to={{
            pathname:`/pokemon/[id].js`,}}
            >
            <Card.Body css={{ p: 0 , background: "white" }}>
               <Card.Image
                src={`${pokemon.img}`}
                objectFit="contain"
                width="100%"
                height={140}
                alt={pokemon.id}
              /> 
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start", background: "red" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text>{pokemon.name} #{pokemon.id}</Text>
              </Row>
            </Card.Footer>
            </Link>
          </Card>
        </Grid>
          </>
        ))}
        </Grid.Container>
      </main>
      </Layout>
    </div>

  );
}

export const getStaticProps = async(ctx) => {
  const {data} = await pokeApi.get('/pokemon?limit=151');
  const pokemons = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
      i + 1
    }.gif`, 
  }));
  return {
    props: {pokemons},
  }

}

