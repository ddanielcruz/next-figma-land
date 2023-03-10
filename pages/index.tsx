import Head from 'next/head'
import Image from 'next/image'

import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Figma Land</title>
      </Head>
      <main className="h-screen bg-neutral-100">
        <Navbar />
        <div className="flex justify-center py-8">
          <h1 className="text-3xl font-bold">Home</h1>
        </div>
      </main>
    </>
  )
}
