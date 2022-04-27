import React, { useEffect, useRef } from "react";
import "./App.css";
import styled from "styled-components";
import Cat from "./images/blackCat.jpg";

const DumbBlockContainer = styled.div`
  width: 100%;
  height: 1000px;
  background: #032a2b;
`;

const Block = styled.div`
  position: relative;
  display: flex;
  background-color: #36a9ad;
  max-width: 1280px;
  height: 2500px;
  margin: 0 auto;
`;

const ImageCat = styled.img`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  top: 0px;
  padding: 0 0 30px 0;
  position: sticky;
`;

const Text = styled.p`
  margin: 0;
  font-size: 128px;
  height: fit-content;
  top: 0px;
  position: sticky;
  text-transform: uppercase;
  padding: 40px 0 0 0;
`;
const word = "cat";
const catWords = word.split("");
const App: React.FC = (): JSX.Element => {
  const catRef = useRef<HTMLImageElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLParagraphElement[]>([]);
  const animation = () => {
    if (blockRef.current) {
      let positionBlockFromTop = -blockRef.current?.getBoundingClientRect().top;

      if (positionBlockFromTop < 0) {
        positionBlockFromTop = 0;
      }

      const animationCat = catRef?.current?.animate(
        [
          {
            transform: "translateX(-80rem) scale(1)",
          },
          {
            transform: " translateX(-10rem) scale(1)",
          },
          {
            transform: " translateX(0rem) scale(1)",
          },
          {
            transform: " translateX(40rem) scale(0.5)",
          },
          {
            transform: " translateX(50rem) scale(0.5)",
          },
        ],
        { duration: 500, fill: "forwards" }
      );

      wordsRef?.current?.forEach((el, i) => {
        let letterPositionFromTop = positionBlockFromTop - (i + 1) * 500;

        if (letterPositionFromTop < 0) {
          letterPositionFromTop = 0;
        }

        const letterAnimation = el.animate(
          [
            {
              transform: "translateX(-80rem) scale(1)",
              top: "0",
            },
            {
              transform: " translateX(-10rem) scale(1)",
              top: "100",
            },
            {
              transform: " translateX(0rem) scale(1)",
            },
            {
              transform: " translateX(17rem) scale(0.5)",
              top: "200px",
            },
            {
              transform: " translateX(27rem) scale(0.5)",
              top: "200px",
            },
          ],
          { duration: 500, fill: "forwards" }
        );

        letterAnimation?.pause();
        letterAnimation!.currentTime = letterPositionFromTop;
      });

      animationCat?.pause();
      animationCat!.currentTime = positionBlockFromTop;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animation);
    return () => window.removeEventListener("scroll", animation);
  });
  const addRef = (ref: HTMLParagraphElement) => {
    if (ref && !wordsRef.current.includes(ref)) {
      wordsRef.current.push(ref);
    }
  };
  console.log(wordsRef.current);
  return (
    <>
      <DumbBlockContainer />
      <Block ref={blockRef}>
        <ImageCat src={Cat} ref={catRef} />

        {catWords.map((words: string) => (
          <Text ref={addRef}>{words}</Text>
        ))}
      </Block>
      <DumbBlockContainer />
    </>
  );
};

export default App;
