import Head from 'next/head'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatty</title>
        <link rel="icon" href="/chatty.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}
