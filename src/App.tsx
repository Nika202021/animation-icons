import React, { useEffect, useRef } from "react";
import "./App.css";
import styled from "styled-components";
import Globe from "./images/ecosystem.svg";
import EmployersConscience from "./images/employers-conscience.svg";
import IndependentBrands from "./images/independent-brands.svg";
import SocialShoppers from "./images/social-shoppers.svg";

const DumbBlockContainer = styled.div`
  width: 100%;
  height: 1000px;
  background: #032a2b;
`;

const Block = styled.div`
  padding: 100px 40px;
  display: flex;
  background-color: #36a9ad;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  width: 40%;
`;

const EcosystemImage = styled.div`
  width: 577px;
  position: relative;
  height: 504px;
  background: #36a9ad url(${Globe}) no-repeat left center;
  position: sticky;
  top: 100px;
  background-attachment: cover;
  background-size: 462px 504px;
`;

const BottomIcon = styled.img<{ toggle?: boolean }>`
  position: absolute;
  transform: translate(-100px, 170px);
  top: 37%;
  left: 37%;
  width: 116px;
  height: 116px;
`;

const MiddleEcoIcon = styled.img<{ toggle?: boolean }>`
  position: absolute;
  top: 37%;
  left: 37%;
  transform: translateX(170px) scale(1.354);
  width: 116px;
  height: 116px;
`;

const Text = styled.p`
  margin: 0;
  box-sizing: border-box;

  &:not(:first-child) {
    padding-top: 150px;
  }

  &:not(:last-child) {
    padding-bottom: 150px;
  }
`;

const TopIcon = styled.img<{ toggle?: boolean }>`
  position: absolute;
  top: 37%;
  left: 37%;
  transform: translate(-100px, -170px);
  width: 116px;
  height: 116px;
`;

const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere pariatur corporis reprehenderit autem est cum, nam consequuntur perspiciatis beatae quod veniam dolore quae non nisi nulla harum, dicta nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laboriosam repudiandae, dolorem ipsam magni maxime saepe nulla sun. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere pariatur corporis reprehenderit autem est cum, nam consequuntur perspiciatis beatae quod veniam dolore quae non nisi nulla harum, dicta nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laboriosam repudiandae, dolorem ipsam magni maxime saepe nulla sun Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere pariatur corporis reprehenderit autem est cum, nam consequuntur perspiciatis beatae quod veniam dolore quae non nisi nulla harum, dicta nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laboriosam repudiandae, dolorem ipsam magni maxime saepe nulla sun. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere pariatur corporis reprehenderit autem est cum, nam consequuntur perspiciatis beatae quod veniam dolore quae non nisi nulla harum, dicta nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laboriosam repudiandae, dolorem ipsam magni maxime saepe nulla sun repudiandae, dolorem ipsam magni maxime saepe nulla sun. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere pariatur corporis reprehenderit autem est cum, nam consequuntur perspiciatis beatae quod veniam dolore quae non nisi nulla harum, dicta nesciunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laboriosam repudiandae, dolorem ipsam magni maxime saepe nulla sun ";

const App: React.FC = (): JSX.Element => {
  const topRef = useRef<HTMLImageElement>(null);
  const middleRef = useRef<HTMLImageElement>(null);
  const bottomRef = useRef<HTMLImageElement>(null);
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const middleTextRef = useRef<HTMLParagraphElement>(null);

  const animationIcons = () => {
    if (topTextRef.current && middleTextRef.current) {
      const positionFromTop = topTextRef.current?.getBoundingClientRect().top;
      const topTextHeight = topTextRef.current?.offsetHeight;
      const middleTextHeight = middleTextRef.current?.offsetHeight;
      const duration = topTextHeight + middleTextHeight;
      let animationCurrentTime = -positionFromTop;

      if (-positionFromTop < 0) {
        animationCurrentTime = 0;
      }

      if (-positionFromTop > duration) {
        animationCurrentTime = duration;
      }

      if (animationCurrentTime >= 0 && animationCurrentTime <= duration) {
        const topAnimation = topRef?.current?.animate(
          [
            {
              transform:
                "rotate(-120deg) translateX(200px) rotate(120deg) scale(1)",
            },
            {
              transform:
                "rotate(0deg) translateX(200px) rotate(0deg) scale(1.354)",
            },
            {
              transform:
                "rotate(120deg) translateX(200px) rotate(-120deg) scale(1)",
            },
          ],
          { duration, fill: "both" }
        );
        const middleAnimation = middleRef?.current?.animate(
          [
            {
              transform:
                "rotate(0deg) translateX(200px) rotate(0deg) scale(1.354)",
            },
            {
              transform:
                "rotate(120deg) translateX(200px) rotate(-120deg) scale(1)",
            },
            {
              transform:
                "rotate(240deg) translateX(200px) rotate(-240deg) scale(1)",
            },
          ],
          { duration, fill: "both" }
        );
        const bottomAnimation = bottomRef?.current?.animate(
          [
            {
              transform:
                "rotate(-240deg) translateX(200px) rotate(240deg) scale(1)",
            },
            {
              transform:
                "rotate(-120deg) translateX(200px) rotate(120deg) scale(1)",
            },
            {
              transform:
                "rotate(0deg) translateX(200px) rotate(0deg) scale(1.354)",
            },
          ],
          { duration, fill: "both" }
        );
        topAnimation?.pause();
        middleAnimation?.pause();
        bottomAnimation?.pause();

        topAnimation!.currentTime = animationCurrentTime;
        middleAnimation!.currentTime = animationCurrentTime;
        bottomAnimation!.currentTime = animationCurrentTime;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animationIcons);
    return () => window.removeEventListener("scroll", animationIcons);
  });

  return (
    <>
      <DumbBlockContainer />
      <Block>
        <EcosystemImage>
          <BottomIcon
            src={EmployersConscience}
            alt={"icons[0].alt"}
            ref={bottomRef}
          />
          <MiddleEcoIcon
            src={IndependentBrands}
            alt={"icons[1].alt"}
            ref={middleRef}
          />
          <TopIcon src={SocialShoppers} alt={"icons[2].alt"} ref={topRef} />
        </EcosystemImage>
        <TextContainer>
          <Text ref={topTextRef}>{text}</Text>
          <Text ref={middleTextRef}>{text}</Text>
          <Text>{text}</Text>
        </TextContainer>
      </Block>
      <DumbBlockContainer />
    </>
  );
};

export default App;
