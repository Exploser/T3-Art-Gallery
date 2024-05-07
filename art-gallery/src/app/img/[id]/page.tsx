import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsInt = Number(photoId);
if (Number.isNaN(idAsInt)) throw new Error("Invalid Photo ID")

  return <FullPageImageView id={idAsInt} />;
}