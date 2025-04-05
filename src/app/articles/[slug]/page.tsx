import Image from "next/image"
import Link from "next/link"

import { GetServerSideProps } from 'next';

import image01 from "../../../../public/image-01.webp"
import image02 from "../../../../public/image-02.jpeg"
import image03 from "../../../../public/image-03.jpeg"

// import { ArrowLeft } from "lucide-react"

// Custom component to parse and render the article content
const ArticleContent = ({ content }: { content: string }) => {
  // This function will parse the string content into structured JSX
  const parseContent = (content: string) => {
    // Split the content by HTML tags and render each part accordingly
    const lines = content.trim().split("\n")

    return lines.map((line, index) => {
      const trimmedLine = line.trim()

      // Handle paragraphs
      if (trimmedLine.startsWith("<p>") && trimmedLine.endsWith("</p>")) {
        return (
          <p key={index} className="mb-6">
            {trimmedLine.slice(3, -4)}
          </p>
        )
      }

      // Handle headings (h2)
      if (trimmedLine.startsWith("<h2>") && trimmedLine.endsWith("</h2>")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {trimmedLine.slice(4, -5)}
          </h2>
        )
      }

      // Handle subheadings (h3)
      if (trimmedLine.startsWith("<h3>") && trimmedLine.endsWith("</h3>")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3">
            {trimmedLine.slice(4, -5)}
          </h3>
        )
      }

      // Handle unordered lists
      if (trimmedLine === "<ul>") return null
      if (trimmedLine === "</ul>") return null

      // Handle list items
      if (trimmedLine.startsWith("<li>") && trimmedLine.endsWith("</li>")) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></span>
            <span>{trimmedLine.slice(4, -5)}</span>
          </div>
        )
      }

      // Default case - if no specific tag is matched
      return (
        <p key={index} className="mb-6">
          {trimmedLine}
        </p>
      )
    })
  }

  return <div className="article-content">{parseContent(content)}</div>
}

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
    image: image01,
    content: `<p>Anxiety is a common experience that affects millions of people worldwide. While occasional anxiety is a normal part of life, persistent anxiety can interfere with daily activities and overall wellbeing. Mindfulness—the practice of being present and fully engaged with whatever we're doing—offers powerful tools to manage anxiety symptoms.</p>
      
<h2>1. Mindful Breathing</h2>
<p>One of the simplest yet most effective mindfulness techniques is focused breathing. When anxiety strikes, try this:</p>
<ul>
<li>Find a comfortable position and close your eyes</li>
<li>Breathe in slowly through your nose for a count of four</li>
<li>Hold your breath for a count of two</li>
<li>Exhale slowly through your mouth for a count of six</li>
<li>Repeat for 5-10 minutes</li>
</ul>
<p>This technique activates your parasympathetic nervous system, which helps counteract the fight-or-flight response associated with anxiety.</p>
      
<h2>2. Body Scan Meditation</h2>
<p>A body scan meditation involves paying attention to parts of your body and bodily sensations in a gradual sequence, typically from your feet to your head.</p>
<p>Start by bringing awareness to your feet, noticing any sensations without judgment. Gradually move your attention up through your body—ankles, calves, knees, and so on—until you reach the top of your head. This practice helps ground you in the present moment and release physical tension you may not realize you're holding.</p>
      
<h2>3. The 5-4-3-2-1 Grounding Technique</h2>
<p>When anxiety makes you feel disconnected from reality, this sensory awareness exercise can help bring you back to the present:</p>
<ul>
<li>Acknowledge 5 things you can see</li>
<li>Acknowledge 4 things you can touch</li>
<li>Acknowledge 3 things you can hear</li>
<li>Acknowledge 2 things you can smell</li>
<li>Acknowledge 1 thing you can taste</li>
</ul>
<p>This technique engages all five senses to anchor you in the here and now, making it particularly effective during anxiety attacks.</p>
      
<h2>4. Mindful Walking</h2>
<p>Mindful walking combines physical activity with mindfulness. As you walk, pay close attention to the lifting and falling of your feet, the rhythm of your breath, and the feeling of air on your skin. Notice the sights, sounds, and smells around you without getting caught up in them.</p>
<p>Even a short 10-minute mindful walk can significantly reduce anxiety levels and improve your mood.</p>
      
<h2>5. Thought Labeling</h2>
<p>When anxious thoughts arise, try labeling them without judgment. For example, if you're worried about an upcoming presentation, simply note "worrying thought" and let it pass. This creates distance between you and your thoughts, helping you realize that thoughts are just mental events, not facts.</p>
      
<p>Consistency is key with mindfulness practices. Even a few minutes daily can lead to significant improvements in anxiety management over time. Remember that mindfulness is a skill that develops with practice, so be patient with yourself as you incorporate these techniques into your daily routine.</p>`,
    tags: ["anxiety", "mindfulness", "mental health", "wellness", "self-care"],
    relatedArticles: [
      {
        slug: "workplace-mental-health",
        title: "Creating a Mental Health-Friendly Workplace",
        excerpt: "How employers can foster environments that support employee mental health and wellbeing.",
        image: "/placeholder.svg?height=300&width=500&text=Workplace+Mental+Health",
      },
      {
        slug: "sleep-and-mental-health",
        title: "The Connection Between Sleep and Mental Health",
        excerpt: "Research findings on how quality sleep impacts your mental wellbeing and tips for better rest.",
        image: "/placeholder.svg?height=300&width=500&text=Sleep+and+Mental+Health",
      },
    ],
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
    image: image02,
    content: `
      <p>The modern workplace has a significant impact on mental health. With many adults spending a third of their lives at work, creating environments that support mental wellbeing isn't just compassionate—it's good business.</p>
      
      <h2>Why Workplace Mental Health Matters</h2>
      <p>Poor mental health costs employers billions annually through absenteeism, decreased productivity, and increased healthcare costs. Beyond financial implications, organizations have an ethical responsibility to ensure work doesn't harm employees' mental health.</p>
      
      <h2>Key Elements of a Mental Health-Friendly Workplace</h2>
      
      <h3>1. Leadership Commitment</h3>
      <p>Mental health initiatives must start at the top. When leaders openly discuss mental health and demonstrate self-care, it reduces stigma and signals that wellbeing is a priority.</p>
      
      <h3>2. Flexible Work Arrangements</h3>
      <p>Flexibility in when and where employees work can significantly reduce stress. Options like remote work, flexible hours, and compressed workweeks help employees balance work with personal responsibilities.</p>
      
      <h3>3. Manageable Workloads</h3>
      <p>Chronic overwork is a major contributor to burnout. Regular workload assessments and clear prioritization help ensure expectations are reasonable and sustainable.</p>
      
      <h3>4. Mental Health Resources</h3>
      <p>Comprehensive Employee Assistance Programs (EAPs), health insurance with robust mental health coverage, and access to digital mental health tools provide crucial support for employees experiencing difficulties.</p>
      
      <h3>5. Supportive Management Practices</h3>
      <p>Managers trained to recognize signs of distress, have supportive conversations, and make appropriate accommodations can make a tremendous difference in employees' wellbeing.</p>
      
      <h2>Creating a Culture of Psychological Safety</h2>
      <p>Psychological safety—the belief that one won't be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes—is foundational to mental health at work. In psychologically safe environments, employees feel comfortable discussing mental health challenges without fear of judgment or career repercussions.</p>
      
      <h2>Measuring Success</h2>
      <p>Organizations should regularly assess the effectiveness of mental health initiatives through:</p>
      <ul>
        <li>Anonymous employee surveys</li>
        <li>Utilization rates of mental health resources</li>
        <li>Absenteeism and presenteeism metrics</li>
        <li>Turnover rates</li>
        <li>Return on investment analyses</li>
      </ul>
      
      <p>Creating a mental health-friendly workplace is an ongoing journey, not a destination. By making mental wellbeing a strategic priority and continuously evolving approaches based on employee feedback and emerging research, organizations can create environments where both people and business thrive.</p>
    `,
    tags: ["workplace", "mental health", "leadership", "employee wellness", "organizational psychology"],
    relatedArticles: [
      {
        slug: "mindfulness-techniques-for-daily-anxiety",
        title: "5 Mindfulness Techniques for Daily Anxiety",
        excerpt:
          "Simple practices you can incorporate into your routine to manage anxiety and improve mental wellbeing.",
        image: "/placeholder.svg?height=300&width=500&text=Mindfulness+Techniques",
      },
      {
        slug: "sleep-and-mental-health",
        title: "The Connection Between Sleep and Mental Health",
        excerpt: "Research findings on how quality sleep impacts your mental wellbeing and tips for better rest.",
        image: "/placeholder.svg?height=300&width=500&text=Sleep+and+Mental+Health",
      },
    ],
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
    image: image03,
    content: `<p>The relationship between sleep and mental health is complex and bidirectional. Poor sleep can contribute to the development of mental health issues, and existing mental health conditions can make it harder to sleep well.</p>
      
<h2>How Sleep Affects Mental Health</h2>
<p>During sleep, your brain processes emotional information and consolidates memories. Without adequate sleep, your brain's ability to regulate emotions becomes compromised. Research shows that even one night of poor sleep can:</p>
<ul>
<li>Increase negative emotional responses to stressors</li>
<li>Decrease positive emotional responses</li>
<li>Impair emotional recognition in others</li>
<li>Reduce impulse control</li>
</ul>
<p>Chronic sleep problems are strongly linked to anxiety disorders, depression, bipolar disorder, and ADHD. In fact, people with insomnia are ten times more likely to develop depression than those who sleep well.</p>
      
<h2>The Science Behind Sleep and Mental Health</h2>
<p>During sleep, particularly deep sleep and REM sleep, your brain processes emotional experiences and prunes unnecessary neural connections while strengthening important ones. This process is crucial for emotional regulation and cognitive functioning.</p>
<p>Sleep disruption interferes with neurotransmitter and stress hormone regulation. For example, poor sleep elevates cortisol levels and disrupts the balance of serotonin, dopamine, and other neurotransmitters involved in mood regulation.</p>
      
<h2>Mental Health Conditions and Sleep</h2>
<p>Different mental health conditions affect sleep in various ways:</p>
      
<h3>Depression</h3>
<p>Depression often causes early morning awakening, difficulty falling asleep, and non-restorative sleep. Approximately 75% of people with depression experience insomnia symptoms.</p>
      
<h3>Anxiety Disorders</h3>
<p>Anxiety typically causes difficulty falling asleep due to racing thoughts and worry. People with anxiety may also experience more nightmares and middle-of-the-night awakenings.</p>
      
<h3>Bipolar Disorder</h3>
<p>During manic episodes, people may feel little need for sleep. During depressive episodes, they may experience hypersomnia (excessive sleep) or insomnia.</p>
      
<h2>Improving Sleep for Better Mental Health</h2>
<p>Evidence-based strategies for better sleep include:</p>
      
<h3>Sleep Hygiene</h3>
<ul>
<li>Maintain a consistent sleep schedule</li>
<li>Create a restful environment (dark, quiet, cool)</li>
<li>Limit screen time before bed</li>
<li>Avoid caffeine, alcohol, and large meals before bedtime</li>
</ul>
      
<h3>Cognitive Behavioral Therapy for Insomnia (CBT-I)</h3>
<p>CBT-I is considered the gold standard treatment for chronic insomnia and includes techniques like stimulus control, sleep restriction, and cognitive restructuring of unhelpful beliefs about sleep.</p>
      
<h3>Mindfulness Practices</h3>
<p>Mindfulness meditation has been shown to improve sleep quality by reducing rumination and worry. Even brief practices before bed can help prepare the mind for sleep.</p>
      
<p>Prioritizing sleep is one of the most effective ways to protect and improve your mental health. If you're experiencing persistent sleep problems, consider speaking with a healthcare provider, as addressing sleep issues can significantly improve mental health outcomes.</p>`,
    tags: ["sleep", "mental health", "research", "insomnia", "neuroscience"],
    relatedArticles: [
      {
        slug: "mindfulness-techniques-for-daily-anxiety",
        title: "5 Mindfulness Techniques for Daily Anxiety",
        excerpt:
          "Simple practices you can incorporate into your routine to manage anxiety and improve mental wellbeing.",
        image: "/placeholder.svg?height=300&width=500&text=Mindfulness+Techniques",
      },
      {
        slug: "workplace-mental-health",
        title: "Creating a Mental Health-Friendly Workplace",
        excerpt: "How employers can foster environments that support employee mental health and wellbeing.",
        image: "/placeholder.svg?height=300&width=500&text=Workplace+Mental+Health",
      },
    ],
  },
]

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (context) => {
  const { slug } = context.params as { slug: string };  // Ensure params are correctly typed

  return {
    props: {
      params: {
        slug,
      },
    },
  };
};

