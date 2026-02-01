"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/50 bg-accent/10 p-8">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-semibold">You&apos;re on the list!</h3>
        <p className="text-muted-foreground">
          We&apos;ll be in touch soon with your early access invite.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="h-12 bg-background border-border"
      />
      <Input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 bg-background border-border"
      />
      <Button 
        type="submit" 
        size="lg" 
        className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Get Early Access
      </Button>
      <p className="text-xs text-muted-foreground">
        We respect your inbox - no spam, ever.
      </p>
    </form>
  )
}
