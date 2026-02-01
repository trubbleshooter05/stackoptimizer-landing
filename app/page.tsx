"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email" }),
});

type FormData = z.infer<typeof formSchema>;

function WaitlistForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        toast.success("You're in! Thanks for joining the waitlist.");
        reset();
      } else {
        toast.error(json.error || "Something went wrong—try again.");
      }
    } catch {
      toast.error("Network error—try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name (optional)</Label>
        <Input id="name" placeholder="Your name" {...register("name")} />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respect your inbox—no spam, ever.
      </p>
    </form>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Waitlist Section */}
      <section className="border-b border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <h1 className="text-3xl font-semibold tracking-tight">
              Join the StackOptimizer Waitlist
            </h1>
            <p className="mt-2 text-muted-foreground">
              Get early access when we launch.
            </p>

            <div className="mt-6">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Zap className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-semibold">StackOptimizer</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
              <span>Coming Soon 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}