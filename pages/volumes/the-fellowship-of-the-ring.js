import image from "../../public/images/the-fellowship-of-the-ring.png";
import BookImage from "./BookImage";
import Volume from "./Volume";

export default function Volume1() {
  return (
    <>
      <Volume name={"the-fellowship-of-the-ring"} />
      <BookImage image={image} />
    </>
  );
}
