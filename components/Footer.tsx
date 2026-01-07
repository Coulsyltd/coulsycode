import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'Increase Online Visibility', href: '/solutions/visibility' },
    { name: 'Generate More Leads', href: '/solutions/leads' },
    { name: 'Streamline Operations', href: '/solutions/operations' },
    { name: 'Scale Your Business', href: '/solutions/scale' },
  ],
  services: [
    { name: 'Custom Websites', href: '/services/websites' },
    { name: 'Web Applications', href: '/services/applications' },
    { name: 'Local SEO', href: '/services/seo' },
    { name: 'E-commerce', href: '/services/ecommerce' },
  ],
  capabilities: [
    { name: 'Overview', href: '/capabilities' },
    { name: 'Front-end', href: '/capabilities/front-end' },
    { name: 'Back-end', href: '/capabilities/back-end' },
    { name: 'Mobile-ready sites', href: '/capabilities/mobile' },
    { name: 'AI & Automation', href: '/capabilities/ai' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-white">
                Coulsy Code
              </Link>
            </div>
            <p className="text-sm leading-6 text-gray-400 max-w-xs">
              Solving business problems with clean web builds. I focus on work that brings in enquiries and helps you grow revenue.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:07544030486"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span className="font-semibold">Call:</span>
                <span>07544 030486</span>
              </a>
              <div>
                <a
                  href="mailto:info@coulsycode.co.uk"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span className="font-semibold">Email:</span>
                  <span>info@coulsycode.co.uk</span>
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/robert-coulson-20a60915/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions - Problem Solving Focus */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Capabilities */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Capabilities</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.capabilities.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="mt-10 md:mt-0 md:col-span-2">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Coulsy Code. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <Link href="/contact" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors duration-200">
                Ready to get more enquiries? <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

