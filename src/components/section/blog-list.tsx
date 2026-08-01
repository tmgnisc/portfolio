import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PaginationResult } from "@/lib/pagination";
import type { allPosts } from "content-collections";

const BLUR_FADE_DELAY = 0.04;

type Post = (typeof allPosts)[number];

export function BlogList({
  paginatedPosts,
  pagination,
}: {
  paginatedPosts: Post[];
  pagination: PaginationResult<Post>["pagination"];
}) {
  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-5">
          {paginatedPosts.map((post, id) => {
            const slug = post._meta.path.replace(/\.mdx$/, "");
            const indexNumber = (pagination.page - 1) * pagination.pageSize + id + 1;
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                <Link
                  className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={`/blog/${slug}`}
                >
                  <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                    {String(indexNumber).padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-y-2 flex-1">
                    <p className="tracking-tight text-lg font-medium">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <ChevronRight
                          className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </BlurFade>

      {pagination.totalPages > 1 && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex gap-3 flex-row items-center justify-between mt-8">
            <div className="text-sm text-muted-foreground">
              Page {pagination.page} of {pagination.totalPages}
            </div>
            <div className="flex gap-2 sm:justify-end">
              {pagination.hasPreviousPage ? (
                <Link
                  href={pagination.page - 1 === 1 ? "/blog" : `/blog/page/${pagination.page - 1}`}
                  className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Previous
                </Link>
              ) : (
                <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                  Previous
                </span>
              )}
              {pagination.hasNextPage ? (
                <Link
                  href={`/blog/page/${pagination.page + 1}`}
                  className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Next
                </Link>
              ) : (
                <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                  Next
                </span>
              )}
            </div>
          </div>
        </BlurFade>
      )}
    </>
  );
}
