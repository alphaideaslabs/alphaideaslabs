import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { TextAnimate } from '@/components/magicui/text-animate'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import Services from '@/components/services'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export const metadata: Metadata = {
  description: 'Alpha Ideas Labs helps you build your next big thing.',
}

function Hero() {
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

function Portofolio() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-14">
        <h2 className="max-w-3xl text-balance text-3xl font-semibold text-[#101820] md:text-4xl lg:text-6xl">
          Work that speaks for itself.
        </h2>
        <p className="mt-6 max-w-3xl text-base text-[#101820]/70 md:text-lg">
          Explore how we help founders and brands turn ideas into stunning
          digital experiencesfrom bold logos to Web3-ready products.
        </p>
        <Screenshot
          width={1504}
          height={1152}
          src="https://res.cloudinary.com/db7cfcxxh/image/upload/v1753530197/web3-ui_b0maip.webp"
          className="mt-16 h-auto w-full"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <p className="mt-2 max-w-3xl text-base text-[#101820]/70 md:text-lg">
        Every project below is crafted with intention whether it’s a logo that
        defines a brand, a UI that guides a user, or a landing page that
        converts. We partner with startups and digitalfirst companies to bring
        ideas to life with clean design and strong code.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <Services />
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <Portofolio />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
