import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or CMS
const articles = [
  {
    slug: "mindfulness-techniques-for-daily-anxiety",
    title: "5 Mindfulness Techniques for Daily Anxiety",
    excerpt: "Simple practices you can incorporate into your routine to manage anxiety and improve mental wellbeing.",
    publishedAt: "June 15, 2023",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Clinical Psychologist",
      avatar: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    category: "Wellness",
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Mindfulness+Techniques",
  },
  {
    slug: "workplace-mental-health",
    title: "Creating a Mental Health-Friendly Workplace",
    excerpt: "How employers can foster environments that support employee mental health and wellbeing.",
    publishedAt: "June 22, 2023",
    author: {
      name: "Michael Chen",
      role: "Organizational Psychologist",
      avatar: "/placeholder.svg?height=100&width=100&text=MC",
    },
    category: "Workplace",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Workplace+Mental+Health",
  },
  {
    slug: "sleep-and-mental-health",
    title: "The Connection Between Sleep and Mental Health",
    excerpt: "Research findings on how quality sleep impacts your mental wellbeing and tips for better rest.",
    publishedAt: "July 3, 2023",
    author: {
      name: "Dr. James Rodriguez",
      role: "Neuropsychologist",
      avatar: "/placeholder.svg?height=100&width=100&text=JR",
    },
    category: "Research",
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200&text=Sleep+and+Mental+Health",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <main className="flex-grow">
        {/* Articles list */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link key={index} href={`/articles/${article.slug}`} className="group">
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs text-gray-500">{article.category}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h2 className="font-bold text-xl mb-3 group-hover:text-red-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={article.author.avatar || "/placeholder.svg"}
                            alt={article.author.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{article.author.name}</p>
                          <p className="text-xs text-gray-500">{article.publishedAt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Beta signup */}
        <div className="bg-red-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Join Our Beta Program</h2>
            <p className="text-gray-600 mb-8">
              Get early access to all our articles and provide valuable feedback to help shape the future of
              MindfulNews.
            </p>
            <form className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Request Access
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              Limited spots available. We'll notify you when you're granted access.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

