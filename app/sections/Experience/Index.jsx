import FlipCards from "./FlipCards";
import ExpHeading from "./ExpHeading";

export default function Index() {
  return (
    <section id="experience" className="w-full h-screen flex flex-col">
      <ExpHeading />
      <FlipCards />
    </section>
  );
}
