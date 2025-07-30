import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { TextAnimate } from '@/components/magicui/text-animate'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function Features() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <div
              className={cn(
                'group rounded-full border border-[#101820]/40 bg-[#FFFBEB] text-sm text-[#101820] transition-all ease-in hover:cursor-pointer hover:bg-[#FFC62B]/85 dark:border-[#FFC62B]/10 dark:bg-[#152534] dark:hover:bg-[#1F3345]',
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-[#101820] hover:duration-300 dark:hover:text-[#FFC62B]">
                <span>Build your next big thing</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance tracking-tight text-[#101820]">
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
            className="mt-8 max-w-lg text-base font-medium md:text-xl lg:text-2xl"
          >
            Alpha helps you launch faster with stunning design and solid code
            all Web3 ready.
          </TextAnimate>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <InteractiveHoverButton>See pricing </InteractiveHoverButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
