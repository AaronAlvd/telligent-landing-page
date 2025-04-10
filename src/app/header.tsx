'use client'

import Image from 'next/image'
import telligent from '../../public/telligent.png'

import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-red-100 bg-red-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-center sm:justify-start w-full" onClick={() => router.push('/')}>
          <Image src={telligent} className="h-[25px] w-auto" alt="telligent logo" />
        </div>
      </div>
    </header>
  )
}