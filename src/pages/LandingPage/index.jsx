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
  RoadmapSectionLine,
  RoadmapTimelineBlockLink,
  RoadmapSectionTimelineItem,
  DevelopmentRoadmapSection,
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
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import astronautCat from '../../assets/astronaut_cat.png';
import laserCat from '../../assets/laser_cat.png';

import { useGlobalData } from '../../hooks/global';

import {
  coverImages,
  questions,
  developmentRoadmapData,
  teamMembers,
} from '../../utils/staticData';

const LandingPage = () => {
  const { mintQuantity, setMintQuantity } = useGlobalData();
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
      <CoverSection>
        <StarBackground numberOfStars={5000} height={800} />
        <ImageCarousel images={coverImages} />
        <CoverTitle>
          <h1>BILLIONAIRE</h1>
          <h1>LYNX CLUB</h1>
        </CoverTitle>
        <MintContainer>
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
        <SectionTitle>ABOUT</SectionTitle>
        <AboutSectionContent>
          <AboutSectionCover>
            <img src={astronautCat} alt="About Lynx Club" />
            <Button dark onClick={handleMintButtonClick}>
              MINT HERE
            </Button>
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
        </AboutSectionContent>
      </AboutSection>
      <StorySection>
        <SectionTitle>THE STORY</SectionTitle>
        <p>
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
          <img src={astronautCat} alt="Story" />
          <img src={astronautCat} alt="Story" />
          <img src={astronautCat} alt="Story" />
        </StorySectionImages>
      </StorySection>
      <RoadmapSection>
        <SectionTitle>ROADMAP</SectionTitle>
        <RoadmapSectionLine>
          <RoadmapSectionTimelineItem>
            <h3>Welcome, Bilionaire Lynx</h3>
            <div className="timeline-box">
              <RoadmapTimelineBlockLink />
              <span>10%</span>
            </div>
            <p>
              Welcome to the Billionaire Lynx Club! You are now part of an
              exclusive club of other like-minded lynx who desire to help each
              other succeed.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem>
            <h3>Worldwide Recognition</h3>
            <div className="timeline-box">
              <span>20%</span>
            </div>
            <p>
              The BLC will use funds from our pre-sale to invest in promotional
              campaigns to spread brand awareness and drive top tier talent to
              our project. We will also be using these funds to purchase a
              rarity.tools ranking for the project.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem>
            <h3>Billionaire Lynx Charity</h3>
            <div className="timeline-box">
              <span>40%</span>
            </div>
            <p>
              $20,000 donation fund will be established and as a community, we
              will vote on the charity of choice to partner with. The charities
              we will be selecting will have the mission to help promote
              entrepreneurship and creative ventures amongst our youth.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem>
            <h3>Billionaire Lynx Fund</h3>
            <div className="timeline-box">
              <span>60%</span>
            </div>
            <p>
              We will set up the BLC community fund and deposit $50,000 for
              ongoing project developments, marketing campaigns, merchandise,
              and more.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem>
            <h3>Billionaire Lynx Merch</h3>
            <div className="timeline-box">
              <span>80%</span>
            </div>
            <p>
              Exclusive member-only merch store begins construction. We want
              this merchandise to make our community proud to wear it.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem halfWhiteBackground>
            <h3>Holders Rewarded</h3>
            <div className="timeline-box">
              <span>90%</span>
            </div>
            <p>
              Exclusive BLC giveaways/airdrops that include sporting/music
              tickets, laptops, phones, NFTs, and more! We want you to
              experience amazing events firsthand and to be given the tools to
              go after your creative ventures.
            </p>
          </RoadmapSectionTimelineItem>
          <RoadmapSectionTimelineItem whiteBackground>
            <h3>Sold Out</h3>
            <div className="timeline-box">
              <span>100%</span>
            </div>
            <p>
              Another $30,000 worth of funds will be deposited to the BLC fund,
              which is set for ongoing project developments, marketing
              campaigns, merchandise, and more.
            </p>
          </RoadmapSectionTimelineItem>
        </RoadmapSectionLine>
        <Button dark onClick={handleMintButtonClick}>
          MINT HERE
        </Button>
      </RoadmapSection>
      <DevelopmentRoadmapSection>
        <ImageBackground
          numberOfImages={20}
          imageSet={[laserCat, astronautCat]}
          containerHeight={900}
        />
        <SectionTitle>DEVELOPMENT ROADMAP</SectionTitle>
        <TextCarousel items={developmentRoadmapData} />
      </DevelopmentRoadmapSection>
      <MeetTheClubSection>
        <SectionTitle>MEET THE BILLIONAIRE LYNX CLUB</SectionTitle>
        <p>
          With over 170+ hand-drawn traits, owning a Billionaire Lynx comes with
          an exclusive membership to a closed group of collectors. This
          community is made of like-minded Lynx who desire success at the
          highest level.
        </p>
        <Button dark>Join Discord</Button>
      </MeetTheClubSection>
      <QuestionSection>
        <SectionTitle>HAVE A QUESTION?</SectionTitle>
        <CollapseList items={questions} />
        <Button onClick={handleMintButtonClick}>Mint Here</Button>
      </QuestionSection>
      <TeamSection>
        <SectionTitle>OUR TEAM</SectionTitle>
        <TeamMembers>
          {teamMembers.map(teamMember => {
            return (
              <TeamMemberCard key={teamMember.id}>
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
