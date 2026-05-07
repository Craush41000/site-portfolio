import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Works } from "@/components/works"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTopButton } from "@/components/scroll-to-top"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </SmoothScroll>
  )
}
