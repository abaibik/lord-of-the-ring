import image from "../../public/images/the-two-towers.png";
import BookImage from "./BookImage";
import Volume from "./Volume";

export default function Volume2() {
  return (
    <>
      <Volume name={"the-two-towers"} />
      <BookImage image={image} />
    </>
  );
}
