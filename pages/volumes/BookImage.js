import Image from "next/image";

export default function BookImage({ image }) {
  return <Image src={image} height={230} width={140} alt="book cover" />;
}
