import FlipCards from "./FlipCards";
import ExpHeading from "./ExpHeading";

export default function Index() {
  return (
    <section id="experience" className="w-full py-4 md:py-8">
      <ExpHeading />
      <FlipCards />
    </section>
  );
}
