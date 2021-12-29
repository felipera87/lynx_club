import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { shade } from 'polished';

import { device } from '../../utils/screenBreakpoints';

export const Container = tw.div`
  flex
  flex-col
  w-screen
`;

const FixedHeightCoverSection = styled.section`
  height: ${props => props.height}px;
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
  text-4xl
  md:text-9xl
  w-full
  font-black
  text-center
  z-10
`;

export const SectionTitle = tw.div`
  text-4xl
  md:text-5xl
  font-black
  text-center
  mb-14
  z-10
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
  md:mb-5
  mb-10
  z-10
`;

export const AboutSection = tw.section`
  flex
  flex-col
  py-14
  md:py-20
  px-5
  md:px-40
`;

export const AboutSectionContentElements = styled.div`
  & > button {
    width: auto;
  }
`;

export const AboutSectionContent = tw(AboutSectionContentElements)`
  flex
  flex-col
  items-center
  md:items-stretch
  md:flex-row
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
  w-full
  md:w-4/12
  md:px-14
`;

export const AboutSectionText = tw.div`
  md:w-8/12
  w-full
  my-5
  md:my-0
`;

export const StorySection = tw.section`
  flex
  flex-col
  items-center
  py-14
  md:py-32
  px-5
  md:px-52
  bg-[#ececec]
`;

export const StorySectionImagesElements = styled.div`
  & > img {
    width: 25%;
  }
`;

export const StorySectionImages = tw(StorySectionImagesElements)`
  flex
  shrink
  justify-around
  items-center
  w-full
  md:w-7/12
  mt-5
  md:mt-20
`;

const RoadmapSectionElements = styled.section`
  & > button {
    width: auto;
    margin-top: 30px;
  }
`;

export const RoadmapSection = tw(RoadmapSectionElements)`
  py-14
  md:py-20
  flex
  flex-col
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
  md:h-[900px]
`;

export const DevelopmentRoadmapItemContainer = tw.ul`
  z-10
`;

const DevelopmentRoadmapItemElements = styled.li`
  margin: 0px 15px;
  padding: 20px 10px;
  background-color: transparent;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(46px);
  border-radius: 14px;

  &:not(:first-child) {
    margin-top: 15px;
  }

  & > h3 {
    font-weight: 700;
    font-size: 20px;
  }

  & > p {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const DevelopmentRoadmapItem = tw(DevelopmentRoadmapItemElements)`
  flex
  flex-col
`;

const MeetTheClubSectionElements = styled.section`
  & > p {
    width: 100%;
    text-align: center;
  }

  & > button {
    margin-top: 40px;
    width: auto;
  }

  ${device.md} {
    & > p {
      width: 70%;
      text-align: center;
    }
  }
`;

export const MeetTheClubSection = tw(MeetTheClubSectionElements)`
  flex
  flex-col
  items-center
  py-20
  px-5
  md:px-52
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
  md:px-52
  bg-black
  text-white
`;

export const TeamSection = tw.section`
  flex
  flex-col
  items-center
  py-20
  md:px-52
  bg-[#ececec]
`;

export const TeamMembers = tw.div`
  flex
  flex-wrap
`;

const TeamMemberCardElements = styled.div`
  flex: 1 0 50%;
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

  ${device.md} {
    flex: 1 0 20%;
  }
`;

export const TeamMemberCard = tw(TeamMemberCardElements)`
  p-5
  text-center
`;
