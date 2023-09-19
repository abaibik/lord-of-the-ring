import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const { title, description, cover, books } = volume;

  const nextVolume = volumes[volumes.indexOf(volume) + 1];
  const prevVolume = volumes[volumes.indexOf(volume) - 1];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {prevVolume ? (
        <Link href={`/volumes/${prevVolume.slug}`}>Previous volume</Link>
      ) : null}
      <br />
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>Next volume</Link>
      ) : null}
    </>
  );
}
