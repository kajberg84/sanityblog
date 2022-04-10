import Link from 'next/link'
import Image from 'next/image'

function Header() {
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
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Följ kossan
          </h3>
        </div>
        <div className="items-center space-x-5 sm:visible md:hidden ">
          kebab
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Logga in</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Registrera
        </h3>
      </div>
    </header>
  )
}

export default Header
