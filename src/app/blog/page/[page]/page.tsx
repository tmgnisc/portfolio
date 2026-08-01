import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { paginate } from "@/lib/pagination";
import { BlogList } from "@/components/section/blog-list";

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog — Page ${page}`,
    description: "Thoughts on software development, life, and more.",
    alternates: {
      canonical: `/blog/page/${page}`,
    },
  };
}

export default async function BlogPagePagination({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = parseInt(pageParam, 10);
  const sortedPosts = getSortedPosts();
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);

  if (!Number.isInteger(page) || page < 2 || page > totalPages) {
    notFound();
  }

  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page,
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

      <BlogList paginatedPosts={paginatedPosts} pagination={pagination} />
    </section>
  );
}
