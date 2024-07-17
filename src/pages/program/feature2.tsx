import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Group Sessions',
    description:
      'Every week, we will meet for multiple sessions. Where we go over the basis, the industry, live mixing, Q&As and more',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Ressources',
    description:
      'Multitracks, plugin presets and more. You have access to aA-lister sessions, starting-point presets and even my mixing template.',
    icon: LockClosedIcon,
  },
  {
    name: 'Guest Sessions',
    description:
      'Bi-Weekly extra session with guests. I bring a variety of my partners to help you understand the differnet relationship in the industry and get different perspectives.',
    icon: ArrowPathIcon,
  },
  {
    name: '1-on-1 Sessions',
    description:
      'This is your time to ask me anything. It s all about your growth and your needs. We can go over your mixes, your goals, co-mix a song together, and more.',
    icon: FingerPrintIcon,
  },
]

export default function Feeature2() {
  return (
    <div className="bg-white py-24 sm:py-32" id='info'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Better Sounding = Better Audience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to get better mixes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything here, is from my personal experience, my work, and my mentors. <br />I am not a magician, I&apos;m just a guy who loves to mix, has poured years of my life into this craft, and has made a career out of it. <br />I learned so much from my mentors, and I want to share with you this whole experience. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
