import { Link } from "wouter";

export interface FeaturedBlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
}

interface FeaturedBlogCardProps {
  post: FeaturedBlogPost;
}

export default function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block" data-testid={`link-featured-${post.id}`}>
      <article 
        className="group cursor-pointer"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
          padding: "2.5rem 2rem"
        }}
        data-testid={`card-blog-${post.id}`}
      >
          <div className="mb-6 overflow-hidden" style={{ borderRadius: "8px", marginTop: "0.5rem" }}>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto"
              data-testid={`img-featured-${post.id}`}
            />
          </div>
          
          <div className="space-y-4">
            <h3
              className="font-serif text-3xl lg:text-4xl leading-tight"
              style={{ color: "#1E1E1E" }}
              data-testid={`text-featured-title-${post.id}`}
            >
              {post.title}
            </h3>

            <p
              className="font-sans leading-relaxed"
              style={{ color: "#1E1E1E" }}
              data-testid={`text-featured-excerpt-${post.id}`}
            >
              {post.excerpt}
            </p>

            <div className="pt-2">
              <span
                className="text-sm font-sans"
                style={{ color: "#A5672B" }}
              >
                Lees verder →
              </span>
            </div>
          </div>
      </article>
    </Link>
  );
}
