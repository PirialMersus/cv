import React, {useEffect, useState} from 'react';
import s from './App.module.scss'
import {BigButton} from "./components/BigButton/Bigbutton";
import {InnerComponentTopRight} from "./components/InnerComponentTopRight/InnerComponentTopRight";
import {InnerComponentBottomLeft} from "./components/InnerComponentBottomLeft/InnerComponentBottomLeft";
import {InnerComponentBottomRight} from "./components/InnerComponentBottomRight/InnerComponentBottomRight";
import ReactTypingEffect from 'react-typing-effect';


const classNames = require('classnames');

function App() {

    const [appClassName, setClass] = useState(`${s.app}`)

    useEffect(() => {
        setClass(`${s.app} ${s.visible}`)
    }, [])


    const [activeBlockNumber, setNumberOfActiveBlock] = useState(1)
    const [numberOfBlockAfterDelay, setNumberOfBlockAfterDelay] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            setNumberOfBlockAfterDelay(activeBlockNumber)
        }, 1000)
    }, [activeBlockNumber])

    const finalFirstBlock_item_Class = classNames(s.item, s.topLeft, {
        [s.deactiveItem]: activeBlockNumber !== 1
    })
    const finalSecondBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 2,
        [s.deactiveItem]: activeBlockNumber === 3 || activeBlockNumber === 4
    })
    const finalThirdBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 3,
        [s.deactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 4
    })
    const finalFourthBlock_item_Class = classNames(s.item, {
        [s.activeItem]: activeBlockNumber === 4,
        [s.deactiveItem]: activeBlockNumber === 2 || activeBlockNumber === 3
    })
    const commonMiniBlockClass = classNames(s.miniBlock, {[s.visible]: numberOfBlockAfterDelay === 1})

    return (
        <div className={appClassName}>

            <div className={s.wrapForAppear}/>

            <div className={s.mainPicture}>
            </div>
            <div className={s.contentColumn}>
                <section className={finalFirstBlock_item_Class}>
                    {activeBlockNumber === 1 &&
                    <div className={commonMiniBlockClass}>
                        <div>
                            <p>HI THERE ! I'M</p>
                            <h2>GENA FESENKO</h2>
                            <div>
                                <ReactTypingEffect
                                    className={s.typedText}
                                    cursor={' '}
                                    text={["DEVELOPER", "REACT", "JAVASCRIPT"]}
                                    eraseDelay={1000}
                                    typingDelay={1000}
                                    speed={50}
                                    eraseSpeed={50}
                                />
                            </div>
                        </div>
                    </div>}
                </section>

                <section className={finalSecondBlock_item_Class}>
                    {activeBlockNumber !== 2 && <div className={commonMiniBlockClass}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 2 ? 1 : 2)
                                                     }}>
                        <BigButton
                            firstWorld='ABOUT'
                            secondWorld='ME'
                        />
                    </div>}
                    {activeBlockNumber === 2 && <InnerComponentTopRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalThirdBlock_item_Class}>
                    {activeBlockNumber !== 3 && <div className={commonMiniBlockClass}
                                                     onClick={() => {
                                                         setNumberOfActiveBlock(activeBlockNumber === 3 ? 1 : 3)
                                                     }}
                    >
                        <BigButton
                            firstWorld={'MY'}
                            secondWorld={'PORTFOLIO'}
                            visibilityCondition={numberOfBlockAfterDelay === 1}
                        />
                    </div>}
                    {activeBlockNumber === 3 && <InnerComponentBottomLeft
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}
                </section>

                <section className={finalFourthBlock_item_Class}>
                    {activeBlockNumber !== 4
                    && <div className={commonMiniBlockClass}
                            onClick={() => {
                                setNumberOfActiveBlock(activeBlockNumber === 4 ? 1 : 4)
                            }}
                    >
                        <BigButton
                            firstWorld={'GET'}
                            secondWorld={'IN TOUCH'}
                            visibilityCondition={numberOfBlockAfterDelay === 1}/>
                    </div>}
                    {activeBlockNumber === 4 && <InnerComponentBottomRight
                        activeBlockNumber={activeBlockNumber}
                        setNumberOfActiveBlock={setNumberOfActiveBlock}
                        numberOfBlockAfterDelay={numberOfBlockAfterDelay}
                    />}

                </section>
            </div>

        </div>
    )
}

export default App;
