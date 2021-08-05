import Head from 'next/head'
import Header from '../components/header'
import Login from '../components/login';
import NewFile from '../components/newFile'
import Recent from '../components/recent'
import { useSession, getSession } from "next-auth/client"


export default function Home() {
  const [session] = useSession();

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


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };

}