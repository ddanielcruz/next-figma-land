import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Figma Land</title>
        <meta name="description" content="Lightning fast prototyping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl">Hey</h1>
      </main>
    </>
  )
}
