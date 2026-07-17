import type { Metadata } from "next";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { getPost, posts } from "../../lib/posts";
import { ThemeToggle } from "../../theme-toggle";

marked.use(markedKatex({ throwOnError: false, nonStandard: true }));

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "文章未找到" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) return <main className="not-found"><p>这篇文章还没有进入观测记录。</p><a href="/">返回首页</a></main>;
  const html = await marked.parse(post.markdown);
  return (
    <div className="article-page">
      <header className="reader-header"><div className="brand-cluster"><a className="brand" href="/" aria-label="返回诺德的小站首页"><i className="brand-mark" aria-hidden="true" /><span>诺德的小站</span></a><ThemeToggle /></div><a className="back-link" href="/">← 返回小站首页</a></header>
      <main className="reader-shell">
        <div className="article-kicker">{post.categories.join(" · ")} <span>/</span> {post.date}</div>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <div className="article-details"><span>{post.readingTime}</span></div>
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
        <nav className="reader-end" aria-label="文章结束"><span>END OF OBSERVATION</span><a href="/">继续浏览文章 →</a></nav>
      </main>
    </div>
  );
}
