import React from 'react'
import Container from './Container'
import logo1 from '@/public/images/1.svg'
import logo2 from '@/public/images/2.svg'
import logo3 from '@/public/images/3.svg'
import logo4 from '@/public/images/4.svg'
import logo5 from '@/public/images/5.svg'
import logo6 from '@/public/images/6.svg'
import logo7 from '@/public/images/7.svg'
import logo8 from '@/public/images/8.svg'
import Image from 'next/image'
import FadeIn from './FadeIn'

const clients = [
  ['1', logo1],
  ['2', logo2],
  ['3', logo3],
  ['4', logo4],
  ['5', logo5],
  ['6', logo6],
  ['7', logo7],
  ['8', logo8],
]

export default function Client() {
  return (
    <div className="mt-24 bg-slate-800 px-4">
      <Container>
        <div className="mb-4 flex items-center gap-x-8">
          <h2 className="text-center text-lg font-semibold text-white">
            함께 하는 기업들
          </h2>
          <div className="h-[1px] flex-auto bg-neutral-700"></div>
        </div>

        <FadeIn>
          <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {clients.map(([client, logo]) => (
              <li key={client}>
                <Image src={logo} alt={client} />
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </div>
  )
}
