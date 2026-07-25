import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from "react";
import { useGetData } from "../data/bloglabDataHooks";
import { useAuth } from "./AuthContext";

const BlogsDataContext = createContext<BlogsDataContextValue | undefined>(undefined);

export function BlogsDataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [rawBlogsData, blogsLoading, blogsError, refetchBlogs] = useGetData("blogs");

  // Comments carry a viewer-dependent isOwnComment flag, so a login/logout
  // must refetch rather than reuse the previous viewer's cached response.
  const previousUserKey = useRef(user?.id ?? user?.username ?? null);
  useEffect(() => {
    const currentUserKey = user?.id ?? user?.username ?? null;
    if (currentUserKey !== previousUserKey.current) {
      previousUserKey.current = currentUserKey;
      refetchBlogs().catch(() => {});
    }
  }, [user, refetchBlogs]);

  // The API returns comment timestamps as `createdAt`, not `date`, so normalize
  // here rather than in every consumer.
  const blogsData = useMemo(
    () =>
      rawBlogsData?.map((blog) => ({
        ...blog,
        comments: blog.comments?.map((comment) => ({
          ...comment,
          date: comment.date ?? comment.createdAt ?? "",
        })),
      })),
    [rawBlogsData],
  );

  return (
    <BlogsDataContext.Provider
      value={{ blogsData, blogsLoading, blogsError, refetchBlogs }}
    >
      {children}
    </BlogsDataContext.Provider>
  );
}

export function useBlogsData(): BlogsDataContextValue {
  const context = useContext(BlogsDataContext);
  if (!context) {
    throw new Error("useBlogsData must be used within a BlogsDataProvider");
  }
  return context;
}
