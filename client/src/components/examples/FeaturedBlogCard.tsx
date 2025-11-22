import FeaturedBlogCard from "../FeaturedBlogCard";
import imageUrl from "@assets/generated_images/Notebook_on_wooden_table_109bb5b3.png";

export default function FeaturedBlogCardExample() {
  const post = {
    id: "1",
    title: "Onze eerste maanden thuisonderwijs",
    excerpt: "Een eerlijk verhaal over de eerste stappen, de twijfels, en de kleine overwinningen die ons pad kenmerken.",
    slug: "onze-eerste-maanden",
    imageUrl: imageUrl,
  };

  return (
    <div className="p-8 max-w-3xl">
      <FeaturedBlogCard post={post} />
    </div>
  );
}
