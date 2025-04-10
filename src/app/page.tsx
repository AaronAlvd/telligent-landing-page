import Image from "next/image"
import Link from "next/link"

import { Mail } from "lucide-react"

import logo from "../../public/logo.png"
import image01 from "../../public/image-01.webp"
import image02 from "../../public/image-02.jpeg"
import image03 from "../../public/image-03.jpeg"
import image04 from "../../public/image-04.jpeg"
import image05 from "../../public/image-05.png"

export default function ComingSoonPage() {
  return (
    <>
    <head>
      <title>Telligent | Mental Health Blog for Wellness & Self-Care</title>
      <meta name="keywords" content="mental health, self-care, wellness, therapy, anxiety, depression, mindfulness, support" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph for Facebook */}
      <meta property="og:title" content="The Telligent Agency: Relatable and Resourceful" />
      <meta property="og:description" content="Explore everyday content, social discourse, and beneficial resources, made to benefit mental and behavioral health." />
      <meta property="og:image" content="/preview-image.jpg" />
      <meta property="og:url" content="https://telligent.agency" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Telligent | Mental Health Blog for Wellness & Self-Care" />
      <meta name="twitter:description" content="Explore trusted mental health resources, expert insights, and personal stories at Telligent." />
      <meta name="twitter:image" content="/preview-image.jpg" />
    </head>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <main className="flex-grow">

        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-700 font-medium rounded-full text-sm">
                Mental Health Resources
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-red-500">The Telligent Agency</span>: Relatable and Resourceful
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering minds through knowledge, connection, and compassionate resources.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#about"
                className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
              >
                Our Mission
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-16 h-1 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">

            <div className="mb-8 inline-block p-2 bg-red-100 rounded-full">
              <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Coming Soon</h2> */}

            <div className="flex justify-center mb-4">
              <Image src={logo} className="h-[70px] w-auto" alt="telligent logo"/>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We&apos;re building a new platform dedicated to mental health news, resources, and stories that matter.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                >
                  Notify Me
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">We&apos;sll notify you when we launch. No spam, we promise.</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Reliable Information</h4>
                <p className="text-gray-600">
                  Providing evidence-based mental health news and resources you can trust, helping you stay informed and supported on your journey to well-being.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Diverse Perspectives</h4>
                <p className="text-gray-600">
                  Sharing powerful stories from diverse voices and experiences, shedding light on mental health struggles, triumphs, and the path to healing.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Reducing Stigma</h4>
                <p className="text-gray-600">
                  Breaking down barriers and challenging misconceptions surrounding mental health, fostering understanding, acceptance, and support for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image src={image05} alt="News articles" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">In-depth Articles</h4>
                    <p className="text-white/80">Thoughtful coverage of mental health topics and breakthroughs</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={image04}
                  alt="Expert interviews"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Insights</h4>
                    <p className="text-white/80">Interviews and perspectives from mental health professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-700 font-medium rounded-full text-sm mb-4">
                Beta Access
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Limited Articles Available Now</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get early access to these featured articles in our beta version. More content will be available at our
                full launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={image01}
                    alt="Mindfulness Techniques"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 text-black">5 Mindfulness Techniques for Daily Anxiety</h4>
                  <p className="text-gray-600 text-sm mb-4">
                  Simple practices for managing anxiety and improving wellbeing include deep breathing, exercise, good sleep, mindfulness, and staying connected.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 15, 2023</span>
                    <Link href="/articles/mindfulness-techniques-for-daily-anxiety" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={image02}
                    alt="Workplace Mental Health"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 text-black">Creating a Mental Health-Friendly Workplace</h4>
                  <p className="text-gray-600 text-sm mb-4">
                  Employers can support mental health by promoting open communication, offering flexibility, providing resources, and fostering a supportive culture.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">June 22, 2023</span>
                    <Link href="/articles/workplace-mental-health" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={image03}
                    alt="Sleep and Mental Health"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 text-black">The Connection Between Sleep and Mental Health</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Research on how quality sleep boosts mental wellbeing, improving mood and reducing stress, plus tips for better rest like sticking to a sleep schedule and limiting screen time.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">July 3, 2023</span>
                    <Link href="/articles/sleep-and-mental-health" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-red-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">Have questions or want to collaborate? We&apos;sd love to hear from you.</p>
            <Link
              href="mailto:contact@mindfullnews.com"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </section>

      </main>
    </div>
    </>
  )
}
