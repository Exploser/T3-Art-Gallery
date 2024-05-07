import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId)

  return (
    <div className="flex h-full w-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={image.url} className="object-contain flex-shrink" />
        </div>

        <div className="flex w-48 flex-shrink-0 flex-col border-l">
            <div className="border-b p-2 text-center text-lg">{image.name}</div>

            <div className="flex flex-col p-2">
                <span> Uploaded By, </span>
                <span>{uploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
                <span> Created On, </span>
                <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    </div>
  );
}