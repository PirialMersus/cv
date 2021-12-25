import React, {useEffect, useState} from "react";
import s from './InnerComponentBottomLeft.module.scss';
import winterAdventure from '../../img/imagecompressor/winterAdventure-min.jpg';
import board from '../../img/imagecompressor/board-min.jpg';
import todo from '../../img/imagecompressor/todo-min.png';
import allWorks from '../../img/imagecompressor/allWorks_final-min.jpg';
import testLanding from '../../img/imagecompressor/siteScreen-min.jpg';
import niceSlider from '../../img/imagecompressor/slider_final-min.jpg';
import tableLayout from '../../img/imagecompressor/tableLayout-min.jpg';
import pokemonGame from '../../img/imagecompressor/pokemonGame-min.jpg';
import petDesktopLayout from '../../img/imagecompressor/petDesktopLayout-min.jpg';
import counter from '../../img/imagecompressor/counter_final-min.jpg';
import infiniteTable from '../../img/imagecompressor/infiniteTable-min.jpg';
import payForm from '../../img/imagecompressor/payForm-min.jpg';
import niceGallery from '../../img/imagecompressor/niceGallery-min.jpg';
import gitHubUserSearch from '../../img/imagecompressor/gitHubUserSearcher-min.jpg';
import ignatHw from '../../img/imagecompressor/ignat-min.jpg';
import aimGame from '../../img/imagecompressor/aim_final-min.jpg';
import socialNetwork from '../../img/imagecompressor/socNetwork-min.jpg';
import dragAndDrop from '../../img/imagecompressor/dragAndDrop-min.jpg';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import '../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons/faSuitcase";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/faSignOutAlt";

const classNames = require('classnames');

const images = [
    {
        image: winterAdventure,
        title: 'winter adventure landing',
        description: 'HTML, JS, JQUERY, LazyLoading,  EmailJs',
        github: 'https://github.com/PirialMersus/PirialMersus.github.io',
        demo: 'https://pirialmersus.github.io'
    },
    {
        image: board,
        title: 'board',
        description: 'HTML, JS, CSS',
        github: 'https://github.com/PirialMersus/board',
        demo: 'https://pirialmersus.github.io/board/'
    },
    {
        image: todo,
        title: 'todolist',
        description: 'React, Redux, JS, TDD (Jest, Snapshot testing, Storybook, RestAPI, MaterialUI, HTML/CSS,hooks',
        github: 'https://github.com/PirialMersus/todolist-incubator-ts',
        demo: 'https://PirialMersus.github.io/todolist-incubator-ts'
    },
    {
        image: allWorks,
        title: 'A lot of works',
        description: 'JavaScript, HTML, CSS, LocalStorage, fetch, 3D, JSON',
        github: 'https://github.com/PirialMersus/frontend-js',
        demo: 'https://pirialmersus.github.io/frontend-js/'
    },
    {
        image: testLanding,
        title: 'test yoga landing',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/frontend-js',
        demo: 'https://pirialmersus.github.io/frontend-js/'
    },
    {
        image: niceSlider,
        title: 'nice slider',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/nice-slider',
        demo: 'https://pirialmersus.github.io/nice-slider/'
    },
    {
        image: tableLayout,
        title: 'table layout',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/email-letter-test2',
        demo: 'https://pirialmersus.github.io/email-letter-test2/'
    },
    {
        image: pokemonGame,
        title: 'pokemon game',
        description: 'React, Redux, JS, RestAPI, Routs, Context, HTML/CSS, Hooks, Firebase',
        github: 'https://github.com/PirialMersus/pokemon-game',
        demo: 'https://pirialmersus.github.io/pokemon-game'
    },
    {
        image: petDesktopLayout,
        title: 'pet desktop layout',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/goit-fe-course/tree/master/html-css/module-06',
        demo: 'https://pirialmersus.github.io/goit-fe-course/html-css/module-06/index.html'
    },
    {
        image: counter,
        title: 'counter',
        description: 'React, Redux, TS, LocalStorage, HTML/CSS, hooks, JS',
        github: 'https://github.com/PirialMersus/counter-monday-exam',
        demo: 'http://pirialmersus.github.io/counter-monday-exam'
    },
    {
        image: gitHubUserSearch,
        title: 'search github user',
        description: 'React, Redux, TS, LocalStorage, HTML/CSS, hooks, JS',
        github: 'https://github.com/PirialMersus/searchGitHubUser',
        demo: 'http://pirialmersus.github.io/searchGitHubUser'
    },
    {
        image: payForm,
        title: 'payload form',
        description: 'React, Redux, TS, LocalStorage, HTML/CSS, hooks, JS',
        github: 'https://github.com/PirialMersus/searchGitHubUser',
        demo: 'http://pirialmersus.github.io/searchGitHubUser'
    },
    {
        image: infiniteTable,
        title: 'infinite table',
        description: 'JS, LESS, HTML',
        github: 'https://github.com/PirialMersus/infiniteTable',
        demo: 'https://pirialmersus.github.io/infiniteTable/'
    },
    {
        image: niceGallery,
        title: 'nice gallery',
        description: 'JS, HTML, CSS',
        github: 'https://github.com/PirialMersus/nice-slider',
        demo: 'https://pirialmersus.github.io/nice-slider/'
    },
    {
        image: ignatHw,
        title: 'react tasks',
        description: 'React, JS, TS, Redux, HTML, CSS',
        github: 'https://github.com/PirialMersus/homeworks-by-ignat',
        demo: 'https://PirialMersus.github.io/homeworks-by-ignat'
    },
    {
        image: socialNetwork,
        title: 'social network',
        description: 'React, Redux, JS, RestAPI, HTML, CSS, functional and classes components, hooks, connect, HOC',
        github: 'https://github.com/PirialMersus/social-network-with-typescript',
        demo: 'https://pirialmersus.github.io/social-network-with-typescript/'
    },
    {
        image: dragAndDrop, title: 'drag and drop',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/drag_And_Drop',
        demo: 'https://pirialmersus.github.io/drag_And_Drop/'
    },
    {
        image: aimGame,
        title: 'aim game',
        description: 'JavaScript, HTML, CSS',
        github: 'https://github.com/PirialMersus/aim-game',
        demo: 'https://pirialmersus.github.io/aim-game/'
    },
]

