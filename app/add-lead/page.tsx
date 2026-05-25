"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import {
  ArrowLeft,
  Building2,
  CircleCheckBig,
  CreditCard,
  Search,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FormValues = {
  customerType: "existing" | "new"
  product: string
  cif: string
  companyNpwp: string
  companyName: string
  companyAddress: string
  picName: string
  phoneNumber: string
  email: string
}

export default function Page() {
  const router = useRouter()

  const [openSuccess, setOpenSuccess] = useState(false)

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      customerType: "existing",
      product: "MTB Mandiri Tabungan Bisnis",
      cif: "",
      companyNpwp: "",
      companyName: "",
      companyAddress: "",
      picName: "",
      phoneNumber: "",
      email: "",
    },
  })

  const customerType = watch("customerType")
  const cif = watch("cif")
  const npwp = watch("companyNpwp")

  // Existing Customer Auto Fill
  useEffect(() => {
    if (customerType === "existing" && cif === "10293847") {
      setValue("companyName", "PT Maju Bersama Indonesia")
      setValue("companyAddress", "Jl. Sudirman No. 88 Jakarta")
      setValue("picName", "Budi Santoso")
      setValue("phoneNumber", "081234567890")
      setValue("email", "budi@majubersama.co.id")
    }
  }, [cif, customerType, setValue])

  // New Customer Auto Fill
  useEffect(() => {
    if (customerType === "new" && npwp === "01.234.567.8-999.000") {
      setValue("companyName", "PT Global Niaga Sejahtera")
      setValue("companyAddress", "Jl. Gatot Subroto No. 15 Jakarta")
      setValue("picName", "Andi Pratama")
      setValue("phoneNumber", "082211223344")
      setValue("email", "andi@globalniaga.co.id")
    }
  }, [npwp, customerType, setValue])

  function onSubmit(values: FormValues) {
    setOpenSuccess(true)

    setTimeout(() => {
      router.push(
        `/?success=true&company=${encodeURIComponent(values.companyName)}`
      )
    }, 2000)
  }

  return (
    <>
      <div className="mx-auto flex min-h-svh max-w-md flex-col bg-muted/30">
        {/* Header */}
        <div className="rounded-b-[32px] bg-primary px-5 pt-10 pb-6 text-primary-foreground">
          {/* Top */}
          <div className="mb-6 flex items-center gap-3">
            <Button
              size="icon"
              variant="secondary"
              className="size-9 rounded-xl border-0 bg-white/10 text-white hover:bg-white/20"
              onClick={() => router.back()}
            >
              <ArrowLeft className="size-4" />
            </Button>

            <div>
              <h1 className="text-xl font-bold">Add New Leads</h1>

              <p className="text-xs text-primary-foreground/70">
                MTB Mandiri Tabungan Bisnis
              </p>
            </div>
          </div>

          {/* Step */}
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-white text-sm font-bold text-primary">
                1
              </div>

              <div>
                <p className="text-sm font-semibold">Customer Information</p>

                <p className="text-[11px] text-primary-foreground/70">
                  Input & validation process
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          {/* Product */}
          <Card className="rounded-3xl">
            <CardContent className="p-4">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Selected Product</FieldLabel>

                    <FieldContent>
                      <Input disabled {...register("product")} />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Customer Type</FieldLabel>

                    <Select
                      defaultValue="existing"
                      onValueChange={(value) =>
                        setValue("customerType", value as "existing" | "new")
                      }
                    >
                      <FieldContent>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FieldContent>

                      <SelectContent>
                        <SelectItem value="existing">
                          Existing Customer
                        </SelectItem>

                        <SelectItem value="new">New Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>

          {/* Existing */}
          {customerType === "existing" && (
            <Card className="rounded-3xl">
              <CardContent className="p-4">
                <FieldSet>
                  <div className="mb-4 flex items-center gap-2">
                    <User className="size-4" />

                    <p className="text-sm font-semibold">
                      Existing Customer Lookup
                    </p>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel>CIF Number</FieldLabel>

                      <FieldContent>
                        <div className="flex gap-2">
                          <Input placeholder="Input CIF" {...register("cif")} />

                          <Button type="button" size="icon">
                            <Search className="size-4" />
                          </Button>
                        </div>
                      </FieldContent>

                      <FieldDescription>Try: 10293847</FieldDescription>

                      {errors.cif && (
                        <FieldError>{errors.cif.message}</FieldError>
                      )}
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </CardContent>
            </Card>
          )}

          {/* New Customer */}
          {customerType === "new" && (
            <Card className="rounded-3xl">
              <CardContent className="p-4">
                <FieldSet>
                  <div className="mb-4 flex items-center gap-2">
                    <Building2 className="size-4" />

                    <p className="text-sm font-semibold">Company Validation</p>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel>Company NPWP</FieldLabel>

                      <FieldContent>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Input NPWP"
                            {...register("companyNpwp")}
                          />

                          <Button type="button" size="icon">
                            <Search className="size-4" />
                          </Button>
                        </div>
                      </FieldContent>

                      <FieldDescription>
                        Try: 01.234.567.8-999.000
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </CardContent>
            </Card>
          )}

          {/* Customer Information */}
          <Card className="rounded-3xl">
            <CardContent className="space-y-4 p-4">
              <div>
                <p className="text-sm font-semibold">Customer Information</p>

                <p className="text-[11px] text-muted-foreground">
                  Auto-filled from integrated system
                </p>
              </div>

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Company Name</FieldLabel>

                    <FieldContent>
                      <Input {...register("companyName")} />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Company Address</FieldLabel>

                    <FieldContent>
                      <Input {...register("companyAddress")} />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>PIC Name</FieldLabel>

                    <FieldContent>
                      <Input {...register("picName")} />
                    </FieldContent>
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field>
                      <FieldLabel>Phone</FieldLabel>

                      <FieldContent>
                        <Input {...register("phoneNumber")} />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel>Email</FieldLabel>

                      <FieldContent>
                        <Input {...register("email")} />
                      </FieldContent>
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
            </CardContent>
          </Card>

          <Button className="h-12 w-full rounded-2xl">
            <CreditCard className="mr-2 size-4" />
            Create Leads
          </Button>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader className="items-center text-center">
            <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600">
              <CircleCheckBig className="size-8" />
            </div>

            <DialogTitle>Leads Successfully Created</DialogTitle>

            <DialogDescription>
              Your MTB onboarding leads has been successfully submitted and
              assigned.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
