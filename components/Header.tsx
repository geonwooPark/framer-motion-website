'use client'

import { headerListItem } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import SlideIn from './SlideIn'

export default function Header() {
  const [active, setActive] = useState('')
  const [showMenu, setShowMenu] = useState(false)
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
        {/* small Logo */}
        <div
          className="group flex h-5 w-7 cursor-pointer flex-col justify-between overflow-hidden md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <span className="inline-flex h-[3px] w-full -translate-x-1 bg-gray-500 transition-transform duration-500 group-hover:translate-x-0 group-hover:bg-primaryColor"></span>
          <span className="inline-flex h-[3px] w-full -translate-x-3 bg-gray-500 transition-transform duration-500 group-hover:translate-x-0 group-hover:bg-primaryColor"></span>
          <span className="inline-flex h-[3px] w-full -translate-x-1 bg-gray-500 transition-transform duration-500 group-hover:translate-x-0 group-hover:bg-primaryColor"></span>
        </div>
        {/* small Screen Menu */}
        {showMenu && (
          <div className="fixed left-0 top-0 z-50 h-screen w-full bg-black/80 lg:hidden">
            <SlideIn>
              <div className="relative flex h-full w-[70%] items-center bg-white p-4">
                <span
                  className="absolute right-4 top-4 cursor-pointer text-3xl text-red-600"
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  <IoClose />
                </span>
                <ul className="flex w-full flex-col gap-6 text-lg font-semibold">
                  {headerListItem.map((item) => (
                    <Link
                      key={item._id}
                      href={item.link as any}
                      className="flex flex-1 items-center"
                    >
                      <li
                        className="cursor-pointer duration-300 hover:text-gray-400"
                        onClick={() => {
                          setShowMenu(false)
                        }}
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>
        )}
      </div>
    </div>
  )
}
