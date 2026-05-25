"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

import {
  ArrowLeft,
  Building2,
  CircleCheckBig,
  CircleX,
  Copy,
  Phone,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Page() {
  const router = useRouter()

  const [openDeal, setOpenDeal] = useState(false)

  const rekeningNumber = "1330012938123"

  function handleDeal() {
    setOpenDeal(true)

    setTimeout(() => {
      router.push(
        `/?deal=true&company=${encodeURIComponent(
          "PT Global Niaga Sejahtera"
        )}&rekening=${rekeningNumber}`
      )
    }, 2500)
  }

  return (
    <>
      <div className="mx-auto flex min-h-svh max-w-md flex-col bg-muted/30">
        {/* Header */}
        <div className="rounded-b-[32px] bg-primary px-5 pb-6 pt-10 text-primary-foreground">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button
                size="icon"
                variant="secondary"
                className="size-9 rounded-xl border-0 bg-white/10 text-white"
              >
                <ArrowLeft className="size-4" />
              </Button>
            </Link>

            <div>
              <h1 className="text-xl font-bold">
                Leads Detail
              </h1>

              <p className="text-xs text-primary-foreground/70">
                MTB Mandiri Tabungan Bisnis
              </p>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="space-y-4 p-4">
          <Card className="rounded-3xl">
            <CardContent className="space-y-5 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Company Name
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    PT Global Niaga Sejahtera
                  </h2>
                </div>

                <div className="rounded-2xl bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  Negotiation
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">
                    CIF Number
                  </p>

                  <p className="mt-1 font-medium">
                    10293847
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    NPWP
                  </p>

                  <p className="mt-1 font-medium">
                    01.234.567.8
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    PIC Name
                  </p>

                  <p className="mt-1 font-medium">
                    Andi Pratama
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Phone
                  </p>

                  <p className="mt-1 font-medium">
                    082211223344
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/50 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Wallet className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Potential CASA
                    </p>

                    <h3 className="text-xl font-bold">
                      Rp 250.000.000
                    </h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="rounded-3xl">
            <CardContent className="p-5">
              <h3 className="mb-4 text-sm font-semibold">
                Activity Timeline
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Leads Created",
                    time: "08:00 AM",
                  },
                  {
                    title: "Customer Contacted",
                    time: "10:30 AM",
                  },
                  {
                    title: "Negotiation Meeting",
                    time: "01:00 PM",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3"
                  >
                    <div className="mt-1 size-2 rounded-full bg-primary" />

                    <div>
                      <p className="text-sm font-medium">
                        {item.title}
                      </p>

                      <p className="text-[11px] text-muted-foreground">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1" />

        {/* Bottom Action */}
        <div className="sticky bottom-0 p-4">
          <div className="rounded-[28px] border bg-background p-3 shadow-xl">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="destructive"
                className="h-12 rounded-2xl"
              >
                <CircleX className="mr-2 size-4" />
                Drop
              </Button>

              <Button
                className="h-12 rounded-2xl"
                onClick={handleDeal}
              >
                <CircleCheckBig className="mr-2 size-4" />
                Deal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Success Modal */}
      <Dialog
        open={openDeal}
        onOpenChange={setOpenDeal}
      >
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader className="items-center text-center">
            <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600">
              <CircleCheckBig className="size-8" />
            </div>

            <DialogTitle>
              Account Successfully Created
            </DialogTitle>

            <DialogDescription>
              Customer onboarding has been completed
              successfully.
            </DialogDescription>
          </DialogHeader>

          {/* Account Information */}
          <div className="rounded-2xl bg-muted/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Rekening Number
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  {rekeningNumber}
                </h3>
              </div>

              <Button
                size="icon"
                variant="secondary"
                className="rounded-xl"
              >
                <Copy className="size-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-3">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-green-100 p-2 text-green-700">
                <Building2 className="size-4" />
              </div>

              <div>
                <p className="text-sm font-semibold text-green-900">
                  MTB Account Activated
                </p>

                <p className="mt-1 text-[11px] leading-relaxed text-green-700">
                  The customer has been moved into
                  active portfolio and sales report
                  updated automatically.
                </p>
              </div>
            </div>
          </div>

          <Button className="h-11 rounded-2xl">
            <Phone className="mr-2 size-4" />
            Contact Customer
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}