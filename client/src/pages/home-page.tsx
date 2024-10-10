import { Crop, ImageIcon, Layers, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero image with various processed images"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Images with Ease
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Powerful image processing tools at your fingertips. Edit, enhance, and create stunning visuals in
                    seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    Get Started
                  </Button>
                  <Button
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Crop className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Crop & Resize</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily crop and resize your images to fit any dimension.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Layers className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Filters & Effects</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Apply a wide range of filters and effects to enhance your images.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Wand2 className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Auto-Enhance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  One-click solution to automatically improve image quality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <ImageIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold">Format Conversion</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Convert between various image formats with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Processing Your Images Today</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied users who have transformed their images with our powerful tools.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage;