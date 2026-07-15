import symmetry from "../../content/posts/symmetry-and-conservation.md?raw";
import fourier from "../../content/posts/fourier-and-sound.md?raw";
import timeArrow from "../../content/posts/arrow-of-time.md?raw";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  readingTime: string;
  date: string;
  markdown: string;
};

export type PostSummary = Omit<Post, "markdown">;

export const posts: Post[] = [
  { slug: "symmetry-and-conservation", title: "为什么对称性会导向守恒律", excerpt: "从一个不会改变的动作出发，走向诺特定理的核心直觉。", categories: ["数学", "物理"], readingTime: "12 分钟", date: "2026.07.12", markdown: symmetry },
  { slug: "fourier-and-sound", title: "从傅里叶级数到声音的形状", excerpt: "把复杂的波拆成简单的振动，并重新听见它们。", categories: ["数学"], readingTime: "8 分钟", date: "2026.07.06", markdown: fourier },
  { slug: "arrow-of-time", title: "一次关于时间箭头的散步", excerpt: "方程大多不在意方向，而我们为什么只记得过去？", categories: ["物理", "随笔"], readingTime: "10 分钟", date: "2026.06.28", markdown: timeArrow },
];

export function getPost(slug: string) { return posts.find((post) => post.slug === slug); }
