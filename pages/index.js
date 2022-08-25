import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainPage from './MainPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beautwitter</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <main className='p-5 overflow-y-hidden'>
        <h1 className='font-bold text-2xl font-inter text-slate-600 text-center pb-3'>Beautwitter</h1>
        <MainPage />
      </main>
    </div>
  )
}
