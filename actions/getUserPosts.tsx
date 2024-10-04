"use server";
import prisma from "@/lib/prisma";

export const getUserPosts = async () => {
  try {
    const userposts = await prisma.userPost.findMany({
      select: {
        title: true,
        category: true,
        videoURL: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return userposts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
