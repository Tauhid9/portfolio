import { blogPosts } from '@/data/blog'
import { BlogCard } from '@/components/features/blog-card'

export function Blog() {
  const latestPosts = blogPosts.slice(0, 6)

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
