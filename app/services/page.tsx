import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <Container>
      <div className="flex flex-col gap-6 px-4">
        <FadeIn>
          <Title title="간단한 리포트 애플리케이션" />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              inventore, possimus repudiandae unde doloremque voluptates
              exercitationem in tempora sint autem.
            </p>
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              inventore, possimus repudiandae unde doloremque voluptates
              exercitationem in tempora sint autem.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              inventore, possimus repudiandae unde doloremque voluptates
              exercitationem in tempora sint autem.
            </p>
            <p className="max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              inventore, possimus repudiandae unde doloremque voluptates
              exercitationem in tempora sint autem.
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}
