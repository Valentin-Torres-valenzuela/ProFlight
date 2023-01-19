import React, { useState } from 'react'
import Styles from './ProFlight.module.css'
import back from'../../assets/ant.svg'
import next from'../../assets/sig.svg'
import { ProFlightDiv } from './ProFlightDiv'

export const ProFlight = () => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        let nextIndex = index + 1;
        if (index >= 3) {
            nextIndex = 0;
        }
        setIndex(nextIndex);
    }

    const handlePrev = () => {
        let prevIndex = index - 1;
        if (index <= 0) {
            prevIndex = 3;
        }
        setIndex(prevIndex);
    }

    const arr = [0,1,2,3]

    console.log(index)

    return (
        <>
            <div className={Styles.container}>
                <button className={Styles.circle__button} onClick={handlePrev}>
                    <div>
                        <img src={next}/>
                    </div>
                </button>

                {
                    arr.map(item =>
                        <ProFlightDiv style={item != index ? Styles.logo__container__op : Styles.logo__container}/>
                    )
                }
                <button className={Styles.circle__button} onClick={handleNext}>
                    <div>
                        <img src={back}/>
                    </div>
                </button>
            </div>
        </>
    )
}
