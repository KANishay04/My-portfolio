import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill, BsGithub } from "react-icons/bs"; 
import "./styles.css"; 
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSeven from "../../images/image7.png";
import ImageTwelve from "../../images/image12.png";
import ImageSixteen from "../../images/image16.png"
import ImageTwentyTwo from "../../images/image22.png"
import ImageTwentyFour from "../../images/image24.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioData = [
  {
    id: 2,
    name: "3D Music website",
    image: ImageTwentyFour,
    link: "https://3-d-music.vercel.app/",
    description:
      "Бұл вепсайт HTML CSS  те жазылған.Музыкалық вепсайтта parallax,scroll сияқты тәсілдер қолданылған",
    github: "https://github.com/KANishay04/3D.music",
  },
  {
    id: 2,
    name: "TO-DO-List",
    image: ImageOne,
    link: "https://todo-list-xi-three-90.vercel.app/",
    description:
      "Орындайтын жұмыстар тізімін реттеуге арналған вепсайт",
    github: "https://github.com/KANishay04/Todo-list",
  },
  {
    id: 2,
    name: "Apollo form",
    link: "https://form-apollo-grapqhl.vercel.app/",
    image: ImageTwo,
    description:
      "Бұл сайт арнайы базасыз ақпараттардың серверге баруын қадағалауға арналған кішігірем вепсайт.",
    github:"https://github.com/KANishay04/form-apollo-grapqhl",
  },
  {
    id: 2,
    name: "PWA adboard",
    image: ImageThree,
    link: "https://pwa-adboard.vercel.app/",
    description:
      "хабарландыруларды көруге арналған интерактивті тақта",
      github:"https://github.com/KANishay04/pwa-adboard",
  },
  {
    id: 2,
    name: "Image Gallery React",
    image: ImageFour,
    link: "https://image-gallery-react-mu.vercel.app/",
    description:
      "Галлерея api  қолдану арқылы жасалған",
    github:"https://github.com/KANishay04/Image-Gallery-React",
  },
  {
    id: 2,
    name: "Ad-board",
    image: ImageFive,
    link: "https://ad-board-pi.vercel.app/",
    description:
      "Интерактивті хабарландыру тақтасы",
    github:"https://github.com/KANishay04/ad-board",
  },
  
  {
    id: 2,
    name: "Expense-tracker",
    image: ImageTwelve,
    link: "https://expense-tracker-redux-three.vercel.app/",
    description:
      "Expense tracker шығын мен кірістерді бақылауға арналған вепсайт",
    github:"https://github.com/KANishay04/expense-tracker-redux",
  },
  {
    id: 2,
    name: "My-App",
    image: ImageSeven,
    link: "https://my-app-phi-five-51.vercel.app/",
    description:
      "Context,tooltip,hoc time ",
    github:"https://github.com/KANishay04/my-app",
  },
  {
    id: 3,
    name: "Music website",
    image: ImageSixteen,
    link: "https://www.behance.net/gallery/186634029/HarmonyHub-music-website/modules/1055248085",
    description:
      "Figma UI/UX  музыкалық вепсайт  ",
  },
  {
    id: 3,
    name: "Bee",
    image: ImageTwentyTwo,
    link: "https://www.behance.net/gallery/195522337/Dash-Dashboard-UI-Glassmorphism-UI-UIUX-Design",
    description:
      "Bee fly animation 2d blender  ",
  },
  
 
  
 
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000 
    });
  }, []);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData
            .filter(
              (item) =>
                filteredValue === 1 || item.id === filteredValue
            )
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="fade-up" // Define AOS animation here
                data-aos-duration="1000" // Define duration here (in milliseconds)
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      {item.github && ( // Check if github link exists
                        <BsGithub
                          size={30}
                          className="github-icon"
                          onClick={() =>
                            window.open(item.github, "_blank")
                          }
                        />
                      )}
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => window.open(item.link, "_blank")}>
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;