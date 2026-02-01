"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Zap, 
  TrendingDown, 
  BarChart3, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle2,
  Star
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

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

export default function StackOptimizerLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Zap className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-semibold">StackOptimizer</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm transition-colors hover:text-foreground text-muted-foreground">
                Features
              </a>
              <a href="#pricing" className="text-sm transition-colors hover:text-foreground text-muted-foreground">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm transition-colors hover:text-foreground text-muted-foreground">
                Testimonials
              </a>
              <a href="#waitlist">
                <Button size="sm">Join Waitlist</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/10 px-4 py-1.5 text-sm">
              <Zap className="h-3.5 w-3.5" />
              <span>Launch 2026</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Stop Overpaying for SaaS You Don't Use
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              StackOptimizer tracks your entire software stack, identifies waste, and helps you 
              save thousands on unused subscriptions and redundant tools.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#waitlist">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Early Access
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to optimize your stack
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features to help you save time and money
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <TrendingDown className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Usage Analytics</h3>
                <p className="text-muted-foreground">
                  Track real-time usage across all your SaaS tools and identify what you're actually using.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <DollarSign className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Get AI-powered recommendations to reduce spend and eliminate redundant subscriptions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <BarChart3 className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Smart Insights</h3>
                <p className="text-muted-foreground">
                  Visualize your stack health with beautiful dashboards and actionable reports.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Security First</h3>
                <p className="text-muted-foreground">
                  Bank-level encryption and SOC 2 compliance to keep your data safe and secure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Renewal Alerts</h3>
                <p className="text-muted-foreground">
                  Never miss a renewal deadline. Get timely alerts before subscriptions auto-renew.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">One-Click Integration</h3>
                <p className="text-muted-foreground">
                  Connect all your tools in minutes with our extensive integration library.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free, scale as you grow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">Starter</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Up to 5 tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-8 w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Popular
                </div>
                <h3 className="text-xl font-semibold">Professional</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Unlimited tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">AI recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                    <span className="text-sm">SLA guarantee</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-8 w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-b border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by teams worldwide
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our early adopters have to say
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "StackOptimizer helped us cut our SaaS spend by 40% in the first month. 
                  The insights are incredible."
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Finally, a tool that shows us what we're actually using. No more paying for 
                  forgotten subscriptions."
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">VP Finance, StartupXYZ</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "The renewal alerts alone have saved us thousands. StackOptimizer pays for itself."
                </p>
                <div className="mt-4">
                  <p className="font-semibold">Emily Watson</p>
                  <p className="text-sm text-muted-foreground">Operations Lead, ScaleUp</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="border-b border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Join the StackOptimizer Waitlist
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get early access when we launch. Be among the first to optimize your stack.
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
              <span>© 2026 StackOptimizer. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
