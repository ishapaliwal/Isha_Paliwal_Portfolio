import React, { useEffect, useState } from "react";
import "../../styles/AnimatedCardSection.css";

const data = [
  {
    id: 1,
    title: "About Me",
    image: "https://picsum.photos/1200/650?random=1",
    link: "/about",
  },
  {
    id: 2,
    title: "Experience",
    image: "https://picsum.photos/1200/650?random=2",
    link: "/experience",
  },
  {
    id: 3,
    title: "Education",
    image: "https://picsum.photos/1200/650?random=3",
    link: "/education",
  },
  {
    id: 4,
    title: "Projects",
    image: "https://picsum.photos/1200/650?random=4",
    link: "/projects",
  },
  {
    id: 5,
    title: "Resume",
    image: "https://picsum.photos/1200/650?random=5",
    link: "/resume",
  },
  {
    id: 6,
    title: "Blogs",
    image: "https://picsum.photos/1200/650?random=6",
    link: "/blogs",
  },
];

const AnimatedCardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const cycleCards = () => {
      setProgressKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    };

    const interval = setInterval(cycleCards, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex(index);
    setProgressKey((prevKey) => prevKey + 1);
  };

  const handleNavigate = (url, event) => {
    event.stopPropagation();
    window.open(url, "_self");
  };

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: `url(${data[activeIndex].image})` }}
      onClick={(e) => handleNavigate(data[activeIndex].link, e)}
    >
      <div key={progressKey} className="progress-bar"></div>

      <div className="cards">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`card ${index === activeIndex ? "active" : ""}`}
            onClick={(e) => handleCardClick(index, e)}
            style={{
              backgroundImage: `url(${item.image})`,
              transform: `translateX(${(index - activeIndex) * 270}px)`,
              zIndex: index === activeIndex ? 5 : 2,
              opacity: index === activeIndex ? 1 : 0.6,
            }}
          >
            <h3 onClick={(e) => handleNavigate(item.link, e)}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCardSection;