import Link from 'next/link'

const members = [
  {
    name: 'Muff1',
    role: 'Co-Founder',
    avatar:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753776603/muff1.jpg',
    link: '#',
  },
  {
    name: 'Daffkz',
    role: 'Co-Founder',
    avatar:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753778373/daffkz.jpg',
    link: '#',
  },
  {
    name: 'Filz',
    role: 'Co-Founder',
    avatar:
      'https://res.cloudinary.com/db7cfcxxh/image/upload/v1753778927/filz.jpg',
    link: '#',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-gray-50 px-4 py-12 dark:bg-transparent md:px-6 md:py-16 lg:px-0 lg:py-20">
      <div className="mx-auto max-w-2xl space-y-8 border-t md:space-y-14 lg:max-w-7xl lg:space-y-20">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              We’re a small team of specialists not generalists with deep
              expertise in design, development, and growth.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                  <div className="flex justify-between">
                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                      {member.name}
                    </h3>
                    <span className="text-xs">_0{index + 1}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="inline-block translate-y-6 text-sm text-muted-foreground opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {member.role}
                    </span>
                    <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {' '}
                      Linktree
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
