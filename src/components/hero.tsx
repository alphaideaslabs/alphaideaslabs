import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { TextAnimate } from '@/components/magicui/text-animate'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import Navbar from '@/components/navbar/navbar'

export default function Features() {
  return (
    <div id="hero" className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-32 pt-48 md:pb-48 md:pt-44 lg:pb-32 lg:pt-64">
          <h1 className="font-display text-balance tracking-tight text-[#101820] dark:text-[#FFFBEB]">
            <TypingAnimation className="text-[44px] font-medium md:text-7xl lg:text-9xl">
              Build once. Impress always.
            </TypingAnimation>
          </h1>

          <TextAnimate
            duration={2.5}
            as="p"
            animation="blurIn"
            by="character"
            once
            className="mt-8 max-w-lg text-base font-medium text-[#101820]/70 dark:text-[#FFFBEB]/70 md:text-xl lg:text-2xl"
          >
            Alpha helps you launch faster with stunning design and solid code
            all Web3 ready.
          </TextAnimate>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button>Get started</Button>
            <InteractiveHoverButton>See pricing </InteractiveHoverButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
