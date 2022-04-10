import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
function about() {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Bergs Kossors blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-green-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Bergs Kossor
            </span>{' '}
            startade i sammarbete med <span className="underline">Bergs</span>{' '}
            Kaniner
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum
            ipsam ad! Sequi, adipisci architecto voluptate saepe dolor ea id
            dignissimos. Maiores blanditiis suscipit quidem illo aspernatur?
            Hic, voluptatem repellat.
          </h2>
        </div>
      </div>
      <div>
        <p className="py-10">Lägga till text om sammarbetet med kaninerna =D</p>
        <div className="item-center mx-auto flex w-max">
          <Image
            src="/kanin.jpg"
            alt="Picture of a cow"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about
