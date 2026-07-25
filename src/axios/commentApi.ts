import { apiClient } from "./client";

export type PostCommentResponse = {
  id: number;
  blogId?: number;
  episodeId?: number;
  userId: string;
  body: string;
  createdAt: string;
  updatedAt?: string;
};

export async function postBlogCommentRequest(
  blogId: number,
  body: string,
): Promise<PostCommentResponse> {
  const { data } = await apiClient.post<PostCommentResponse>(
    "/post-blog-comment/",
    { blogId, body },
  );
  return data;
}

export async function editBlogCommentRequest(
  commentId: number,
  body: string,
): Promise<PostCommentResponse> {
  const { data } = await apiClient.patch<PostCommentResponse>(
    `/edit-blog-comment/${commentId}`,
    { body },
  );
  return data;
}

export async function deleteBlogCommentRequest(commentId: number): Promise<void> {
  await apiClient.delete(`/delete-blog-comment/${commentId}`);
}

export async function editPodcastCommentRequest(
  commentId: number,
  body: string,
): Promise<PostCommentResponse> {
  const { data } = await apiClient.patch<PostCommentResponse>(
    `/edit-podcast-comment/${commentId}`,
    { body },
  );
  return data;
}

export async function deletePodcastCommentRequest(commentId: number): Promise<void> {
  await apiClient.delete(`/delete-podcast-comment/${commentId}`);
}