export const InnerComponentBottomLeft = (props) => {
    const [activeSlide, setActiveSlide] = useState(1)
    const [isSliderShown, setIsSliderShown] = useState(false)
    // const [isSliderShownWithDelay, setIsSliderShownWithDelay] = useState(false)
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsSliderShownWithDelay(isSliderShown)
    //     }, 1000)
    // }, [isSliderShown])

    const onImageClickHandler = (index) => {
        setIsSliderShown(true)

        setActiveSlide(index)
    }

    return (
        <div className={classNames(s.container, {[s.visible]: props.numberOfBlockAfterDelay === 3})}>
            <h2>
                <span>MY</span> <span>PORTFOLIO</span>
            </h2>

            <div className={s.divideLineBlock}>
                <div className={s.line}/>
                <div className={s.letterIcon}>
                    <FontAwesomeIcon icon={faSuitcase}/>
                </div>
                <div className={s.line}/>
            </div>

            <div className={`${s.imagesContainer} ${isSliderShown === true && s.onActiveSlider}`}>
                {images.map((el, index) => (
                    <div className={s.card} key={index}
                         onClick={() => {
                             onImageClickHandler(index)
                         }}
                    >
                        <div className={s.box}>
                            <div className={s.imgBx}>
                                <img src={el.image} alt="image"/>
                            </div>
                            <div className={s.contentBx}>
                                <div>
                                    <h3>{el.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={`${s.sliderWrapper} ${isSliderShown === true && s.activeSlider}`}
            >

                <AwesomeSlider
                    organicArrows
                    className='sliderWrapper'
                    // style={cssModule}
                    selected={activeSlide}
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                >

                    {images.map((el, index) => (
                        <div data-src={el.image} key={index}>
                            <div className={s.sliderDescriptionBackground} onClick={() => {
                                setIsSliderShown(false)
                            }}>
                                <h5 className={s.sliderTitle}>{el.title}</h5>
                                <div className={s.sliderLine}/>
                                <p className={s.sliderDescription}>{el.description}</p>
                                <div className={s.sliderLine}/>
                                <div className={s.links}>
                                    <div><a href={el.github}>gitHub</a></div>
                                    <div><a href={el.demo}>Demo</a></div>

                                </div>
                            </div>
                        </div>
                    ))}

                </AwesomeSlider>
            </div>

            <div className={s.closeButton}>
                <FontAwesomeIcon icon={faSignOutAlt} className={s.fontAwesome} onClick={() => {
                    props.setNumberOfActiveBlock(1)
                }}/>
            </div>
        </div>
    )
}
