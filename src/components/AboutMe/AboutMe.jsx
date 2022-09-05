import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faBriefcase,
    faCalendar,
    faEdit,
    faFilePdf,
    faGraduationCap,
    faStar,
    faStarHalfAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import cvPdf from "../../doc/Fesenko Gennadii Front.pdf";
import {faStar as emptyFaStar} from '@fortawesome/free-regular-svg-icons'
import s from './AboutMe.module.scss';
import myPhoto from "./../../img/myPhoto.jpg"
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

const classNames = require('classnames');

const buttonsNames = [
    {
        btnName: 'experience',
        btnIcon: faBriefcase
    },
    {
        btnName: 'education',
        btnIcon: faGraduationCap
    },
    {
        btnName: 'skills',
        btnIcon: faStar
    }
]

export const AboutMe = ({numberOfBlockAfterDelay, setNumberOfActiveBlock}) => {

    const initSlidesNames = ['active', 'neutral', 'passive']

    const [activeSlideNumber, setActiveSlideNumber] = React.useState(0)
    const [slides, setSlides] = React.useState(initSlidesNames)


    function slideClickHandler(slide) {
        if (slide !== activeSlideNumber) {
            setSlides(prevState => {
                return changeSlidesNumbers(slide, prevState)
            })
            setActiveSlideNumber(slide)
        }
    }

    function changeSlidesNumbers(slide, prevState) {
        let indexPrevActiveElem;
        prevState.forEach((el, index) => {
            if (el === 'active') {
                indexPrevActiveElem = index;
            }
        })

        const tempSlides = ['', '', '']
        tempSlides[slide] = 'active'
        tempSlides[indexPrevActiveElem] = 'neutral'
        tempSlides.forEach((slide, index) => {
                if (slide !== 'active' && slide !== 'neutral') {
                    tempSlides[index] = 'passive'
                }
            }
        )
        return tempSlides
    }

    return (
        <div className={classNames(s.container, {[s.visible]: numberOfBlockAfterDelay === 2})}>
            <h2><span>ABOUT</span> <span>ME</span></h2>
            <div className={s.divideLineBlock}>
                <div className={s.line}/>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faAddressCard}/>
                </div>
                <div className={s.line}/>
            </div>
            <div className={s.imgPlusPersonalInfosWrap}>
                <div className={s.mainPictureInner}>
                    <img src={myPhoto} alt="avatar"/>
                </div>
                <div className={s.personalInfosBlock}>
                    <div>
                        <FontAwesomeIcon icon={faUser}/>
                        <h6>PERSONAL INFOS</h6>
                    </div>
                    <div className={s.myCommonInfo}>
                        <p>
                            Versatile Front-End Developer with experience implementing web apps and internal frameworks,
                            specializing in SPA development utilizing React ecosystem.
                        </p>
                    </div>
                    <div className={s.exactlyMyInfo}>
                        <ul className={classNames(s.lists, s.list1)}>
                            <li><span className={s.fontWeight_700}>First Name: </span>Gennadii</li>
                            <li><span className={s.fontWeight_700}>Last Name: </span>Fesenko</li>
                            <li><span className={s.fontWeight_700}>Date of birth: </span>5 october 1985</li>
                            <li><span className={s.fontWeight_700}>Nationality: </span>Ukraine</li>
                            <li><span className={s.fontWeight_700}>Freelance/remote: </span>Available</li>
                        </ul>
                    </div>
                    <div className={s.exactlyMyInfo}>
                        <ul className={classNames(s.lists, s.list2)}>
                            <li><span className={s.fontWeight_700}>Phone: </span>+38 067 399 19 67</li>
                            <li><span className={s.fontWeight_700}>Address: </span>Odessa, Ukraine</li>
                            <li><span className={s.fontWeight_700}>Email: </span>pirialmersus@gmail.com</li>
                            <li><span className={s.fontWeight_700}>Spoken Languages: </span>Russian - English</li>
                            <li><span className={s.fontWeight_700}>Skype: </span>pirial_mersus</li>
                        </ul>
                    </div>
                    <a href={cvPdf} className={s.btn} download>
                        Download CV <FontAwesomeIcon icon={faFilePdf}/>
                    </a>
                    <a href="https://www.instagram.com/gennadii_yds/"
                       className={classNames(s.btn, s.btnBlog, s.fontWeight_700)}>
                        Hobby <FontAwesomeIcon icon={faEdit}/>
                    </a>
                </div>
            </div>
            <div className={s.sliderWrap}>

                <div className={s.controlsBlock}>
                    {buttonsNames.map((button, idx) => (
                        <div className={`${s.controlBtn} ${activeSlideNumber === idx && s.active}`}
                             onClick={() => slideClickHandler(idx)}
                             key={button.btnName}
                        >
                            <FontAwesomeIcon icon={button.btnIcon}/>
                            <h6>{button.btnName}</h6>
                        </div>
                    ))}
                </div>

                <div className={s.slidesBlockWrap}>
                    <div className={s.slidesBlock}>
                        <div className={`${s.slide} ${s[slides[0]]}`}
                             onClick={() => slideClickHandler(0)}>
                            <div className={s.resumeCardHeader}>
                                <FontAwesomeIcon icon={faBriefcase}/>
                                <h6>Experience</h6>
                            </div>
                            <div className={s.resumeCardBody}>
                                <div className={s.experience}>
                                    <div className={s.resumeContent}>
                                        <h6>WORKING AS A FRONTEND DEVELOPER AT <span>ATLANTA COMPANY</span>
                                        </h6>
                                        <span className={s.date}><FontAwesomeIcon
                                            icon={faCalendar}/> <span>2021, august - now</span></span>
                                        <p> I am working with Redux, React/Redux, axios, Material-UI library,
                                            Hooks, TypeScript. Also I am creating Rest API. Refactoring, bug fixing,
                                            migrating to TypeScript, registration and login form creation, custom
                                            components development, jest testing, storybook. JavaScript,
                                            TypeScript, React/Redux, RestAPI. As a result, I am improving my
                                            technical and soft skills
                                        </p>
                                    </div>
                                    <span className={s.separator}/>
                                    <div className={s.resumeContent}>
                                        <h6>WORKING AS SMM AND CONTENT MANAGER AT <span>IT COMPANY</span></h6>
                                        <span className={s.date}><FontAwesomeIcon
                                            icon={faCalendar}/> <span>2020 - 2021</span></span>
                                        <p>- Learned how to work in a team<br/>
                                            - Learned how to work with CRM systems<br/>
                                            - Studied coding for myself
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.slide} ${s[slides[1]]}`}
                             onClick={() => slideClickHandler(1)}>
                            <div className={s.resumeCardHeader}>
                                <FontAwesomeIcon icon={faGraduationCap}/>
                                <h6>Education</h6>
                            </div>
                            <div className={s.resumeCardBody}>
                                <div className={s.experience}>
                                    <div className={s.resumeContent}>
                                        <h6><span>IT INCUBATOR</span> BACKEND DEVELOPMENT COURSES</h6>
                                        <span className={s.date}><FontAwesomeIcon
                                            icon={faCalendar}/> <span>2022, April - in process...</span></span>
                                        <p>Express, NestJS, Swagger, MongoDB, PostgreSQL,
                                            Microservices, RabbitMQ, WebSocket, DevOps basics
                                        </p>
                                    </div>
                                    <span className={s.separator}/>

                                    <div className={s.resumeContent}>
                                        <h6><span>IT INCUBATOR FRONTEND DEVELOPMENT COURSES</span>
                                        </h6>
                                        <span className={s.date}><FontAwesomeIcon
                                            icon={faCalendar}/> <span>2020-2021</span></span>
                                        <p>Props (attributes); ECMAScript; Components; connect; Class Components;
                                            Redux-thunk; State vs Redux; HOC; Methods of lifecycle; babel;
                                            create-react-app; Hooks; Presentational & ContainerComponents;
                                            bind; TypeScript; RestAPI; Vanilla JS; Storybook; Ant Design; Jest;
                                            Snapshot; Testing; MaterialUI
                                        </p>
                                    </div>

                                    <span className={s.separator}/>
                                    <div className={s.resumeContent}>
                                        <h6><span>DONETSK NATIONAL TECHNICAL UNIVERSITY</span></h6>
                                        <span className={s.date}><FontAwesomeIcon
                                            icon={faCalendar}/> <span>2008</span></span>
                                        <p>- Electromechanical Faculty, specialty "Electrical systems and networks<br/>
                                            - got a lot of hard and soft skills<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.slide} ${s[slides[2]]}`}
                             onClick={() => slideClickHandler(2)}>
                            <div className={s.resumeCardHeader}>
                                <FontAwesomeIcon icon={faStar}/>
                                <h6>Skills</h6>
                            </div>
                            <div className={s.resumeCardBody}>
                                <div className={s.counterContainer}>
                                    <div className={s.row} id="skills-counter">
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>React</h6>
                                                <p data-star="5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>JavaScript</h6>
                                                <p className={s.icon} data-star="4.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>TypeScript</h6>
                                                <p data-star="4.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>

                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Redux, Thunk</h6>
                                                <p data-star="3">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>LESS, SASS, SCSS</h6>
                                                <p data-star="5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </p>
                                            </div>

                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Git, Github</h6>
                                                <p data-star="3">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>

                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Yarn, NPM</h6>
                                                <p data-star="4.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Axios, RestApi</h6>
                                                <p data-star="3.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>HTML, CSS</h6>
                                                <p data-star="4">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                </p>
                                            </div>

                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>UnitTesting, TDD</h6>
                                                <p data-star="5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStarHalfAlt}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Formik, Material-UI</h6>
                                                <p data-star="4">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className={s.col}>
                                            <div className={s.resumeContent}>
                                                <h6>Storybook</h6>
                                                <p data-star="3.5">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={faStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                    <FontAwesomeIcon icon={emptyFaStar}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faSignOutAlt} className={s.fontAwesome} onClick={() => {
                    setNumberOfActiveBlock(1)
                }}/>
            </div>

        </div>
    )
}
