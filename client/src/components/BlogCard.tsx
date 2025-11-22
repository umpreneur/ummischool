import { Link } from "wouter";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} data-testid={`link-blog-${post.id}`}>
      <article className="group cursor-pointer">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans">
            <span data-testid={`text-category-${post.id}`}>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
            <time dateTime={post.date} data-testid={`text-date-${post.id}`}>
              {new Date(post.date).toLocaleDateString("nl-NL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <h3
            className="font-serif text-2xl lg:text-3xl text-foreground leading-tight group-hover:text-muted-foreground transition-colors"
            data-testid={`text-title-${post.id}`}
          >
            {post.title}
          </h3>

          <p
            className="text-muted-foreground font-sans leading-relaxed"
            data-testid={`text-excerpt-${post.id}`}
          >
            {post.excerpt}
          </p>

          <div className="pt-2">
            <span className="text-sm font-sans text-foreground group-hover:underline">
              Lees verder →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
