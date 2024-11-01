import { GetStaticProps } from 'next'
import React, { Children, useState } from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // console.log('submitdata:', data)

    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <main>
      <Header />
      <img
        className="h-40 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold">{props.children}</h1>
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold">{props.children}</h2>
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ children, href }: any) => (
                <a className="text-blue-600 hover:underline" href={href}>
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      <hr className="my-5 mx-auto max-w-lg border border-green-400" />
      {submitted ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-green-400 p-10 text-white">
          <h2 className="text-center text-3xl font-bold">
            Tack för din kommentar 🙌
          </h2>
          <p className="text-center">
            Den måste godkännas först sen kommer den visas på sidan.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-3xl font-bold">Lämna en kommentar nedan</h3>
          <hr className="mt-2 py-3" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Namn</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-green-500  focus:ring"
              placeholder="Ellen nu"
              type="text"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-green-500  focus:ring"
              placeholder="Ellen nu"
              type="email"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Kommentar</span>

            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-green-500 focus:ring"
              placeholder="..."
              rows={8}
            ></textarea>
          </label>

          {/* error hantering */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-600">
                --- Du måste fylla i namnet ---
              </span>
            )}
            {errors.email && (
              <span className="text-red-600">
                --- Du måste fylla i email ---
              </span>
            )}
            {errors.comment && (
              <span className="text-red-600">
                --- Du måste fylla i en kommentar ---
              </span>
            )}
          </div>
          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer bg-green-500 py-2 px-4 font-bold text-white shadow hover:bg-green-400 focus:outline-none"
          />
        </form>
      )}
      {/* comments under här */}
      <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-blue-500">
        <h3 className="text-3xl"> Kommentarer</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p>
              <span className="text-blue-600">{comment.name}:</span>{' '}
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  //prefetch all routes
  const query = `*[_type == "post"] {
  _id,
    slug {
      current
    }
}`

  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
     author -> {
     name,
     image
  },
  'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true ],
    description,
    slug,
    mainImage,
  body
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  // Detta gör att Next.js går till 404 page om posten inte finns
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // revalidate after 60 seconds
  }
}
