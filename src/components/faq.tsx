'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: string
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      icon: 'clock',
      question: 'What are your working hours?',
      answer:
        'We operate Monday to Friday from 08:00 to 18:00 (GMT+7, Jakarta time). We’re always reachable via email, and we’ll respond as quickly as possible — even on weekends.',
    },
    {
      id: 'item-2',
      icon: 'credit-card',
      question: 'How do payments work?',
      answer:
        'We usually follow a 50/50 payment structure — 50% upfront, 50% after project completion. For long-term projects or retainers, we provide monthly billing with transparent milestones.',
    },
    {
      id: 'item-3',
      icon: 'zap',
      question: 'What’s your typical turnaround time?',
      answer:
        'Most logos take 3–5 business days, landing pages in 5–7 days, and full MVP UI in 1–2 weeks. Development timelines vary, but we always aim to move fast and keep you in the loop.',
    },
    {
      id: 'item-4',
      icon: 'globe',
      question: 'Do you work with international clients?',
      answer:
        'Absolutely. We collaborate with teams around the world — mainly from the US, Europe, Singapore, and Indonesia. We’re flexible with time zones and communicate clearly in English.',
    },
    {
      id: 'item-5',
      icon: 'mail',
      question: 'How do I get started?',
      answer:
        "Simple! Just contact us via the form or email. We'll schedule a short discovery call to understand your needs, then send you a proposal with timeline, scope, and pricing.",
    },
  ]

  return (
    <section className="bg-muted px-4 py-12 dark:bg-background md:px-6 md:py-16 lg:px-0 lg:py-20">
      <div className="mx-auto max-w-2xl space-y-8 md:space-y-14 lg:max-w-7xl lg:space-y-20">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-balance text-3xl font-semibold text-[#101820] dark:text-[#FFFBEB] md:text-4xl lg:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm text-[#101820]/70 dark:text-[#FFFBEB]/70 md:text-sm lg:text-base">
                Can&apos;t find what you&apos;re looking for? Contact our{' '}
                <Link
                  href="#"
                  className="text-sm font-medium text-[#FFC62B] hover:underline md:text-sm lg:text-base"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="shadow-xs rounded-lg border bg-background px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4 text-[#FFC62B]"
                        />
                      </div>
                      <span className="text-balance text-lg font-semibold text-[#101820] dark:text-[#FFFBEB]">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base text-[#101820]/70 dark:text-[#FFFBEB]/70">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
