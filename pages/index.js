import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatty</title>
        <link rel="icon" href="/chatty.ico" />
      </Head>

      <h1>Chatty app</h1>
    </div>
  )
}
