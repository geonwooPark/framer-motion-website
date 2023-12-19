import React, { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-screen-2xl px-2 py-10">{children}</div>
}
