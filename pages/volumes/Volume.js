import Link from "next/link";
import { volumes } from "../../lib/data";

export default function Volume({ name }) {
  const volume = volumes.find(({ slug }) => slug === name);

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}, {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}
