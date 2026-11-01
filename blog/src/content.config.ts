import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  hero: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().default(false),
});

export const collections = {
  "posts-en": defineCollection({
    loader: glob({ base: "./src/content/posts/en", pattern: "**/*.md" }),
    schema: postSchema,
  }),
  "posts-ar": defineCollection({
    loader: glob({ base: "./src/content/posts/ar", pattern: "**/*.md" }),
    schema: postSchema,
  }),
};

export type PostLang = "en" | "ar";

export function collectionFor(lang: PostLang) {
  return lang === "ar" ? "posts-ar" : "posts-en";
}

export function otherLang(lang: PostLang): PostLang {
  return lang === "ar" ? "en" : "ar";
}

/** URL path of a post page: `/posts/<id>/` (en) or `/ar/posts/<id>/` (ar). */
export function postPath(lang: PostLang, id: string) {
  return lang === "ar" ? `/ar/posts/${id}/` : `/posts/${id}/`;
}

export function indexPath(lang: PostLang) {
  return lang === "ar" ? "/ar/" : "/";
}
