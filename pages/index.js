import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Validator from "../functions/Validator.js"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>RSA ID Number Validator</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/125px-Flag_of_South_Africa.svg.png" />
        
      </Head>

      {/* Header */}
      <Header/>

      {/* Main */}
      <Main/>

    </div>
  )
}
