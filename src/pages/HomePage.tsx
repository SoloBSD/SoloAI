import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Code,
  Facebook,
  Github,
  Linkedin,
  Menu,
  Twitter,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SoloAILogo } from "@/components/SoloAILogo";
const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <SoloAILogo className="h-8 w-8" />
            <span className="font-display text-2xl font-bold text-white">
              SoloAI
            </span>
          </a>
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900"
        >
          <div className="flex flex-col items-center space-y-4 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md py-2 text-center text-base font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-28">
    <div className="absolute inset-0 -z-10 bg-grid-white/[0.05]"></div>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          AI-Powered Solutions for Your{" "}
          <span className="text-primary">SOHO Business</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Unlock the power of AI with our flow automations and intelligent
          chatbots, designed specifically for Small Office/Home Office
          entrepreneurs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            Get Started for Free
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
const features = [
  {
    icon: Zap,
    title: "AI Flow Automations",
    description: "Automate repetitive tasks and streamline your workflows with our intelligent, no-code automation builder.",
  },
  {
    icon: Bot,
    title: "Intelligent Chatbots",
    description: "Engage customers 24/7 with smart, customizable chatbots that can handle queries, generate leads, and more.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Integrate our solutions seamlessly with your existing tools and platforms using our comprehensive APIs.",
  },
];
const Features = () => (
  <section id="features" className="py-20 md:py-28 bg-gray-900">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need to grow.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          SoloAI provides powerful tools to automate your business and enhance customer engagement, all in one place.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-primary hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individuals and small teams just getting started.",
    features: ["1 AI Flow", "1 Chatbot", "1,000 interactions/mo", "Basic support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing businesses that need more power and flexibility.",
    features: ["10 AI Flows", "5 Chatbots", "10,000 interactions/mo", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs and requirements.",
    features: ["Unlimited AI Flows", "Unlimited Chatbots", "Custom interactions", "Dedicated support"],
    popular: false,
  },
];
const Pricing = () => (
  <section id="pricing" className="py-20 md:py-28">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Simple, transparent pricing.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Choose the plan that's right for you. No hidden fees, ever.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <Card
              className={cn(
                "flex w-full flex-col border-gray-800 bg-gray-900/50 transition-all duration-300",
                plan.popular && "border-primary ring-2 ring-primary"
              )}
            >
              <CardHeader className="relative">
                {plan.popular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-2xl font-semibold text-white">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-400">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400">/ month</span>
                  )}
                </div>
                <ul className="flex-1 space-y-4 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn("mt-8 w-full")}
                  variant={plan.popular ? "default" : "secondary"}
                  size="lg"
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const Footer = () => (
  <footer id="contact" className="border-t border-gray-800 bg-gray-900 py-12">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-2">
            <SoloAILogo className="h-8 w-8" />
            <span className="font-display text-2xl font-bold text-white">
              SoloAI
            </span>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            AI-Powered Solutions for SOHO Businesses.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Github /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Product</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#features" className="text-sm text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#pricing" className="text-sm text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} SoloAI, Inc. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ at Cloudflare</p>
      </div>
    </div>
  </footer>
);
export function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}