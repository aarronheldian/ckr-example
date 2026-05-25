"use client"

import { Suspense } from "react"

import HomeCon from "@/components/home"

export default function Page() {
  return (
    <Suspense>
      <HomeCon />
    </Suspense>
  )
}