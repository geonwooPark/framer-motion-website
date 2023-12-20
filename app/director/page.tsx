import Container from '@/components/Container'
import Title from '@/components/Title'
import React from 'react'
import director from '@/public/images/director.jpg'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

export default function page() {
  return (
    <Container>
      <div className="flex flex-col gap-6 px-4">
        <FadeIn>
          <Title title="대표자 인삿말" />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, qui exercitationem obcaecati animi asperiores impedit
              necessitatibus! Numquam similique ipsam iure repudiandae laborum
              iste, possimus nesciunt excepturi esse, fuga eligendi nobis?
            </p>
            <Image
              src={director}
              alt="대표자 사진"
              className="w-52 rounded-2xl"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, qui exercitationem obcaecati animi asperiores impedit
              necessitatibus! Numquam similique ipsam iure repudiandae laborum
              iste, possimus nesciunt excepturi esse, fuga eligendi nobis?
            </p>
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, qui exercitationem obcaecati animi asperiores impedit
              necessitatibus! Numquam similique ipsam iure repudiandae laborum
              iste, possimus nesciunt excepturi esse, fuga eligendi nobis?
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}
