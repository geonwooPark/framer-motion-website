import React from 'react'
import Container from './Container'
import { footerList } from '@/constants'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa'
import { TbMinusVertical } from 'react-icons/tb'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="mt-10 w-full bg-blueLight">
      <Container>
        <div className="flex flex-col justify-between gap-2 text-sm md:flex-row md:items-center">
          <p className="mb-2">&copy; Ventileco</p>
          <ul className="mb-2 flex items-center">
            {footerList.map((item) => (
              <li key={item._id} className="flex items-center">
                <Link
                  href={item.link as any}
                  className="text-gray-500 duration-300 hover:opacity-80"
                >
                  {item.title}
                </Link>
                <span>{!item.lastElem && <TbMinusVertical />}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href=""
              target="_blank"
              className="text-xl duration-300 hover:opacity-80"
            >
              <FaGithub />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl duration-300 hover:opacity-80"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl duration-300 hover:opacity-80"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
