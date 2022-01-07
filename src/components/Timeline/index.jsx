import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';

import {
  Container,
  TimelineContainer,
  TimelineItem,
  TimelineLinker,
} from './styles';

import { screenBreakpoints } from '../../utils/screenBreakpoints';

import { useGlobalData } from '../../hooks/global';

const Timeline = ({ roadmapData }) => {
  const timelineContainerRef = useRef(null);
  const { documentWidth } = useGlobalData();

  const [windowScrollY, setWindowScrollY] = useState(0);

  const [timelineLinkerBarHeight, setTimelineLinkerBarHeight] = useState(0);

  const [timelineContainerOffsetTop, setTimelineContainerOffsetTop] =
    useState(0);
  const [timelineContainerHeight, setTimelineContainerHeight] = useState(0);
  const [timelineContainerItems, setTimelineContainerItems] = useState([]);

  useEffect(() => {
    let height = windowScrollY - timelineContainerOffsetTop;
    if (height < 0) {
      height = 0;
    }

    let maxHeight = timelineContainerHeight;
    if (timelineContainerItems.length > 0) {
      maxHeight -=
        timelineContainerItems[timelineContainerItems.length - 1].height -
        timelineContainerItems[timelineContainerItems.length - 1].marginTop;
    }
    if (height > maxHeight) {
      height = maxHeight;
    }
    setTimelineLinkerBarHeight(height);
  }, [
    timelineContainerHeight,
    timelineContainerItems,
    timelineContainerOffsetTop,
    windowScrollY,
  ]);

  const calculateElementPositions = useCallback(() => {
    if (timelineContainerRef) {
      let shiftOffset = Math.floor(
        timelineContainerRef.current.clientHeight / 2,
      );

      if (documentWidth <= screenBreakpoints.sm) {
        shiftOffset = Math.floor(timelineContainerRef.current.clientHeight / 4);
      }

      setTimelineContainerOffsetTop(
        timelineContainerRef.current.offsetTop - shiftOffset,
      );
      setTimelineContainerHeight(timelineContainerRef.current.clientHeight);

      const { children } = timelineContainerRef.current;
      const timelineItems = [];
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        const currentStyle =
          // eslint-disable-next-line no-undef
          child.currentStyle || window.getComputedStyle(child);

        const item = {
          height: child.clientHeight,
          offsetTop: child.offsetTop - shiftOffset,
          marginTop: parseInt(currentStyle.marginTop.replace(/\D+/g, ''), 10),
        };

        timelineItems.push(item);
      }
      setTimelineContainerItems([...timelineItems]);
    }
  }, [documentWidth]);

  useEffect(() => {
    calculateElementPositions();
  }, [calculateElementPositions]);

  const barPosition = useMemo(() => {
    return timelineLinkerBarHeight + timelineContainerOffsetTop;
  }, [timelineContainerOffsetTop, timelineLinkerBarHeight]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-undef
      setWindowScrollY(window.scrollY);
      calculateElementPositions();
    });
  }, [calculateElementPositions]);

  return (
    <Container>
      <TimelineContainer ref={timelineContainerRef}>
        {roadmapData.map((roadmapItem, index) => (
          <TimelineItem
            key={roadmapItem.id}
            barPosition={barPosition}
            offsetTop={
              timelineContainerItems[index] &&
              timelineContainerItems[index].offsetTop
            }
            whiteBackground={roadmapItem.whiteBackground}
            halfWhiteBackground={roadmapItem.halfWhiteBackground}
          >
            {documentWidth > screenBreakpoints.md && (
              <h3>{roadmapItem.title}</h3>
            )}
            <div className="timeline-box-container">
              <div className="timeline-box">
                <span>{roadmapItem.checkpoint}</span>
              </div>
              {index === 0 && (
                <TimelineLinker height={timelineLinkerBarHeight} />
              )}
            </div>
            <div className="timeline-text">
              {documentWidth <= screenBreakpoints.md && (
                <h3>{roadmapItem.title}</h3>
              )}
              <p>{roadmapItem.description}</p>
            </div>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Container>
  );
};

export default Timeline;
