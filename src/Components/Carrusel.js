import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import styled from 'styled-components';

const items = [
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312910338_10229356811483332_5041438500088720951_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=jTruaoGeoSsAX_KARcp&_nc_ht=scontent.fscl4-1.fna&oh=00_AfDXptDdAnjU_9lSzr4OrtVlMHbKhMrGnFnSP68FUAzRpQ&oe=63678849',
    altText: 'FUNCIONA MIERDA',
    caption: '',
    key: 1,
  },
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312953564_10229356811083322_3008666350763367068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=wyAVr8xOrUYAX_U7xQQ&_nc_ht=scontent.fscl4-1.fna&oh=00_AfC_FBIxFzGOPTkHA44OLsXORlhHmxSGXa5Tx3vd_lv-7A&oe=636795A0',
    altText: 'Termografia',
    caption: '',
    key: 2,
  },
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/313001398_10229356812643361_5479313469568175856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=CSDU0OykJuoAX-UbkCA&_nc_ht=scontent.fscl4-1.fna&oh=00_AfC5DMZre22g_v8FbwF8nfn9sCfeUPVdGgFSq3zYm_xZFQ&oe=636730FD',
    altText: 'Supervision de obras',
    caption: '',
    key: 3,
  },
];
const items2 = [
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312910338_10229356811483332_5041438500088720951_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=jTruaoGeoSsAX_KARcp&_nc_ht=scontent.fscl4-1.fna&oh=00_AfDXptDdAnjU_9lSzr4OrtVlMHbKhMrGnFnSP68FUAzRpQ&oe=63678849',
    altText: 'Fotogrametria',
    caption: '',
    key: 1,
  },
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312953564_10229356811083322_3008666350763367068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=wyAVr8xOrUYAX_U7xQQ&_nc_ht=scontent.fscl4-1.fna&oh=00_AfC_FBIxFzGOPTkHA44OLsXORlhHmxSGXa5Tx3vd_lv-7A&oe=636795A0',
    altText: 'Termografia',
    caption: '',
    key: 2,
  },
  {
    src: 'https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/313001398_10229356812643361_5479313469568175856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=CSDU0OykJuoAX-UbkCA&_nc_ht=scontent.fscl4-1.fna&oh=00_AfC5DMZre22g_v8FbwF8nfn9sCfeUPVdGgFSq3zYm_xZFQ&oe=636730FD',
    altText: 'Supervision de obras',
    caption: '',
    key: 3,
  },
];

export function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <Imagen src={item.src} alt={item.altText} 
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="carousel slide"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      style={{
        height: '50vh',
        width: '50vw',
        borderRadius: '10px'
      }}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}

      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export function Carrusel2 (args){
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);

      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items2.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      };

      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items2.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      };

      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      };

  const slides = items2.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Imagen2 src={item.src} alt={item.altText} 
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      style={{
        height: 'auto',
        width: 'auto',
        borderRadius: '10px'
      }}

    >
      <CarouselIndicators
        items={items2}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

const Imagen = styled.img`
    
    @media screen and (max-width: 600px){
        display: none;
    }
    @media screen and (min-width: 600px){
        height: 50vh;
        width: 50vw;
        border-radius: 10px;
    }
`
const Imagen2 = styled.img`
    height: 40vh;
    width: 80vw;
    border-radius: 10px;
    @media screen and (max-width: 600px){

    }
    @media screen and (min-width: 600px){
      
    }
`
