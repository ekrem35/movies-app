import Head from 'next/head'
import Header from '../src/components/Header'
import Container from '../src/components/Container'

export default function Home() {
  return (
    <>
      <Header rightComponent={<input type="text" />} />
    </>
  )
}
