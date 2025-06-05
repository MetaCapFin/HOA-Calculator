import Head from 'next/head'
import TuCieloCalculator from '../components/TuCieloCalculator'
import '../styles/LoanCalculator.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>TuCielo Calculator</title>
      </Head>
      <main>
        <TuCieloCalculator />
      </main>
    </>
  )
}