export default function ArticlePage({ params }: ArticlePageProps) {
  // Find the article that matches the slug
  const article = articles.find((article) => article.slug === params.slug)

  // If no article is found, you might want to handle this case
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="mb-6">The article you&apos;sre looking for doesn&apos;st exist or has been moved.</p>
          <Link href="/" className="text-red-600 hover:text-red-800 font-medium">
            Return to homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-red-50 to-white">
      <main className="flex-grow">
        {/* Back button
        <div className="mx-auto px-4 sm:px-6 pt-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div> */}

        {/* Article header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
            <span className="text-sm text-gray-500">{article.category}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">{article.title}</h1>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">{article.author.name}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.author.role}</span>
                <span className="mx-2">•</span>
                <span>{article.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="prose prose-lg prose-red max-w-none">
            <ArticleContent content={article.content} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/tags/${tag}`}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Feedback section (since it's beta) */}
          <div className="mt-12 p-6 bg-red-50 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Share Your Feedback</h3>
            <p className="text-gray-600 mb-4">
              This article is part of our beta release. We&apos;sd love to hear your thoughts to help us improve.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                  Your feedback
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="What did you think about this article?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Related articles */}
        <div className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {article.relatedArticles.map((relatedArticle, index) => (
                <Link key={index} href={`/articles/${relatedArticle.slug}`} className="group">
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BETA</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{relatedArticle.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


