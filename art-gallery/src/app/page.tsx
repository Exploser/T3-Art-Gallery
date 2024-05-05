import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/9c5d41cd-14dc-436b-bd22-47449814e165-1zbfv.png",
  "https://utfs.io/f/e2eaa742-3bc3-487c-ad58-a4ca8ab1d4d0-rgiybr.png",
  "https://utfs.io/f/3ab97b50-9172-4d1f-aa7e-d74bcd309e5b-189jdr.jpg",
  "https://utfs.io/f/3bc22e4a-b6c5-4a43-a1c0-419429b09ccf-fnnj02.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts)
  
  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[ ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
     Hello User!
    </main>
  );
}
