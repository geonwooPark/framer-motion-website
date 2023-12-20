'use client'

import { headerListItem } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [active, setActive] = useState('')
  const pathName = usePathname()

  useEffect(() => {
    setActive(pathName)
  }, [pathName])

  return (
    <div className="h-20 w-full border-b border-gray-500 bg-white text-sm">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4">
        {/* logo */}
        <Link href={'/'}>
          <span className="relative inline-block before:absolute before:-inset-1.5 before:block before:-skew-y-3 before:bg-primaryColor">
            <p className="relative text-2xl font-bold text-white">Ventileco</p>
          </span>
        </Link>
        {/* Header ListItem */}
        <div className="hidden items-center gap-4 md:inline-flex">
          <ul className="flex gap-4">
            {headerListItem.map((item) => (
              <li
                key={item._id}
                className={`group relative cursor-pointer text-gray-600 duration-300 hover:text-primaryColor ${
                  active === item.link && 'text-primaryColor'
                }`}
              >
                <Link href={item.link as any}>{item.title}</Link>
                <span
                  className={`absolute bottom-[-1px] left-0 h-[2px] w-full scale-0 bg-primaryColor duration-300 group-hover:scale-100 ${
                    active === item.link && 'scale-100'
                  }`}
                ></span>
              </li>
            ))}
          </ul>
          <button className="h-10 w-28 rounded-md bg-darkBlue text-white duration-300 hover:opacity-80">
            연락하기
          </button>
        </div>
      </div>
    </div>
  )
}
