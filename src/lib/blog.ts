import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  blogNumber: number;
  content: string;
  seoKeywords?: string;
  metaDescription?: string;
  translations?: Record<string, string>;
  enSlug?: string;
  heroImage?: string;
}

export function getAllPosts(locale: string = 'en'): BlogPost[] {
  let localeDir = path.join(blogDirectory, locale);
  
  // Fallback to English if directory doesn't exist or is empty
  if (!fs.existsSync(localeDir) || fs.readdirSync(localeDir).filter(f => f.endsWith('.md')).length === 0) {
    localeDir = path.join(blogDirectory, 'en');
  }

  const fileNames = fs.readdirSync(localeDir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(localeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as any),
      };
    });

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    let localeDir = path.join(blogDirectory, locale);
    let fullPath = path.join(localeDir, `${slug}.md`);
    
    // Fallback to English if the specific post doesn't exist in this locale
    if (!fs.existsSync(fullPath)) {
      localeDir = path.join(blogDirectory, 'en');
      fullPath = path.join(localeDir, `${slug}.md`);
    }
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Load translations from slug-map.json
    const slugMapPath = path.join(blogDirectory, 'slug-map.json');
    let translations = {};
    let enSlug = slug;

    if (fs.existsSync(slugMapPath)) {
      const slugMap = JSON.parse(fs.readFileSync(slugMapPath, 'utf8'));
      // Find the entry for this slug in any language
      const entry = Object.entries(slugMap).find(([key, map]: [string, any]) => 
        Object.values(map).includes(slug)
      );

      if (entry) {
        enSlug = entry[0];
        translations = entry[1] as any;
      }
    }

    return {
      slug,
      content,
      translations,
      enSlug,
      ...(data as any),
    };
  } catch (e) {
    return null;
  }
}
