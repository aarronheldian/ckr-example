"use client"

import {
  Bell,
  ChartColumn,
  CirclePlus,
  Home,
  Menu,
  Plus,
  User,
  Users,
} from "lucide-react"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function HomeCon() {
  const searchParams = useSearchParams()

  const isSuccess = searchParams.get("success") === "true"

  const company = searchParams.get("company") || "PT Global Niaga Sejahtera"

  const isDeal = searchParams.get("deal") === "true"

  const rekening = searchParams.get("rekening") || "1330012938123"

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col">
      {/* Header */}
      <div className="relative overflow-hidden rounded-b-[32px] bg-primary px-5 pt-8 pb-16 text-primary-foreground">
        {/* Background */}
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

        <div className="relative z-10 space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold tracking-wide">CAKRA</h1>

              <p className="text-[11px] text-primary-foreground/70">
                Sales Management System
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="size-9 rounded-xl border-0 bg-white/10 text-white shadow-none hover:bg-white/20"
              >
                <Bell className="size-4" />
              </Button>

              <Button
                size="icon"
                variant="secondary"
                className="size-9 rounded-xl border-0 bg-white/10 text-white shadow-none hover:bg-white/20"
              >
                <User className="size-4" />
              </Button>
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-primary-foreground/70">
                Welcome Back 👋
              </p>

              <h2 className="text-2xl font-bold tracking-tight">
                Good Morning,
                <br />
                Andi Pratama
              </h2>
            </div>

            {/* Performance Card */}
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-primary-foreground/70">
                    Today Performance
                  </p>

                  <h3 className="text-2xl font-bold">78%</h3>
                </div>

                <div className="text-right">
                  <div className="mb-2 h-2 w-24 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>

                  <p className="text-[11px] text-primary-foreground/70">
                    312 JT / 400 JT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-20 -mt-8 px-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl border bg-background/95 p-4 shadow-sm backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-muted-foreground">Total Leads</p>

                <Users className="size-4 text-primary" />
              </div>

              <div>
                <h3 className="text-3xl leading-none font-bold">
                  {isSuccess ? 129 : 128}
                </h3>

                <p className="mt-1 text-[11px] text-green-600">
                  +12% this week
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-background/95 p-4 shadow-sm backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-muted-foreground">
                  Deals Closed
                </p>

                <ChartColumn className="size-4 text-primary" />
              </div>

              <div>
                <h3 className="text-3xl leading-none font-bold">
                  {isDeal ? 46 : 45}
                </h3>

                <p className="mt-1 text-[11px] text-green-600">
                  +8% conversion
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-background/95 p-4 shadow-sm backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-muted-foreground">New Account</p>

                <CirclePlus className="size-4 text-primary" />
              </div>

              <div>
                <h3 className="text-3xl leading-none font-bold">
                  {isDeal ? 33 : 32}
                </h3>

                <p className="mt-1 text-[11px] text-muted-foreground">
                  CASA onboarding
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-background/95 p-4 shadow-sm backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-muted-foreground">Fee Income</p>

                <Bell className="size-4 text-primary" />
              </div>

              <div>
                <h3 className="text-3xl leading-none font-bold">312 JT</h3>

                <p className="mt-1 text-[11px] text-muted-foreground">
                  Monthly progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(isSuccess || isDeal) && (
        <div className="mt-4 px-4">
          <div
            className={`flex items-start gap-3 rounded-3xl border p-4 shadow-sm ${
              isDeal
                ? "border-blue-200 bg-blue-50"
                : "border-green-200 bg-green-50"
            } `}
          >
            <div
              className={`rounded-2xl p-2 ${
                isDeal
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              } `}
            >
              <CirclePlus className="size-5" />
            </div>

            <div className="flex-1">
              <h3
                className={`text-sm font-semibold ${
                  isDeal ? "text-blue-900" : "text-green-900"
                } `}
              >
                {isDeal
                  ? "Deal Successfully Closed"
                  : "New Leads Added Successfully"}
              </h3>

              <p
                className={`mt-1 text-[11px] leading-relaxed ${
                  isDeal ? "text-blue-700" : "text-green-700"
                } `}
              >
                {isDeal ? (
                  <>
                    {company} successfully activated MTB account with rekening
                    number <span className="font-semibold">{rekening}</span>.
                  </>
                ) : (
                  <>
                    {company} has been added into negotiation pipeline and
                    assigned to sales monitoring.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 px-4">
        <div className="rounded-3xl border bg-background p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Pipeline Leads</h3>

              <p className="text-[11px] text-muted-foreground">
                Sales funnel monitoring
              </p>
            </div>

            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          {/* Pipeline */}
          <div className="overflow-x-auto rounded-2xl">
            <div className="flex min-w-max items-center py-1">
              {[
                {
                  label: "New",
                  value: 48,
                  bg: "bg-blue-100",
                  text: "text-blue-900",
                  labelText: "text-blue-700",
                },
                {
                  label: "Contacted",
                  value: 32,
                  bg: "bg-sky-100",
                  text: "text-sky-900",
                  labelText: "text-sky-700",
                },
                {
                  label: "Proposed",
                  value: 21,
                  bg: "bg-violet-100",
                  text: "text-violet-900",
                  labelText: "text-violet-700",
                },
                {
                  label: "Negotiation",
                  value: isDeal ? 12 : isSuccess ? 13 : 12,
                  bg: "bg-amber-100",
                  text: "text-amber-900",
                  labelText: "text-amber-700",
                },
                {
                  label: "Won",
                  value: isDeal ? 10 : 9,
                  bg: "bg-green-100",
                  text: "text-green-900",
                  labelText: "text-green-700",
                },
              ].map((item, index, array) => {
                const isFirst = index === 0
                const isLast = index === array.length - 1

                return (
                  <div
                    key={item.label}
                    className={`relative flex h-[74px] min-w-[118px] shrink-0 flex-col justify-center px-4 shadow-sm ${item.bg} `}
                    style={{
                      clipPath: isFirst
                        ? "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)"
                        : isLast
                          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12% 50%)"
                          : "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%, 12% 50%)",
                      marginLeft: isFirst ? "0" : "-10px",
                      zIndex: array.length - index,
                    }}
                  >
                    <div className={!isFirst ? "pl-3" : ""}>
                      <p
                        className={`text-[10px] font-medium ${item.labelText}`}
                      >
                        {item.label}
                      </p>

                      <h4
                        className={`text-xl leading-none font-bold ${item.text}`}
                      >
                        {item.value}
                      </h4>
                    </div>

                    {/* subtle border */}
                    <div className="pointer-events-none absolute inset-0 border border-black/5" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Potential Value */}
          <div className="mt-4 rounded-2xl bg-muted/50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground">
                  Total Potential Value
                </p>

                <h3 className="text-xl font-bold">Rp 1.25B</h3>
              </div>

              <div className="rounded-xl bg-primary/10 px-3 py-2">
                <p className="text-xs font-medium text-primary">
                  +18% this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="rounded-3xl border bg-background p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Active Leads</h3>

              <p className="text-[11px] text-muted-foreground">
                Ongoing customer pipeline
              </p>
            </div>

            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {isSuccess || isDeal ? (
              isDeal ? (
                <div className="flex items-center justify-between rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-green-900">
                      {company}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-medium text-green-700">
                        WON
                      </div>

                      <p className="text-[11px] text-green-700">{rekening}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-green-100 px-3 py-2 text-xs font-semibold text-green-700">
                    Active
                  </div>
                </div>
              ) : (
                <Link href="/detail">
                  <div className="flex items-center justify-between rounded-2xl border bg-muted/30 p-4 transition-all hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-semibold">
                        PT Global Niaga Sejahtera
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <div className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-medium text-amber-700">
                          Negotiation
                        </div>

                        <p className="text-[11px] text-muted-foreground">
                          Rp 250 JT
                        </p>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-xl"
                    >
                      Detail
                    </Button>
                  </div>
                </Link>
              )
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed bg-muted/20 px-4 py-10 text-center">
                <div className="rounded-2xl bg-muted p-4">
                  <Users className="size-6 text-muted-foreground" />
                </div>

                <h3 className="mt-4 text-sm font-semibold">
                  No Active Leads Yet
                </h3>

                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  Start creating new leads to monitor pipeline, negotiation, and
                  onboarding progress.
                </p>

                <Link href="/add-lead" className="mt-5 w-full">
                  <Button className="h-11 w-full rounded-2xl">
                    <Plus className="mr-2 size-4" />
                    Add New Leads
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Today Tasks */}
      <div className="mt-4 px-4">
        <div className="rounded-3xl border bg-background p-4 shadow-sm">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Today Tasks</h3>

              <p className="text-[11px] text-muted-foreground">
                Schedule & follow up activities
              </p>
            </div>

            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {[
              {
                title: "Follow Up PT Maju Bersama",
                time: "09:00 AM",
                status: "High Priority",
                statusColor: "bg-red-100 text-red-700",
              },
              {
                title: "Meeting Nasabah Priority",
                time: "11:30 AM",
                status: "Meeting",
                statusColor: "bg-blue-100 text-blue-700",
              },
              {
                title: "Review CASA Pipeline",
                time: "02:00 PM",
                status: "Internal",
                statusColor: "bg-violet-100 text-violet-700",
              },

              ...(isSuccess && !isDeal
                ? [
                    {
                      title: `Negotiation Meeting - ${company}`,
                      time: "03:30 PM",
                      status: "Negotiation",
                      statusColor: "bg-amber-100 text-amber-700",
                    },
                  ]
                : []),

              ...(isDeal
                ? [
                    {
                      title: `Welcome Call - ${company}`,
                      time: "04:00 PM",
                      status: "Account Active",
                      statusColor: "bg-green-100 text-green-700",
                    },
                  ]
                : []),
            ].map((task) => (
              <div
                key={task.title}
                className="flex items-center justify-between rounded-2xl border bg-muted/30 p-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary" />

                    <p className="truncate text-sm font-medium">{task.title}</p>
                  </div>

                  <div className="mt-1 flex items-center gap-2 pl-4">
                    <p className="text-[11px] text-muted-foreground">
                      {task.time}
                    </p>

                    <div
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </div>
                  </div>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  className="size-8 rounded-xl"
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <div className="sticky bottom-0 z-50 px-4 pb-4">
        <div className="relative overflow-hidden rounded-[32px] border bg-background/95 shadow-2xl backdrop-blur">
          {/* Glow Effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex items-center justify-between px-2 py-2">
            {/* Home */}
            <Button
              variant="ghost"
              className="flex h-14 w-14 flex-col gap-1 rounded-2xl text-primary"
            >
              <Home className="size-5" />

              <span className="text-[10px] font-medium">Home</span>
            </Button>

            {/* Leads */}
            <Button
              variant="ghost"
              className="flex h-14 w-14 flex-col gap-1 rounded-2xl text-muted-foreground"
            >
              <Users className="size-5" />

              <span className="text-[10px] font-medium">Leads</span>
            </Button>

            {/* Floating Add */}
            <Link href="/add-lead">
              <Button size="icon" className="size-14 rounded-2xl shadow-xl">
                <Plus className="size-6" />
              </Button>
            </Link>

            {/* Deals */}
            <Button
              variant="ghost"
              className="flex h-14 w-14 flex-col gap-1 rounded-2xl text-muted-foreground"
            >
              <ChartColumn className="size-5" />

              <span className="text-[10px] font-medium">Deals</span>
            </Button>

            {/* Menu */}
            <Button
              variant="ghost"
              className="flex h-14 w-14 flex-col gap-1 rounded-2xl text-muted-foreground"
            >
              <Menu className="size-5" />

              <span className="text-[10px] font-medium">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
