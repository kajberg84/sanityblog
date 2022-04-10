import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
function about() {
  return (
    <div className="mx-auto max-w-7xl ">
      <Head>
        <title>Bergs Kossors blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-green-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="text-center font-serif text-6xl">Kontakta oss</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum
            ipsam ad! Sequi, adipisci architecto voluptate saepe dolor ea id
            dignissimos. Maiores blanditiis suscipit quidem illo aspernatur?
            Hic, voluptatem repellat.
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full md:w-96 md:max-w-full">
        <div className="mb-20 border border-gray-300 p-6 sm:rounded-md">
          <form method="POST" action="https://herotofu.com/start">
            <label className="mb-6 block">
              <span className="text-gray-700">Ditt namn</span>
              <input
                type="text"
                name="name"
                className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Kossa Kossason"
              />
            </label>
            <label className="mb-6 block">
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="exempel@exempel.com"
                required
              />
            </label>
            <label className="mb-6 block">
              <span className="text-gray-700">Meddelande</span>
              <textarea
                name="message"
                className=" mt-1  block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows={3}
                placeholder="Skriv erat meddelande här..."
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="
            focus:shadow-outline
            h-10
            rounded-lg
            bg-indigo-700
            px-5
            text-indigo-100
            transition-colors
            duration-150
            hover:bg-indigo-800
          "
              >
                Skicka
              </button>
            </div>
            <div>
              <div className="mt-2 text-right text-xs text-gray-700">
                Kossans kundservice
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default about
