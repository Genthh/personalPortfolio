import React, { useState } from "react";
import Slider from "./controlled/Slider";

const slides = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Metdaan",
    located: "(Pristina, Kosovo)",
    duration: "May 2022 / Present",
    content:
      "Spearheaded the development of responsive, scalable web applications using React.js and Tailwind CSS. Ensured robust, maintainable code and captivating user interfaces. Integrated TypeScript to enhance system reliability and maintainability. Leveraged Zustand and custom React hooks to streamline state management, improving performance and responsiveness.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Pabau Clinic Software",
    located: "(Pristina, Kosovo)",
    duration: "May 2022 / May 2023",
    content:
      "I built front-end solutions for busy cinema booking systems using React.js and Less. I improved the system's structure and user experience, and enhanced data handling and UI performance by using GraphQL and Hasura for efficient data syncing",
  },
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      <Slider
        slides={slides}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};

export default App;
