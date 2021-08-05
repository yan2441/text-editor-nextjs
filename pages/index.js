import Head from 'next/head'
import Header from '../components/header'
import NewFile from '../components/newFile'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Text editor</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <NewFile></NewFile>
    </div>
  )
}
