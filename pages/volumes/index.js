import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement() {
    const idx = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[idx];

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <h1>Volumes</h1>

      <h1>Lord of the Rings</h1>

      <p>{introduction}</p>

      <h2>All Volumes</h2>

      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={getRandomElement}>Show random volume</button>
    </div>
  );
}
