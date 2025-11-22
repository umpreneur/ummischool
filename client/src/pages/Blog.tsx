import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedBlogCard, { type FeaturedBlogPost } from "@/components/FeaturedBlogCard";
import image1 from "@assets/stock_images/peaceful_morning_lig_eaf05b94.jpg";
import image2 from "@assets/stock_images/open_notebook_calend_87f74880.jpg";

const featuredPosts: FeaturedBlogPost[] = [
  {
    id: "1",
    title: "Jouw Pad, Niet dat van de Massa",
    excerpt: "In deze tijd praat iedereen. Iedereen adviseert, bekritiseert, vergelijkt en vult in. Soms lijkt het alsof meningen luider zijn geworden dan wijsheid. En precies in zo'n wereld is het gemakkelijk om te twijfelen aan een keuze die niet mainstream is, zoals thuisonderwijs.",
    slug: "jouw-pad-niet-dat-van-de-massa",
    imageUrl: image1,
  },
  {
    id: "2",
    title: "Dagstart",
    excerpt: "Een dagstart is een kort en rustig moment waarop je samen de dag opent. Het is een bewust begin van de ochtend: eerst verbinding, daarna duidelijkheid over wat er komt.",
    slug: "dagstart",
    imageUrl: image2,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <header className="mb-12 text-center">
            <h1
              className="font-serif leading-tight mb-4"
              style={{ 
                color: "#1E1E1E",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400
              }}
              data-testid="text-page-title"
            >
              Blog
            </h1>
            <p
              className="font-serif text-xl italic"
              style={{ color: "#5A4A42" }}
            >
              wij leren thuis
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {featuredPosts.map((post) => (
                <FeaturedBlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
