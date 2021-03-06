import Head from "next/head";
import BookTable from "../components/home/BookTable";
import Hero from "../components/home/Hero";
import MeetOurChef from "../components/home/MeetOurChef";
import OurDishes from "../components/home/OurDishes";
import OurStory from "../components/home/OurStory";
import ReserveTable from "../components/home/ReserveTable";
import Story from "../components/home/Story";
import Testmonials from "../components/home/Testmonials";
import ScrollToTop from "../components/Layout/buttonScroll";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tajine Tanjia</title>
        <meta name="description" content="Tajine and Tanjiya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <ScrollToTop />
        <Hero />
        <Story />
        <OurStory />
        <Testmonials />
        <OurDishes />

        <BookTable />
        <MeetOurChef />
        <ReserveTable />
      </div>
    </div>
  );
}
