import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from 'next/image';
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <div className="flex justify-center user-images" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                <Image
                  src={image.url}
                  style={{ objectFit: "contain" }}
                  width={192}
                  height={192}
                  alt={image.name}
                />
              </div>
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">

      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In :)</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
