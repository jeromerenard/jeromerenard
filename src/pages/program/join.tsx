import Image from "next/image";
import JrNeve from "../../../public/JeromeRenardNeve.jpeg";

const links = [
    { name: 'My work', href: '/' },
    { name: 'Contact me', href: '/contact' },
    { name: 'DM me', href: 'https://www.linkedin.com/in/renardjerome/', target: '_blank' },
  ]
  const stats = [
    { name: 'Streams', value: '+250M' },
    { name: 'Songs Mixed', value: '+300' },
    { name: 'past Mentee', value: '+30' },
    { name: 'Feedback', value: 'Unlimited' },
  ]
  
  export default function Join() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">

        <Image src={JrNeve} alt="Jerome Renard" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-black opacity-5"  width={800} height={1274}/>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Thank you!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Any questions? Feel free to DM me or contact me via email <a href="mailto:info@jerome-renard.com">info@jerome-renard.com</a>
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  