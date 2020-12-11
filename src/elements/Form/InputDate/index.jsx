import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'

import { DateRange } from 'react-date-range'

import "./index.scss"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

import FormatDate from '../../../utils/FormatDate'
import iconCalender from '../../../assets/images/ic_calendar.svg'


function InputDate(props) {

    const {value, placeholder, name } = props;
    const [isShowed, setIsShowed] = useState(false)

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        }
        props.onChange(target)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

    const handleClickOutside = event => {
        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false);
        }
    }

    const refDate = useRef(null);

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false)
    }

    const displayDate = `${value.startDate ? FormatDate(value.startDate) : "" }${value.endDate ? " - " + FormatDate(value.endDate) : ""}`;

    return (
        <div 
        ref={refDate}
        className={["input-date mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalender} alt="icon calender"/>
                    </span>
                </div>
                <input 
                type="text" 
                className="form-control"
                readOnly
                value={displayDate}
                placeholder={placeholder}
                onClick={()=> setIsShowed(!isShowed)}
                style={{cursor: "pointer"}}
                />

                {isShowed && (
                    <div className="date-range-wrapper">
                        <DateRange 
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

InputDate.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}

export default InputDate

