"use client";

import { useMemo, useState } from "react";
import type { PostSummary } from "./lib/posts";

const channels = ["全部", "数学", "物理", "随笔"] as const;

export function HomeClient({ posts }: { posts: PostSummary[] }) {
  const [channel, setChannel] = useState<(typeof channels)[number]>("全部");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const visiblePosts = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return posts.filter((post) => {
      const inChannel = channel === "全部" || post.categories.includes(channel);
      const matches = !keyword || `${post.title} ${post.excerpt} ${post.categories.join(" ")}`.toLowerCase().includes(keyword);
      return inChannel && matches;
    });
  }, [channel, posts, query]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="微光与方程首页">
          <i className="brand-mark" aria-hidden="true" />
          <span>微光与方程</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#articles">文章</a>
          <a href="#columns">栏目</a>
          <a href="#about">关于</a>
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
            <h1 id="hero-title">微光与方程</h1>
            <p className="subtitle">在公式、直觉与世界之间写作</p>
            <p className="intro">这里记录那些值得慢慢推导的问题：自然为何呈现秩序，抽象如何抵达经验，以及一个公式怎样悄悄改变我们观看世界的方式。</p>
            <a className="primary-link" href="#articles">开始阅读 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="orbit-stage" aria-hidden="true">
            <i className="orbit orbit-one" /><i className="orbit orbit-two" /><i className="orbit orbit-three" />
            <i className="star-core" /><i className="planet" />
            <div className="coordinates">31.2304° N<br />121.4737° E<br />UTC +08:00</div>
            <div className="hero-formula">E = mc² <small>01 / ∞</small></div>
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
                  {item}<span>{item === "全部" ? posts.length : posts.filter((post) => post.categories.includes(item)).length}</span>
                </button>
              ))}
            </div>
            <div className="observatory-note" id="about">
              <span className="note-label">READING SYSTEM</span>
              <p>文章以 Markdown 写作，支持 LaTeX 公式、表格、引用与代码块，为长时间阅读保留足够的呼吸。</p>
              <code>∫ f(x) dx</code>
            </div>
            <div className="small-note"><span>观测日志</span><p>不定期更新。每一篇都从一个真正想弄明白的问题开始。</p></div>
          </aside>
        </section>
      </main>

      <footer><span>© 2026 微光与方程</span><span>MATHEMATICS · PHYSICS · ESSAYS</span></footer>
    </div>
  );
}
