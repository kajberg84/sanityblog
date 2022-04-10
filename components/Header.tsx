import Link from 'next/link'
import Image from 'next/image'

function Header() {

  const subscribe = (e: any) => {
    alert(
      'Du följer kossorna nu!(Har inte implementerat då detta bara är demo version)'
    )
  }
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href={'/'}>
          <div className="flex cursor-pointer items-center font-bold">
            <Image
              src="/kossa.jpg"
              alt="Picture of a cow"
              width={60}
              height={44}
            />
            <p>Bergs Kossor</p>
          </div>
        </Link>

        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>
            <Link href={'/about'}>Om</Link>
          </h3>
          <h3>
            <Link href={'/contact'}>Kontakta</Link>
          </h3>
          <button
            className="rounded-full bg-green-600 px-4 py-1 text-white"
            onClick={subscribe}
          >
            Följ Kossorna
          </button>
        </div>
      </div>
      <div className="hidden items-center space-x-5 text-green-600 md:flex ">
        <h3>
          {' '}
          <Link href={'/login'}>Logga in</Link>
        </h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          <Link href={'/register'}>Registrera</Link>
        </h3>
      </div>
      <div className="my-auto items-center space-x-5 sm:visible md:hidden ">
        KebabMenu(notdone)
      </div>
    </header>
  )
}

export default Header
