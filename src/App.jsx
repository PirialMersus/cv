import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import {BigButton} from "./components/BigButton/Bigbutton";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {MyPortfolio} from "./components/MyPortfolio/MyPortfolio";
import {GetInTouch} from "./components/GetInTouch/GetInTouch";
import ReactTypingEffect from 'react-typing-effect';


const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])


    const [activeBlockNumber, setActiveBlockNumber] = useState(1)
    const [numberOfBlockAfterDelay, setNumberOfBlockAfterDelay] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setNumberOfBlockAfterDelay(activeBlockNumber)
        }, 500)
    }, [activeBlockNumber])

    const finalFirstBlockItemClass = classNames(s.item, s.topLeft, {
        [s.inactiveItem]: activeBlockNumber !== 1
    })
    const finalSecondBlockItemClass = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 2,
        [s.inactiveItem]: activeBlockNumber === 3 || activeBlockNumber === 4
    })
    const finalThirdBlockItemClass = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 3,
        [s.inactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 4
    })
    const finalFourthBlockItemClass = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 4,
        [s.inactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 3
    })
    const commonMiniBlockClass = classNames(s.miniBlock, {[s.visible]: numberOfBlockAfterDelay === 1})

    return (
        <div className={appClassName}>

            <div className={s.wrapForAppear}/>

            <div className={s.mainPicture}>
            </div>
            <div className={s.contentColumn}>
                <section className={finalFirstBlockItemClass}>
                    {activeBlockNumber === 1 &&
                        <div className={commonMiniBlockClass}>
                            <div>
                                <p>HI THERE ! I'M</p>
                                <h2>GENA FESENKO</h2>
                                <div>
                                    <ReactTypingEffect
                                        className={s.typedText}
                                        cursor={' '}
                                        text={["REACT", "JAVASCRIPT", "DEVELOPER"]}
                                        eraseDelay={1000}
                                        typingDelay={1000}
                                        speed={50}
                                        eraseSpeed={50}
                                    />
                                </div>
                            </div>
                        </div>}
                </section>

                <section className={finalSecondBlockItemClass}>
                    {activeBlockNumber !== 2 &&
                        <div className={commonMiniBlockClass}
                             onClick={() => {
                                 setActiveBlockNumber(activeBlockNumber === 2 ? 1 : 2)
                             }}>
                            <BigButton
                                firstWorld='ABOUT'
                                secondWorld='ME'
                            />
                        </div>}
                    {activeBlockNumber === 2 && <AboutMe
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setActiveBlockNumber}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalThirdBlockItemClass}>
                    {activeBlockNumber !== 3 &&
                        <div className={commonMiniBlockClass}
                             onClick={() => {
                                 setActiveBlockNumber(activeBlockNumber === 3 ? 1 : 3)
                             }}
                        >
                            <BigButton
                                firstWorld={'MY'}
                                secondWorld={'PORTFOLIO'}
                                visibilityCondition={numberOfBlockAfterDelay === 1}
                            />
                        </div>}
                    {activeBlockNumber === 3 && <MyPortfolio
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setActiveBlockNumber}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalFourthBlockItemClass}>
                    {activeBlockNumber !== 4 &&
                        <div className={commonMiniBlockClass}
                             onClick={() => {
                                 setActiveBlockNumber(activeBlockNumber === 4 ? 1 : 4)
                             }}
                        >
                            <BigButton
                                firstWorld={'GET'}
                                secondWorld={'IN TOUCH'}
                                visibilityCondition={numberOfBlockAfterDelay === 1}/>
                        </div>}
                    {activeBlockNumber === 4 && <GetInTouch
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setActiveBlockNumber}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}

                </section>
            </div>

        </div>
    )
}

export default App;
