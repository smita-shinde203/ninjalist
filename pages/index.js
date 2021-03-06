import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text} >Homepage</h1>
        <p className={styles.text}>lorem ispusm sit bddbfjvhfbhf fhbbhbhf jfbhbh  fnjng nfj gjn jfngjfnjfd jngjngjf njgnjngjfngj jngjngj ngnhg bhgijr okfowe kfier jgi rjg wjf ijrgijrgi  jw i j   r igjowe kfieger ghirjgj gurg igegb</p>
        <p className={styles.text}>lorem ispusm sit bddbfjvhfbhf fhbbhbhf jfbhbh  fnjng nfj gjn jfngjfnjfd jngjngjf njgnjngjfngj jngjngj ngnhg bhgijr okfowe kfier jgi rjg wjf ijrgijrgi  jw i j   r igjowe kfieger ghirjgj gurg igegb</p>
        <Link href="/ninjas"><a className={styles.btn}>See All Ninjas</a></Link>
      </div>
    </>
  )
}
