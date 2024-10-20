import React, { useState } from 'react';
import './SliderPage.css';
import { revelations } from '../data/revelations.json';

interface typeRevelation {
  chapter: number;
  verses: {
    verse: number;
    text: string;
  }[];
}
[];

export const SliderPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  revelations.map((v: typeRevelation) => {
    // console.log("map", v.chapter)
    // console.log("map", v.verses)
    // v.verses.map((vv) => {
    //     console.log("ttttt", vv.text)
    // })
  });

  const carouselItems = [
    { id: 0, content: '페이지 1', page: 'oksk' },
    { id: 1, content: '페이지 2', page: 'oksk' },
    { id: 2, content: '페이지 3', page: 'oksk' },
    { id: 3, content: '페이지 4', page: 'oksk' },
    { id: 4, content: '페이지 5', page: 'oksk' },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
    console.log('start');
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
    console.log('move');
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // 위로 스와이프
      console.log('up');
      setActiveIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    }

    if (touchStart - touchEnd < -100) {
      // 아래로 스와이프
      console.log('down');
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };
  let pp = '빙그래';
  const pppp = (v) => {
    console.log('data222');
  };
  return (
    <div
      className="read-carousel-container"
      style={{ border: '1px solid red' }}
    >
      {carouselItems.map((item, index) => (
        <div
          style={{ border: '1px solid blue' }}
          key={item.id}
          className={`read-carousel-item ${
            index === activeIndex
              ? 'active'
              : index < activeIndex
              ? 'prev'
              : 'next'
          }`}
        >
          <div>{item.content}</div>
          <div>{item.page}</div>
          <div>
            구구콘
            <TT1 roobv={pppp}></TT1>
          </div>
        </div>
      ))}
      <div
        className="touch-overlay"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

function TT1({ roobv }) {
  return (
    <>
      <div>
        <TT2 roobv={roobv}></TT2>11
      </div>
    </>
  );
}

function TT2({ roobv }) {
  return (
    <>
      <div>
        44<TT3 roobv={roobv}></TT3>55
      </div>
    </>
  );
}
function TT3({ roobv }) {
  roobv();
  return (
    <>
      <div>간다요</div>
    </>
  );
}

export default SliderPage;
//슬라이더와 페이지를 합쳐보면? 지금은 슬라이더가 위에있는데 슬라이더가 아래에 있게 꾸며보자
