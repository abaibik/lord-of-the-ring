import image from "../../public/images/the-return-of-the-king.png";
import BookImage from "./BookImage";
import Volume from "./Volume";

export default function Volume3() {
  return (
    <>
      <Volume name={"the-return-of-the-king"} />
      <BookImage image={image} />
    </>
  );
}
