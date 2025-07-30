import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import Services from '@/components/services'

export const metadata: Metadata = {
  description: 'Alpha Ideas Labs helps you build your next big thing.',
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
          description="Alpha Ideas Labs helps startups and brands turn complex ideas into clear, usable products from UI flows to smart branding. We start with what matters : understanding your users and your business goals."
          graphic={
            <div className="h-80 bg-[url(https://res.cloudinary.com/db7cfcxxh/image/upload/v1753757520/ui-ux-2.webp)] bg-cover bg-[left_0px_top_-12px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Outdesign your competitors"
          description="In crowded markets, clarity wins. We build strong brand visuals and seamless UX that help you stand out and stay memorable."
          graphic={
            <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/db7cfcxxh/image/upload/v1753757971/ui-ux-3.webp)] bg-cover bg-[left_0px_top_0px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Move fast, build faster"
          description="We work like a startup no fluff, just focus. Our agile process helps founders launch MVPs, iterate fast, and scale with confidence."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'A']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Craft"
          title="Designs that feel premium"
          description="Every logo, layout, and line of code is crafted to be simple, elegant, and functional. We make design that works, not just looks nice."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Reach"
          title="Launch global ready experiences"
          description="From Web3 dApps to responsive social media campaigns, we help digital products reach their audience across platforms and borders."
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
        {/* <DarkBentoSection /> */}
        <FAQ />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
