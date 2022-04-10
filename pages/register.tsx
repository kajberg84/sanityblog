import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function register() {
  const handleRegister = (e: any) => {
    alert('Går ej att registrera i demo versionen.')
  }
  return (
    <div className="mx-auto max-w-7xl ">
      <Head>
        <title>Bergs Kossors registrering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-green-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="text-center font-serif text-6xl">Registrera</h1>
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
          <form method="POST">
            <label className="mb-6 block">
              <span className="text-gray-700">Förnamn</span>
              <input
                type="text"
                name="fname"
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
                placeholder="Kossa"
              />
            </label>
            <label className="mb-6 block">
              <span className="text-gray-700">Efternamn</span>
              <input
                type="text"
                name="lname"
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
                placeholder="Kossason"
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
              <span className="text-gray-700">Repeat email</span>
              <input
                name="email"
                type="rep-email"
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
            <div className="flex items-center justify-around">
              <button
                onClick={handleRegister}
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
                Registrera
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default register
