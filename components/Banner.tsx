'use client'

import React from 'react'
import Container from './Container'
import Image from 'next/image'
import bannerImage1 from '@/public/images/banner1.jpg'
import bannerImage2 from '@/public/images/banner2.jpg'
import bannerImage3 from '@/public/images/banner3.jpg'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden rounded-b-3xl bg-primaryColor px-4">
      <Container>
        <div className="grid place-items-center gap-20 text-white md:grid-cols-2">
          {/* left side */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                무료로 사용해보세요.
              </h1>
            </FadeIn>
            <p className="text-sm tracking-wider">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              accusantium repudiandae nesciunt iste
              <br />
              officia aliquid dicta, ipsam quaerat officiis accusamus id
              expedita numquam provident, sapiente adipisci atque quae
              explicabo. Eum.
            </p>
            <div className="flex w-full flex-col justify-between gap-4 rounded-3xl bg-white p-6 text-black lg:flex-row xl:p-10">
              <input
                type="text"
                placeholder="메일 주소를 입력해주세요."
                className="h-12 w-full rounded-xl border-[1px] border-gray-300 px-4 text-sm text-gray-600 outline-none duration-300 hover:border-primaryColor focus-visible:border-primaryColor"
              />
              <button className="h-12 w-full rounded-xl bg-darkBlue font-medium text-white duration-300 hover:opacity-80">
                시작하기
              </button>
            </div>
          </div>
          {/* right side */}
          <div className="relative flex w-full items-center justify-center gap-6">
            <motion.div
              initial={{ y: 300 }} // 처음
              animate={{ y: 0 }} // 마지막
              transition={{ duration: 0.2 }} // 속도
            >
              <Image
                src={bannerImage1}
                alt="bannerImage1"
                className="w-52 rounded-xl object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={bannerImage2}
                alt="bannerImage2"
                className="w-52 rounded-xl object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={bannerImage3}
                alt="bannerImage3"
                className="w-52 rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}
