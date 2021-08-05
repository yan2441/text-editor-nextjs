import Head from 'next/head'
import Header from '../components/header'
import NewFile from '../components/newFile'
import Recent from '../components/recent'

export default function Home() {
  cosnt[session] = useSession();

  if (!session) return <Login />
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
      <Recent></Recent>
    </div>
  )
}
