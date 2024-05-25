import React from 'react';
import './styles.css';
import { BsInfoCircleFill } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiAdobeaftereffects } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import drawingIcon from "../../images/dicon.png";
import readingIcon from "../../images/r.png";
import listeningIcon from "../../images/listening.png";
import lifestyleIcon from "../../images/lifestyle.png";
import watchingIcon from "../../images/tv.png";

import { Tilt } from 'react-tilt'; 
import Lottie from 'lottie-react';
import Coder from '../../LottieFiles/animation.json'; 

const Skills = ({ id }) => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="SkillPage">
        <div className="SkillText">
          <div className="skill-container" id={id}>
            <div className="skill-box">
              <h2>Languages</h2>
              <div className="skillset">
                <abbr title='C++'><CgCPlusPlus className='techLogo CgCPlusPlus' /></abbr>
                <abbr title='HTML 5'><TbBrandHtml5 className='techLogo TbBrandHtml5' /></abbr>
                <abbr title='JavaScript'><TbBrandJavascript className='techLogo TbBrandJavascript' /></abbr>
              </div>
            </div>
            <div className="skill-box">
              <h2>Libraries and Frameworks</h2>
              <div className="skillset">
                <abbr title='ReactJS'><SiReact className='techLogo SiReact' /></abbr>
                <abbr title='CSS 3'><TbBrandCss3 className='techLogo TbBrandCss3' /></abbr>
                <abbr title='Git/Github'><DiGit className='techLogo DiGit' /></abbr>
                <abbr title='NPM'><IoLogoNpm className='techLogo IoLogoNpm' /></abbr>
                <abbr title='Bootstrap'><SiBootstrap className='techLogo SiBootstrap' /></abbr>
                <abbr title='React Router'><SiReactrouter className='techLogo SiReactrouter' /></abbr>
              </div>
            </div>
            <div className="skill-box">
              <h2>Tools & Systems</h2>
              <div className="skillset">
                <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo SiVisualstudiocode' /></abbr>
                <abbr title='Windows'><IoLogoWindows className='techLogo IoLogoWindows' /></abbr>
                <abbr title='Figma'><SiFigma className='techLogo SiFigma' /></abbr>
                <abbr title='Photoshop'><SiAdobephotoshop className='techLogo SiAdobephotoshop' /></abbr>
                <abbr title='Illustrator'><SiAdobeillustrator className='techLogo SiAdobeillustrator' /></abbr>
                <abbr title='Blender'><SiBlender className='techLogo SiBlender' /></abbr>
                <abbr title='AfterEffects'><SiAdobeaftereffects className='techLogo SiAdobeaftereffects' /></abbr>
              </div>
            </div>
            <div className="hobbies-box">
              <h2>Hobbies</h2>
              <div className="hobbieset">
                <abbr title='Drawing'><img src={drawingIcon} alt='Drawing' className='hobbyLogo drawing' /></abbr>
                <abbr title='Reading'><img src={readingIcon} alt='Reading' className='hobbyLogo reading' /></abbr>
                <abbr title='Listening'><img src={listeningIcon} alt='Listening' className='hobbyLogo listening' /></abbr>
                <abbr title='Watching'><img src={watchingIcon} alt='Watching' className='hobbyLogo watching' /></abbr>
                <abbr title='Lifestyle'><img src={lifestyleIcon} alt='Lifestyle' className='hobbyLogo lifestyle' /></abbr>
              </div>
            </div>
          </div>
        </div>
        <div className="TiltWrapper">
          <Tilt>
            <Lottie 
              className="Animation" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Skills;
