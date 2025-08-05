import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'The Labs',
    href: '/the-labs',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading>Get started</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-[#101820] dark:text-[#FFFBEB] sm:text-5xl">
          Ready to dive in?
          <br />
          Start your free trial today.
        </p>
      </hgroup>
      <p className="text-sm/6text-[#101820]/50 mx-auto mt-6 max-w-xs dark:text-[#FFFBEB]/50">
        Get the cheat codes for selling and unlock your team&apos;s revenue
        potential.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="#">
          Get started
        </Button>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-[#FFFBEB] dark:bg-[#101820]" />
        <Container>
          <CallToAction />
          <div className="relative pb-16 text-center">
            <Link
              href="/"
              aria-label="go home"
              className="mx-auto block size-fit"
            >
              <Logo />
            </Link>

            <div className="my-8 flex flex-wrap justify-center gap-6 text-sm text-[#101820] dark:text-[#FFFBEB]">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground duration-150 hover:text-primary"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
            <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X/Twitter"
                className="block text-muted-foreground hover:text-primary"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  ></path>
                </svg>
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="block text-muted-foreground hover:text-primary"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                    color="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="block text-muted-foreground hover:text-primary"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  ></path>
                </svg>
              </Link>
            </div>
            <span className="block text-center text-sm text-[#101820] dark:text-[#FFFBEB]">
              &copy; {new Date().getFullYear()} Alpha Ideas Labs.
            </span>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
