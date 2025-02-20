"use client"

import type * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function InputField({ label, error, className, ...props }: InputFieldProps) {
  return (
    <div className="space-y-2">
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <Input className={`${className} ${error ? "border-destructive" : ""}`} {...props} />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

