import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';

import {
  Container,
  CoverSection,
  CoverTitle,
  MintContainer,
  IncrementContainer,
  AboutSection,
  AboutSectionContent,
  AboutSectionCover,
  AboutSectionText,
  SectionTitle,
  StorySection,
  StorySectionImages,
  RoadmapSection,
  DevelopmentRoadmapSection,
  DevelopmentRoadmapItemContainer,
  DevelopmentRoadmapItem,
  MeetTheClubSection,
  QuestionSection,
  TeamSection,
  TeamMembers,
  TeamMemberCard,
} from './styles';

import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import TextCarousel from '../../components/TextCarousel';
import CollapseList from '../../components/CollapseList';
import StarBackground from '../../components/StarBackground';
import ImageBackground from '../../components/ImageBackground';
import Timeline from '../../components/Timeline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import astronautCat from '../../assets/astronaut_cat.png';
import laserCat from '../../assets/laser_cat.png';

import { screenBreakpoints } from '../../utils/screenBreakpoints';

import { useGlobalData } from '../../hooks/global';

import {
  coverImages,
  questions,
  roadmapData,
  developmentRoadmapData,
  teamMembers,
} from '../../utils/staticData';

const LandingPage = () => {
  const { mintQuantity, setMintQuantity, documentWidth } = useGlobalData();
  const history = useHistory();

  const handleMintButtonClick = useCallback(() => {
    history.push('/mint');
  }, [history]);

  const handleMintIncrement = useCallback(
    incType => {
      if (mintQuantity > 0) {
        if (incType === 'dec') {
          setMintQuantity(mintQuantity - 1);
        } else {
          setMintQuantity(mintQuantity + 1);
        }
      }
    },
    [mintQuantity, setMintQuantity],
  );

  return (
    <Container>
      <Header />
      <CoverSection height={documentWidth > screenBreakpoints.md ? 800 : 720}>
        <StarBackground
          numberOfStars={5000}
          height={documentWidth > screenBreakpoints.md ? 800 : 720}
        />
        <ImageCarousel images={coverImages} />
        <CoverTitle data-aos="zoom-in-down">
          <h1>BILLIONAIRE</h1>
          <h1>LYNX CLUB</h1>
        </CoverTitle>
        <MintContainer data-aos="fade-up">
          <IncrementContainer>
            <button type="button" onClick={() => handleMintIncrement('dec')}>
              <FiMinus />
            </button>
            <span>{mintQuantity}</span>
            <button type="button" onClick={() => handleMintIncrement('inc')}>
              <FiPlus />
            </button>
          </IncrementContainer>
          <Button onClick={handleMintButtonClick}>MINT HERE</Button>
        </MintContainer>
      </CoverSection>
      <AboutSection>
        <SectionTitle data-aos="fade-down">ABOUT</SectionTitle>
        <AboutSectionContent data-aos="fade-right">
          <AboutSectionCover>
            <img src={astronautCat} alt="About Lynx Club" data-aos="zoom-in" />
            {documentWidth > screenBreakpoints.md && (
              <Button data-aos="fade-up" dark onClick={handleMintButtonClick}>
                MINT HERE
              </Button>
            )}
          </AboutSectionCover>
          <AboutSectionText>
            <p>
              The Billionaire Lynx Club (BLC) is a private collection of 10,000
              unique characters. With each Lynx comes proof-of-ownership stored
              on the Ethereum network as an ERC-721 Non-Fungible Token (NFT).
              <br />
              <br />
              Acquiring one of them will give you access to an ever-growing
              community of investors, entrepreneurs, musicians, content
              creators, real estate professionals, e-commerce experts and more!
              Please see Roadmap and FAQ for more details.
              <br />
              <br />
              Being part of this community will also give you exclusive access
              to investment opportunities, both digital and physical that will
              help build generational wealth among our members and truly make an
              impact in the world. This will be done through a community DAO
              using our native $LYNX token. As a community we will be able to
              vote on the funding our different ventures whether that be
              business or creative related; real estate, e-comm, NFTs, stocks,
              as well as directly fund musicians, filmmakers, artists and more.
              <br />
              <br />
              Picture us as a decentralized entertainment company/launchpad that
              is not solely limited to business ventures. You now have the power
              to directly impact the lives of others for generations to come.
              <br />
              <br />
              We have many ambitious plans for this community but to be
              successful, we need to execute on every level before moving on to
              the next. On top of this, many of our decisions will be made as a
              community.
            </p>
          </AboutSectionText>
          {documentWidth <= screenBreakpoints.md && (
            <Button dark onClick={handleMintButtonClick} data-aos="fade-up">
              MINT HERE
            </Button>
          )}
        </AboutSectionContent>
      </AboutSection>
      <StorySection>
        <SectionTitle data-aos="fade-down">THE STORY</SectionTitle>
        <p data-aos="fade-left">
          An ambitious lynx goes out into the world to try to achieve their
          biggest dreams. Upon doing so, they are met with a lack of support
          from friends, family, and others telling them that their dreams are
          just that.... only dreams.
          <br />
          <br />
          Then one day when stumbling through the forest, they meet another lynx
          who happens to have the same ambitious goals. Then the next day
          another and the next day another and so on. The group of lynx decide
          that instead of trying to succeed in the forest alone, they will join
          forces and help each other achieve their dreams together. Slowly but
          surely and with the support of each other, the lynxes start achieving
          their goals. But in doing so the lynxes soon realize that there must
          be other ambitious lynx in the forest who maybe just need someone to
          lend out their paw. Destined to help the others in the forest, they
          seek out to form a community of like-minded lynxes to help each other
          achieve their wildest dreams.
        </p>
        <StorySectionImages>
          <img data-aos="zoom-in" src={astronautCat} alt="Story" />
          <img data-aos="zoom-in" src={astronautCat} alt="Story" />
          <img data-aos="zoom-in" src={astronautCat} alt="Story" />
        </StorySectionImages>
      </StorySection>
      <RoadmapSection>
        <SectionTitle data-aos="fade-down">ROADMAP</SectionTitle>
        <Timeline roadmapData={roadmapData} />
        <Button dark onClick={handleMintButtonClick} data-aos="fade-up">
          MINT HERE
        </Button>
      </RoadmapSection>
      <DevelopmentRoadmapSection>
        <ImageBackground
          numberOfImages={20}
          imageSet={[laserCat, astronautCat]}
          containerHeight={900}
        />
        <SectionTitle data-aos="fade-down">DEVELOPMENT ROADMAP</SectionTitle>
        {documentWidth > screenBreakpoints.md ? (
          <TextCarousel items={developmentRoadmapData} />
        ) : (
          <DevelopmentRoadmapItemContainer>
            {developmentRoadmapData.map(devRoadmapData => {
              return (
                <DevelopmentRoadmapItem key={devRoadmapData.id}>
                  <h3>{devRoadmapData.title}</h3>
                  <p>{devRoadmapData.description}</p>
                </DevelopmentRoadmapItem>
              );
            })}
          </DevelopmentRoadmapItemContainer>
        )}
      </DevelopmentRoadmapSection>
      <MeetTheClubSection data-aos="fade-right">
        <SectionTitle data-aos="fade-down">
          MEET THE BILLIONAIRE LYNX CLUB
        </SectionTitle>
        <p data-aos="fade-left">
          With over 170+ hand-drawn traits, owning a Billionaire Lynx comes with
          an exclusive membership to a closed group of collectors. This
          community is made of like-minded Lynx who desire success at the
          highest level.
        </p>
        <Button data-aos="fade-up" dark>
          Join Discord
        </Button>
      </MeetTheClubSection>
      <QuestionSection>
        <SectionTitle data-aos="fade-down">HAVE A QUESTION?</SectionTitle>
        <CollapseList data-aos="fade-right" items={questions} />
        <Button data-aos="fade-up" onClick={handleMintButtonClick}>
          Mint Here
        </Button>
      </QuestionSection>
      <TeamSection>
        <SectionTitle data-aos="fade-down">OUR TEAM</SectionTitle>
        <TeamMembers>
          {teamMembers.map(teamMember => {
            return (
              <TeamMemberCard data-aos="zoom-in" key={teamMember.id}>
                <img src={teamMember.image} alt={teamMember.name} />
                <h5>{teamMember.name}</h5>
                <span>{teamMember.role}</span>
              </TeamMemberCard>
            );
          })}
        </TeamMembers>
      </TeamSection>
      <Footer />
    </Container>
  );
};

export default LandingPage;
