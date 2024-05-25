import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './styles.css';
import { MdWork, MdSchool } from 'react-icons/md';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="#000" 
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className={`timeline__experience__vertical-timeline-element ${activeSection === 'experience' ? 'active' : ''}`}
                contentStyle={{
                  background: 'none',
                  color: 'rgb(91, 91, 91)',
                  border: '1.5px solid black'
                }}
                date={item.duration}
                icon={<MdWork />}
                iconStyle={{
                  background: '#fff',
                  color: '#f197a3',
                  border: '3px solid #f197a3'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="#000" 
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className={`timeline__education__vertical-timeline-element ${activeSection === 'education' ? 'active' : ''}`}
                contentStyle={{
                  background: 'none',
                  color: 'rgb(91, 91, 91)',
                  border: '1.5px solid black'
                }}
                date={item.duration}
                icon={<MdSchool />}
                iconStyle={{
                  background: '#fff',
                  color: '#f197a3',
                  border: '3px solid #f197a3'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
