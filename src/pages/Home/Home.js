import React, { useContext } from 'react';
// import './Home.css';
import './Home.scss';
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaMailBulk,
  FaFilePdf,
  FaMobileAlt
} from 'react-icons/fa';

import Layout from '../../components/Layout/Layout';
import { ThemeContext } from '../../context/ThemeContextProvider';
import Photos from '../../components/Photos/Photos';
import Resume from '../../components/Resume/wilken-resume.pdf';
const Home = () => {
  const { isColored } = useContext(ThemeContext);
  return (
    <Layout>
      <main>
        <section id="about-me">
          <div className="about-me__smallcircle-top"></div>
          <div className="about-me__smallcircle-left"></div>
          <div className="about-me__smallcircle-right"></div>
          <div className="about-me__item">
            <div className="section-title">About Me</div>
            <div className="about-me__description">
              A collaborative and responsible developer, capable of
              communicating cross-functionally, and a creative problem solver
              and innovative thinker that has a passion and determination to
              uncover unique things and transform ideas into action with
              systems-oriented thinking and intelligent planning.
            </div>
          </div>
          <div className="about-me__item vertical-line">
            <div className="about-me__item--contacts">
              <div>
                <span className="about-me__item2--contact--logo">
                  <FaMobileAlt />
                </span>
                +63927-219-7087
              </div>
              <div>
                <span className="about-me__item--contact--logo">
                  <FaMapMarkerAlt />
                </span>
                Polomolok, South Cotabato, Philippines
              </div>
              <div>
                <span className="about-me__item--contact--logo">
                  <FaMailBulk />
                </span>
                <a href="mailto:monterowilken311@gmail.com">
                  monterowilken311@gmail.com{' '}
                </a>
              </div>
              <div>
                <span className="about-me__item--contact--logo">
                  <FaLinkedin />
                </span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/wilken-montero311/"
                  rel="noopener noreferrer"
                >
                  LinkedIn® Profile
                </a>
              </div>
              <div>
                <span className="about-me__item--contact--logo">
                  <FaGithub />
                </span>
                <a
                  target="_blank"
                  href="https://github.com/wilken311"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <span className="about-me__item--contact--logo">
                  <FaFilePdf />
                </span>
                <a target="_blank" href={Resume} rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="works">
          <div className="works__smallcircle-left"></div>
          <div className="works__smallcircle-right"></div>
          <div className="section-title">Works</div>

          <div className="work__item">
            <div className="work__item--image-container">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/f_auto,q_auto/v1/my-portfolio/vfjrei6dl0xmasl2uhsw"
                name="lamion"
              />
            </div>
            <div className="work__item--info-container">
              <div className="work__item--info_title">
                Lamion - Food Catering Services
              </div>
              <div className="work__item--info_tech-used">NextJS, MongoDB</div>
              <p className="work__item--info_description">
                A comprehensive web application built for Lamion Food Catering
                Services that aimed to address some of their challenges in their
                daily operations. The system provides more efficacy and accuracy
                from the ordering system, scheduling system, reporting
                functionality (e.g., how many meals to cook and orders), user
                authentication, and more, which leads to enhanced customer
                satisfaction and increased profitability.
              </p>
            </div>
          </div>
          <div className="work__item">
            <div className="work__item--image-container lafamilya_mobile-view">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/f_auto,q_auto/v1/my-portfolio/wbmlzsemdkupifbu4dby"
                name="lafamilya"
              />
            </div>
            <div className="work__item--info-container">
              <div className="work__item--info_title">
                LaFamilya - Online Management Consultancy System
              </div>
              <div className="work__item--info_tech-used">Laravel, MySQL</div>
              <p className="work__item--info_description">
                An online web application built for LaFamilya, where it helps
                manage their day-to-day key financial tasks and activities,
                making the business registration process simpler, faster, more
                efficient, and more transparent. The application covers the
                following features: the user can log all their day-to-day
                transactions, calculate their funds automatically, use secured
                login and authentication, generate customized reports on a need
                basis, and more.
              </p>
            </div>
            <div className="work__item--image-container lafamilya_desktop-view">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/f_auto,q_auto/v1/my-portfolio/wbmlzsemdkupifbu4dby"
                name="lafamilya"
              />
            </div>
          </div>
          <div className="work__item">
            <div className="work__item--image-container">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/v1707544900/my-portfolio/fdzszyn3abmmys2tvzjo.jpg"
                name="wimocinema"
              />
            </div>
            <div className="work__item--info-container">
              <div className="work__item--info_title">Wimo Cinema</div>
              <div className="work__item--info_tech-used">
                ReactJS, SQLite, Raspberry Pi
              </div>
              <p className="work__item--info_description">
                A wi-fi hotspot voucher that enables users to access all movies
                available across the local area network via their mobile or
                laptop. The user can watch the full movie by getting a ticket or
                voucher from the owner. It is a web-based system and has a
                responsive graphics user interface that fits on any device. It
                was originally developed by Fidalgo and customized by me. It is
                designed only to watch movies locally with no internet
                connection. The purpose of this is to provide entertainment for
                those users who do not have internet connections, especially in
                remote areas. It has the following features: the owner can
                upload a movie, generate a ticket, identify the device's IP and
                mac address, secure login and authentication, and more. Also,
                the system has its own local server powered by a Raspberry Pi.
              </p>
            </div>
          </div>
          <div className="work__item">
            <div className="work__item--image-container iot_mobile-view">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/v1707544901/my-portfolio/qfuccembos08r6mt3e6z.jpg"
                name="iot"
              />
            </div>
            <div className="work__item--info-container">
              <div className="work__item--info_title">Automated Lights</div>
              <div className="work__item--info_tech-used">ReactJS, Arduino</div>
              <p className="work__item--info_description">
                An IOT (Internet of Things) project that would control the
                lights. This project allows users to effortlessly control their
                home lighting using their smartphone anywhere (e.g., turn on or
                off the lights), eliminating the need for manual switches and
                providing convenience and flexibility. The system also includes
                a timer feature, allowing users to schedule specific times for
                the lights to turn on or off, as well as a day/night feature
                that automatically turns off or on based on the day and night.
                This project represents the intersection of hardware and
                software, combining IoT technology with web development to
                create a practical and user-friendly solution. Watch Demo:
                &nbsp;
                <a
                  target="_blank"
                  href="https://youtu.be/kni2gCpDakE"
                  rel="noopener noreferrer"
                >
                  https://youtu.be/kni2gCpDakE
                </a>
              </p>
            </div>
            <div className="work__item--image-container iot_desktop-view">
              <Photos
                url="https://res.cloudinary.com/wilken311cloudinary/image/upload/v1707544901/my-portfolio/qfuccembos08r6mt3e6z.jpg"
                name="iot"
              />
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="skills__smallcircle-left"></div>
          <div className="skills__smallcircle-right"></div>
          <div className="section-title">Skills</div>
          <div className="skills__items_container">
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">ReactJS</div>
                  <div className="skills__item--percent">95%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-reactjs ${
                      isColored ? 'theme-colored ' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">NextJS</div>
                  <div className="skills__item--percent">95%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-nextjs ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">NodeJS</div>
                  <div className="skills__item--percent">90%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-nodejs ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">Typescript</div>
                  <div className="skills__item--percent">85%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-typescript ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">Laravel</div>
                  <div className="skills__item--percent">90%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-laravel ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">MongoDB</div>
                  <div className="skills__item--percent">90%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-mongodb ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">SQL</div>
                  <div className="skills__item--percent">95%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-sql ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="skills__item_container">
                <div className="skills__item_info">
                  <div className="skills__item--title">AWS</div>
                  <div className="skills__item--percent">85%</div>
                </div>
                <div
                  className={`${
                    isColored
                      ? 'theme-colored__skills__item_bar'
                      : 'theme-gray__skills__item_bar'
                  }`}
                >
                  <div
                    className={`skills__item_bar--progress-aws ${
                      isColored ? 'theme-colored' : 'theme-skills-gray'
                    }`}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
