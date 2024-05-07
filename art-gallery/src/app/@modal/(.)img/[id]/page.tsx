import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsInt = Number(photoId);
if (Number.isNaN(idAsInt)) throw new Error("Invalid Photo ID")

  const image = await getImage(idAsInt);
  return <div><img src={image.url}className="w-100" /> </div>;
}