import "./LandingMain.css";
import { useEffect, useState } from "react";

const LandingMain = () => {
  const introParText: string = "Hi! My name is...";
  const introNameText: string = "Leo";
  const [index, setIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [introParArr, setIntroParArr] = useState<String[]>([]);
  const [introNameArr, setIntroNameArr] = useState<String[]>([]);

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
      } else if (nameIndex == introNameText.length) {
        const timeoutID = setTimeout(nameAnimation, 9 * 1000);
        return () => clearTimeout(timeoutID);
      } else {
        setIntroNameArr([]);
        setNameIndex(0);
        setIntroParArr([":) "]);
        setIndex(0);
      }
    }
  }, [introParArr, index, introNameArr]);

  const stringDisplay = introParArr.join("");
  const nameDisplay = introNameArr.join("");

  return (
    <div className='landing-main'>
      <p id='landing_p_intro'>{stringDisplay}</p>
      <h1 id='landing_name_intro'>{nameDisplay}</h1>
      <p id='landing_bio_intro'>
      I am a computer science and math major, and current sophmore student at Texas State University.
      I am with an intent in software development, and pursuing graduate level coursework for experience in quantintative trading.  
      </p>
    </div>
  );
};

export default LandingMain;
