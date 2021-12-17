import tw from 'tailwind-styled-components';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

import halfFullBackground from '../../assets/half-full-box.png';

export const Container = tw.div`
  flex
  flex-col
  w-screen
`;

const FixedHeightCoverSection = styled.section`
  height: 800px;
`;

export const CoverSection = tw(FixedHeightCoverSection)`
  flex
  flex-col
  items-center
  justify-around
  relative
  bg-black
  py-20
`;

const CoverTitleCustomHeaders = styled.div`
  & > h1 {
    &:first-child {
      color: #fff;
    }
    &:not(:first-child) {
      color: #000;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
  }
`;

export const CoverTitle = tw(CoverTitleCustomHeaders)`
  text-9xl
  font-black
  text-center
`;

export const SectionTitle = tw.div`
  text-5xl
  font-black
  text-center
  mb-14
`;

export const MintContainer = tw.div`
  flex
  flex-col
  text-white
`;

const IncrementContainerElements = styled.div`
  & > button {
    padding: 5px;
    background: white;
    color: black;
    border-radius: 8px;

    &:hover {
      background: ${shade(0.2, '#fff')};
    }
  }
`;

export const IncrementContainer = tw(IncrementContainerElements)`
  flex
  items-center
  justify-around
  text-xl
  w-full
  mb-5
  z-10
`;

export const AboutSection = tw.section`
  flex
  flex-col
  py-20
  px-40
`;

export const AboutSectionContent = tw.div`
  flex
  flex-row
  w-full
`;

const AboutSectionCoverElements = styled.div`
  & > img {
    width: 90%;
  }

  & > button {
    width: auto;
  }
`;

export const AboutSectionCover = tw(AboutSectionCoverElements)`
  flex
  flex-col
  justify-around
  items-center
  w-4/12
  px-14
`;

export const AboutSectionText = tw.div`
  w-8/12
`;

export const StorySection = tw.section`
  flex
  flex-col
  items-center
  py-32
  px-52
  bg-[#ececec]
`;

export const StorySectionImages = tw.div`
  flex
  justify-around
  items-center
  w-7/12
  mt-20
`;

const RoadmapSectionElements = styled.section`
  & > button {
    width: auto;
    margin-top: 30px;
  }
`;

export const RoadmapSection = tw(RoadmapSectionElements)`
  py-20
  flex
  flex-col
  items-center
`;

export const RoadmapSectionLine = tw.div`
  flex
  flex-col
  justify-around
  items-center
`;

export const RoadmapTimelineBlockLink = styled.div`
  position: absolute;
  height: 700px;
  width: 10px;
  background-color: black;
  top: 80px;
  left: 35px;
  z-index: 0;
`;

const RoadmapSectionTimelineItemElements = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100px;

  &:not(:first-child) {
    margin-top: 50px;
  }

  & > div.timeline-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin: 0 5%;
    position: relative;
    z-index: 10;

    ${props => {
      if (props.halfWhiteBackground) {
        return css`
          background: url(${halfFullBackground});
          background-size: 100% 100%;
          border: 2px solid black;
        `;
      }

      if (props.whiteBackground) {
        return css`
          background-color: white;
          color: black;
          border: 2px solid black;
        `;
      }

      return css``;
    }}
  }

  & > h3 {
    width: 15%;
    text-align: right;
    font-size: 18px;
    font-weight: 700;
  }

  & > p {
    width: 50%;
  }
`;

export const RoadmapSectionTimelineItem = tw(
  RoadmapSectionTimelineItemElements,
)`
  flex
  items-center
`;

export const DevelopmentRoadmapSection = tw.section`
  py-20
  flex
  flex-col
  justify-around
  bg-black
  text-white
  relative
  h-[900px]
`;

const MeetTheClubSectionElements = styled.section`
  & > p {
    width: 70%;
    text-align: center;
  }

  & > button {
    margin-top: 40px;
    width: auto;
  }
`;

export const MeetTheClubSection = tw(MeetTheClubSectionElements)`
  flex
  flex-col
  items-center
  py-20
  px-52
`;

const QuestionSectionElements = styled.section`
  & > button {
    margin-top: 50px;
    width: auto;
  }
`;

export const QuestionSection = tw(QuestionSectionElements)`
  flex
  flex-col
  items-center
  w-full
  py-20
  px-52
  bg-black
  text-white
`;

export const TeamSection = tw.section`
  flex
  flex-col
  items-center
  py-20
  px-52
  bg-[#ececec]
`;

export const TeamMembers = tw.div`
  flex
  flex-wrap
`;

const TeamMemberCardElements = styled.div`
  flex: 1 0 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 132px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }

  & > h5 {
    font-weight: 700;
  }

  & > span {
    font-size: 14px;
    color: #626262;
  }
`;

export const TeamMemberCard = tw(TeamMemberCardElements)`
  p-5
  text-center
`;
