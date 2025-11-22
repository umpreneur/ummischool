import BlogCard from "../BlogCard";

export default function BlogCardExample() {
  const post = {
    id: "1",
    title: "Onze eerste maanden thuisonderwijs",
    excerpt: "Een eerlijk verhaal over de eerste stappen, de twijfels, en de kleine overwinningen die ons pad kenmerken.",
    category: "Ervaringen",
    date: "2024-10-15",
    slug: "onze-eerste-maanden",
  };

  return (
    <div className="p-8 max-w-2xl">
      <BlogCard post={post} />
    </div>
  );
}
