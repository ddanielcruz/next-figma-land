import Head from 'next/head'

import Navbar from '@/components/Navbar'

export default function Product() {
  return (
    <>
      <Head>
        <title>Product - Figma Land</title>
      </Head>
      <main className="bg-neutral-100 h-screen">
        <Navbar />
        <div className="flex justify-center py-8">
          <h1 className="text-3xl font-bold">Product</h1>
        </div>
      </main>
    </>
  )
}
