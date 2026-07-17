"use client";

import { useMemo, useState } from "react";
import type { PostSummary } from "./lib/posts";
import { ThemeToggle } from "./theme-toggle";

const channels = ["全部", "数学/物理", "文学/历史/哲学", "其他"] as const;

function channelForPost(post: PostSummary) {
  if (post.categories.includes("随笔")) return "其他";
  if (post.categories.some((category) => category === "数学" || category === "物理")) return "数学/物理";
  if (post.categories.some((category) => category === "文学" || category === "历史" || category === "哲学")) return "文学/历史/哲学";
  return "其他";
}

export function HomeClient({ posts }: { posts: PostSummary[] }) {
  const [channel, setChannel] = useState<(typeof channels)[number]>("全部");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const visiblePosts = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return posts.filter((post) => {
      const inChannel = channel === "全部" || channelForPost(post) === channel;
      const matches = !keyword || `${post.title} ${post.excerpt} ${post.categories.join(" ")}`.toLowerCase().includes(keyword);
      return inChannel && matches;
    });
  }, [channel, posts, query]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-cluster">
          <div className="brand brand-static" aria-label="诺德的小站">
            <i className="brand-mark" aria-hidden="true" />
            <span>诺德的小站</span>
          </div>
          <ThemeToggle />
        </div>
        <nav className="nav" aria-label="主导航">
          <a href="#articles">文章</a>
          <a href="#columns">栏目</a>
          <button className="search-button" type="button" aria-label="搜索文章" aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}>
            <span aria-hidden="true" />
          </button>
        </nav>
      </header>

      {searchOpen && (
        <div className="search-panel">
          <label htmlFor="site-search">搜索标题、摘要或栏目</label>
          <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：对称性、傅里叶、时间……" autoFocus />
        </div>
      )}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">Notes from the observatory</div>
            <h1 id="hero-title">诺德的小站</h1>
            <p className="subtitle">收纳个人的各种笔记以及奇奇怪怪的想法</p>
            <a className="primary-link" href="#articles">开始阅读 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="orbit-stage" aria-hidden="true">
            <i className="orbit orbit-one" /><i className="orbit orbit-two" /><i className="orbit orbit-three" />
            <i className="star-core" /><i className="planet" />
            <div className="coordinates">23.1291° N<br />113.2644° E<br />UTC +08:00</div>
            <div className="hero-formula">G<sub>μν</sub> + Λg<sub>μν</sub> = <span>(8πG/c⁴)T<sub>μν</sub></span></div>
          </div>
        </section>

        <section className="content-grid" id="articles">
          <div>
            <div className="section-head">
              <div><span className="section-index">01</span><h2>最近文章 · Recent essays</h2></div>
              <span>{String(visiblePosts.length).padStart(2, "0")} 篇</span>
            </div>
            <div className="article-list">
              {visiblePosts.map((post, index) => (
                <a className="article-row" href={`/articles/${post.slug}`} key={post.slug}>
                  <span className="article-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="article-main">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="meta"><b>{post.categories.join(" · ")}</b><i /><span>{post.readingTime}</span><i /><span>{post.date}</span></div>
                  </div>
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              ))}
              {visiblePosts.length === 0 && <div className="empty-state">没有找到匹配的文章。换一个关键词或栏目试试。</div>}
            </div>
          </div>

          <aside className="aside" id="columns">
            <div className="aside-title">探索栏目 · Index</div>
            <div className="channels" role="group" aria-label="筛选文章栏目">
              {channels.map((item) => (
                <button className="channel" type="button" key={item} aria-pressed={channel === item} onClick={() => setChannel(item)}>
                  {item}<span>{item === "全部" ? posts.length : posts.filter((post) => channelForPost(post) === item).length}</span>
                </button>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <footer><span>© 2026 诺德的小站</span><span>MATHEMATICS · PHYSICS · AND MORE</span></footer>
    </div>
  );
}
