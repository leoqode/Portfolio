import "./LandingMain.css";
import { useEffect, useState } from "react";
import BlackHoleAnimation from "../AlwaysHatedLamePorfolios/BlackHoleLetterAnimation";

const LandingMain = () => {
  const introParText: string = "Hi! My name is...";
  const introNameText: string = "Leo";
  const bio: string =
    "Student at Texas State University, pursuing a double major in Computer Science and Mathematics. I am dedicated to honing my skills and knowledge in this field. Furthermore, I am actively engaged in graduate-level coursework, with a particular focus on gaining valuable experience in the realm of quantitative trading.";
  const [bioArr, setBioArr] = useState<string[]>(Array.from(bio));
  const [removedText, setRemovedText] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [nameIndex, setNameIndex] = useState<number>(0);
  const [introParArr, setIntroParArr] = useState<string[]>([]);
  const [introNameArr, setIntroNameArr] = useState<string[]>([]);
  const [allTyped, setAllTyped] = useState<boolean>(false);

  useEffect(() => {
    const textAnimation = () => {
      setIntroParArr((prevIntroParArr) => [
        ...prevIntroParArr,
        introParText[index],
      ]);
      setIndex((prevIndex) => prevIndex + 1);
    };

    if (index < introParText.length) {
      const timeoutID = setTimeout(textAnimation, 0.15 * 1000);
      return () => clearTimeout(timeoutID);
    } else {
      const nameAnimation = () => {
        setIntroNameArr((prevIntroNameArr) => [
          ...prevIntroNameArr,
          introNameText[nameIndex],
        ]);
        setNameIndex((prevNameIndex) => prevNameIndex + 1);
      };

      if (nameIndex < introNameText.length) {
        const timeoutID = setTimeout(nameAnimation, 0.4 * 1000);
        return () => clearTimeout(timeoutID);
      } else if (nameIndex === introNameText.length) {
        setAllTyped(true);
        const timeoutID = setTimeout(nameAnimation, 9 * 1000);
        return () => clearTimeout(timeoutID);
      } else {
        setIntroNameArr([]);
        setNameIndex(0);
        setIntroParArr([":) "]);
        setIndex(0);
        setAllTyped(false);
      }
    }
  }, [index, introNameArr]);

  useEffect(() => {
    if (allTyped) {
      const bioAnimation = () => {
        setRemovedText((prevRemovedText) => [
          ...prevRemovedText,
          bioArr[bioArr.length - 1],
        ]);
        setBioArr((prevBioArr) => prevBioArr.slice(0, prevBioArr.length - 1));
      };

      if (bioArr.length > 0) {
        const timeoutID = setTimeout(bioAnimation, 0.2 * 1000);
        return () => clearTimeout(timeoutID);
      }
    }
  }, [bioArr, allTyped]);

  const stringDisplay = introParArr.join("");
  const nameDisplay = allTyped ? (
    introNameArr.map((letter, index) => (
      <div key={index} className={`anim-letter-${index}`}>
        {letter}
      </div>
    ))
  ) : (
    introNameArr.map((letter, index) => (
      <div key={index} className={`letter-${index}`}>
        {letter}
      </div>
    ))
  );

  return (
    <>
      <div className="landing-main">
        <p id="landing_p_intro">{stringDisplay}</p>
        <div className="landing-name-wrapper">
          <h1 id="landing_name_intro">{nameDisplay}</h1>
        </div>
        <p id="landing_bio_intro">{bioArr.join("")}</p>
      </div>
      <BlackHoleAnimation text={removedText} />
    </>
  );
};

export default LandingMain;
