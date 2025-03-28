import { experienceData } from "@/app/data/experienceData";

function ExperienceItemComponent({
  time,
  workplace,
  location,
  position,
  className = "",
}) {
  const handleMouseOverAnimation = (e) => {
    animateShuffle(e);

    function shuffleText(text) {
      const charsArray = text.split("");

      let i = charsArray.length - 1;
      let randomIndex;
      let temp;
      while (i > 0) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        temp = charsArray[randomIndex];
        charsArray[randomIndex] = charsArray[i];
        charsArray[i] = temp;
        i--;
      }
      // for(let i = charsArray.length - 1; i > 0; i--){
      //   const random = Math.floor(Math.random()*(i+1))
      //   [charsArray[i], charsArray[random]] = [charsArray[random], charsArray[i]]
      // }

      return charsArray.join("");
    }

    function animateShuffle(e) {
      const targetDiv = e.currentTarget;

      if (targetDiv.classList.contains("animating")) return;
      targetDiv.classList.add("animating");

      const target = e.currentTarget.querySelectorAll(".shuffleTarget");
      const originalTextArray = Array.from(target).map(
        (item) => item.innerText
      );

      let shuffles = 0;
      const MAXSHUFFLE = 5;
      const SHUFFLEFRAME = 600;
      const intervalDuration = SHUFFLEFRAME / MAXSHUFFLE;

      let animationInterval = setInterval(() => {
        if (shuffles >= MAXSHUFFLE) {
          clearInterval(animationInterval);
          target.forEach((item, index) => {
            item.innerText = originalTextArray[index];
          });
          targetDiv.classList.remove("animating");
        } else {
          target.forEach((item, index) => {
            item.innerText = shuffleText(originalTextArray[index]);
          });
          shuffles++;
        }
      }, intervalDuration);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseOverAnimation}
      className={`w-full ${className}`}
    >
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 text-base text-themeWhite p-4 leading-8 md:py-8 md:text-2xl md:leading-[3rem]">
        <div className="col shuffleTarget text-yellow-300 font-bold pe-4">
          {time}
        </div>

        <div className="col-span-2 ps-4">
          <div className="flex flex-wrap">
            <span className="pe-4">
              {workplace}, {""}
            </span>
            <span className="shuffleTarget text-yellow-300 font-bold">
              {location}
            </span>
          </div>
          <div>{position}</div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceDetail() {
  return (
    <>
      {experienceData.map((item, i) => (
        <ExperienceItemComponent
          key={i}
          className={`${
            i === experienceData.length - 1 ? "" : "border-b border-yellow-300"
          }`}
          time={item.time}
          workplace={item.workplace}
          location={item.location}
          position={item.position}
        />
      ))}
    </>
  );
}
