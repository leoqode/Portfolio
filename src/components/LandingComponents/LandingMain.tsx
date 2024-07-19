import React, { useEffect, useState } from "react";
import "./LandingMain.css";

const LandingMain: React.FC = () => {
  const introParText: string = "Hi! My name is...";
  const introNameText: string = "Leonardo";
  const [index, setIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);
  const [introParArr, setIntroParArr] = useState<string[]>([]);
  const [introNameArr, setIntroNameArr] = useState<string[]>([]);
  const [allTyped, setAllTyped] = useState(false);

  useEffect(() => {
    const textAnimation = () => {
      setIntroParArr((prevIntroParArr) => [
        ...prevIntroParArr,
        introParText[index],
      ]);
      setIndex((prevIndex) => prevIndex + 1);
    };

    if (index < introParText.length) {
      const timeoutID = setTimeout(textAnimation, 150);
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
        const timeoutID = setTimeout(nameAnimation, 400);
        return () => clearTimeout(timeoutID);
      } else if (nameIndex === introNameText.length) {
        setAllTyped(true);
        const timeoutID = setTimeout(() => {
          setIntroNameArr([]);
          setNameIndex(0);
          setIntroParArr([":) "]);
          setIndex(0);
          setAllTyped(false);
        }, 9000);
        return () => clearTimeout(timeoutID);
      }
    }
  }, [index, nameIndex]);

  const stringDisplay = introParArr.join("");
  const nameDisplay = introNameArr.map((letter, index) => (
    <div key={index} className={allTyped ? `anim-letter-${index}` : `letter-${index}`}>
      {letter}
    </div>
  ));

  return (
    <div className='landing-main'>
      <p id='landing_p_intro'>{stringDisplay}</p>
      <div className='landing-name-wrapper'>
        <h1 id='landing_name_intro'>{nameDisplay}</h1>
      </div>
    </div>
  );
};

export default LandingMain;
