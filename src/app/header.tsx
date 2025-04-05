'use client'

import Link from 'next/link'
import Image from 'next/image'
import telligent from '../../public/telligent.png'

import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-red-100 bg-red-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    {/* Logo */}
    <div className="flex justify-center sm:justify-start w-full" onClick={() => router.push('/')}>
      <Image src={telligent} className="h-[25px] w-auto" alt="telligent logo" />
    </div>
    
    {/* Navigation */}
    <nav className="hidden sm:block">
      <ul className="flex space-x-6">
        <li>
          <Link href="#about" className="text-gray-600 hover:text-red-600 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  )
}