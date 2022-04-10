import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity.js'
import { Post } from '../typings'
import Link from 'next/link'
import Footer from '../components/Footer'

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Bergs Kossors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-green-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className=" font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Bergs Kossor
            </span>{' '}
            är ett ställe där kossorna kan skriva
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim harum
            ipsam ad! Sequi, adipisci architecto voluptate saepe dolor ea id
            dignissimos. Maiores blanditiis suscipit quidem illo aspernatur?
            Hic, voluptatem repellat.
          </h2>
        </div>
      </div>

      {/* Alla poster */}
      <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 lg:gap-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt="post image"
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p>
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt="author image"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
     author -> {
     name,
     image
  },
    description,
    slug,
    mainImage
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
