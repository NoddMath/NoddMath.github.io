import { HomeClient } from "./home-client";
import { posts } from "./lib/posts";

export default function Home() {
  return <HomeClient posts={posts.map(({ markdown: _markdown, ...post }) => post)} />;
}
