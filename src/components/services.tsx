'use client'

import React, { type ReactElement } from 'react'

import { BorderBeam } from '@/components/magicui/border-beam'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CodeXml, FileImage, Frame, SplinePointer } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Features() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  const images = {
    'item-1': {
      src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753420966/ui-ux_gu50tv.webp',
      alt: 'Database visualization',
    },
    'item-2': {
      src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753422967/web3_b1jqou.webp',
      alt: 'Security authentication',
    },
    'item-3': {
      src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753423143/social-media_u9miey.webp',
      alt: 'Identity management',
    },
    'item-4': {
      src: 'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753423206/logo_leuay8.webp',
      alt: 'Analytics dashboard',
    },
  }

  const features: {
    key: ImageKey
    title: string
    description: string
    icon: ReactElement
  }[] = [
    {
      key: 'item-1',
      title: 'UI/UX Design',
      description:
        'UI/UX design is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product.',
      icon: <SplinePointer className="size-4" />,
    },
    {
      key: 'item-2',
      title: 'Web3 Development',
      description:
        'Web3 development refers to the creation of decentralized applications (dApps) that run on blockchain technology, enabling peer-to-peer interactions without intermediaries.',
      icon: <CodeXml className="size-4" />,
    },
    {
      key: 'item-3',
      title: 'Social Media Design',
      description:
        'Social media design is the process of creating visual content for social media platforms to engage users and promote a brand or product.',
      icon: <FileImage className="size-4" />,
    },
    {
      key: 'item-4',
      title: 'Logo Design',
      description:
        'Logo design is the process of creating a unique and memorable visual symbol that represents a brand or company, often incorporating elements like typography, color, and imagery.',
      icon: <Frame className="size-4" />,
    },
  ]

  return (
    <section className="px-4 py-12 md:px-6 md:py-16 lg:px-0 lg:py-20">
      <div className="bg-linear-to-b absolute inset-0 -z-10 dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))] sm:inset-6 sm:rounded-b-3xl"></div>

      <div className="mx-auto max-w-2xl space-y-8 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)] md:space-y-14 lg:max-w-7xl lg:space-y-20">
        <div className="relative z-10 max-w-2xl space-y-4 text-left md:space-y-6">
          <h2 className="text-balance text-3xl font-semibold text-[#101820] md:text-4xl lg:text-6xl">
            Services Alpa Ideas Labs Offers
          </h2>
          <p className="text-base text-[#101820]/70 md:text-lg">
            Alpha Ideas Labs provides a range of services to help you establish
            a strong online presence and achieve your business goals.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            {features.map((feature) => (
              <AccordionItem key={feature.key} value={feature.key}>
                <AccordionTrigger>
                  {/* <div className="flex items-center gap-3 text-lg font-semibold text-[#101820] md:text-xl lg:text-2xl">
                    {React.cloneElement(feature.icon, {
                      className: 'w-5 h-5 text-[#FFC62B]',
                    })}
                    <span>{feature.title}</span>
                  </div> */}
                  <div className="flex items-center gap-3 text-lg font-semibold text-[#101820] md:text-xl lg:text-2xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFBEB]">
                      {React.cloneElement(feature.icon, {
                        className: 'w-5 h-5 text-[#FFC62B]',
                      })}
                    </div>
                    <span>{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-light text-[#101820]/70 md:text-base">
                    {feature.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative flex overflow-hidden rounded-3xl border bg-background p-2">
            <div className="w-15 border-yellow-200bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] absolute inset-0 right-0 ml-auto border-l"></div>
            <div className="aspect-76/59 relative w-full rounded-2xl bg-background">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].src}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
