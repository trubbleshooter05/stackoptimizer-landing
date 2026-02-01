"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, TrendingDown, Database, Bell, ArrowRight, Check, Zap } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export default function StackOptimizerLanding() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-semibold">StackOptimizer</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
          </div>
          <Button onClick={scrollToWaitlist} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Subtle gradient background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-accent/3 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">Save 20-40% on SaaS spend automatically</span>
            </div>
            
            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Stop Overpaying for SaaS
              <span className="block text-accent">You Don&apos;t Use</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
              Audit idle seats, execute downgrades safely, migrate history without risk. 
              AI-powered optimization that keeps your stack lean and cost-efficient.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                onClick={scrollToWaitlist} 
                size="lg" 
                className="group h-12 gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 bg-transparent"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">$2.4M+</div>
                <div className="mt-1 text-sm text-muted-foreground">Saved by early users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">847</div>
                <div className="mt-1 text-sm text-muted-foreground">Companies on waitlist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground md:text-4xl">32%</div>
                <div className="mt-1 text-sm text-muted-foreground">Avg. cost reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How StackOptimizer Works</h2>
            <p className="text-muted-foreground">Four powerful capabilities that work together to optimize your SaaS spend.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group border-border/50 bg-card transition-all hover:border-accent/50 hover:bg-card/80">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Usage Audit</h3>
                <p className="text-muted-foreground">
                  Connect your SaaS stack and get a complete usage report in minutes. 
                  See exactly which seats are idle and which features go unused.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-border/50 bg-card transition-all hover:border-accent/50 hover:bg-card/80">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Smart Downgrade Recommendations</h3>
                <p className="text-muted-foreground">
                  AI analyzes your actual usage patterns and suggests safe plan changes. 
                  No guesswork, just data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-border/50 bg-card transition-all hover:border-accent/50 hover:bg-card/80">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Zero-Loss Data Migration</h3>
                <p className="text-muted-foreground">
                  Execute plan changes with confidence. Our smart migration ensures 
                  all your data and history transfers safely during downgrades.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-border/50 bg-card transition-all hover:border-accent/50 hover:bg-card/80">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Ongoing Hygiene Alerts</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring catches new waste as it happens. Get alerts 
                  when usage drops or when cheaper alternatives emerge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="border-t border-border/50 bg-secondary/30 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Start free, upgrade when you need more power.</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-8">
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">Free</div>
                <div className="mb-2 text-4xl font-bold">$0</div>
                <div className="mb-6 text-muted-foreground">Forever free for basic audits</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Connect up to 5 SaaS apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Monthly usage audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Basic recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-accent/50 bg-card">
              <div className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Premium</div>
                <div className="mb-2 text-4xl font-bold">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <div className="mb-6 text-muted-foreground">Full automation and insights</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Unlimited SaaS connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Real-time monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Auto-execute downgrades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Zero-loss data migration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-border/50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trusted by Cost-Conscious Teams</h2>
            <p className="text-muted-foreground">See what early beta users are saying about StackOptimizer.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-foreground">&ldquo;Saved $8k/year on forgotten tools - no more surprises on our credit card statements!&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">JM</div>
                  <div>
                    <div className="font-medium">Jamie Martinez</div>
                    <div className="text-sm text-muted-foreground">Founder, TechFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-foreground">&ldquo;We had 47 unused Notion seats. StackOptimizer found them in seconds and helped us downgrade safely.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">SK</div>
                  <div>
                    <div className="font-medium">Sarah Kim</div>
                    <div className="text-sm text-muted-foreground">Ops Lead, Scaleup Inc</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-foreground">&ldquo;As a freelancer, every dollar counts. This tool paid for itself in the first week.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium">AL</div>
                  <div>
                    <div className="font-medium">Alex Liu</div>
                    <div className="text-sm text-muted-foreground">Freelance Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="border-t border-border/50 bg-secondary/30 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get Early Access</h2>
            <p className="mb-8 text-muted-foreground">
              Join the waitlist to be among the first to optimize your SaaS stack 
              and start saving money automatically.
            </p>
            <WaitlistForm />
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
              <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
              <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            </div>
            <div className="text-sm text-muted-foreground">Coming Soon 2026</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
