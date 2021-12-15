import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { shade } from 'polished';

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
  mb-20
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
  py-40
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

export const RoadmapSection = tw.section`
  py-20
`;

export const RoadmapSectionLine = tw.div``;

export const RoadmapSectionElement = tw.div``;

export const DevelopmentRoadmapSection = tw.section`
  py-20
`;

export const DevelopmentRoadmapContent = tw.div``;

export const MeetTheClubSection = tw.section`
  py-20
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
