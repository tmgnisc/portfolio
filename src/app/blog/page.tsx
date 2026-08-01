import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { paginate } from "@/lib/pagination";
import { BlogList } from "@/components/section/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: 1,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Blog <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">{sortedPosts.length} posts</span></h1>
        <p className="text-sm text-muted-foreground mb-8">
          My thoughts on software development, life, and more.
        </p>
      </BlurFade>

      {paginatedPosts.length > 0 ? (
        <BlogList paginatedPosts={paginatedPosts} pagination={pagination} />
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
