import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
  return (
    <Container>
      <div className="flex flex-col gap-6 px-4">
        <FadeIn>
          <Title title="회사 개요" />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis aliquid ducimus dolor quidem accusamus facilis nihil,
              totam omnis quam nemo! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Blanditiis aliquid ducimus dolor quidem
              accusamus facilis nihil, totam omnis quam nemo!
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis aliquid ducimus dolor quidem accusamus facilis nihil,
              totam omnis quam nemo! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Blanditiis aliquid ducimus dolor quidem
              accusamus facilis nihil, totam omnis quam nemo!
            </p>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis aliquid ducimus dolor quidem accusamus facilis nihil,
              totam omnis quam nemo! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Blanditiis aliquid ducimus dolor quidem
              accusamus facilis nihil, totam omnis quam nemo!
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis aliquid ducimus dolor quidem accusamus facilis nihil,
              totam omnis quam nemo Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Blanditiis aliquid ducimus dolor quidem
              accusamus facilis nihil, totam omnis quam nemo!
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}
