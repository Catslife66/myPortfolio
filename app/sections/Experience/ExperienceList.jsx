"use client";

export default function ExperienceList() {
  const handleMouseOverAnimation = (e) => {
    animateShuffle(e);

    function shuffleText(text) {
      const charsArray = text.split("");
      for (let i = charsArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [charsArray[i], charsArray[randomIndex]] = [
          charsArray[randomIndex],
          charsArray[i],
        ];
      }
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
      const maxShuffles = 10;
      const intervalDuration = 500 / maxShuffles;

      let animationInterval = setInterval(() => {
        if (shuffles >= maxShuffles) {
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
    <>
      <div onMouseEnter={handleMouseOverAnimation} className="bg-blue-200 py-4">
        Mar 2017 -{" "}
        <span className="shuffleTarget text-2xl text-red-400">Jun</span> 2017 LN
        Hotel Boutique Foshan <span className="shuffleTarget">Guangdong</span>{" "}
        Marketing & Communication Supervisor
      </div>

      <div onMouseEnter={handleMouseOverAnimation} className="bg-red-200 py-4">
        Mar 2017 -{" "}
        <span className="shuffleTarget text-2xl text-red-400">Mar</span> 2017 LN
        Hotel Boutique Foshan <span className="shuffleTarget">Haikou</span>{" "}
        Marketing & Communication Supervisor
      </div>
    </>
  );
}
