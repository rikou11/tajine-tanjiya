import Head from 'next/head'
import BookTable from '../components/home/BookTable'
import Hero from '../components/home/Hero'
import OurStory from '../components/home/OurStory'
import Story from '../components/home/Story'
import Testmonials from '../components/home/Testmonials'
import ScrollToTop from '../components/Layout/buttonScroll'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tajine Tanjia</title>
        <meta name="description" content="Tajine and Tanjiya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <div className={styles.main}>
    <ScrollToTop/>
<Hero/>
<OurStory/>



<Testmonials/>
<BookTable/>
<Story/>
  </div>

    </div>
  )
}
