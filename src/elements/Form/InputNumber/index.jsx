import React from 'react'
import propTypes from 'prop-types'


import "./index.scss"

function InputNumber(props) {

    const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;


    const onChange = e => {
        let value = String(e.target.value)
        if(+value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            })
        }
    };

    const minus = () => {
        value >= min &&
        onChange({
            target: {
                name: name,
                value: +value - 1
            }
        })
    }
    
    const plus = () => {
        value < max &&
        onChange({
            target: {
                name: name,
                value: +value + 1
            }
        })
    }
    
    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus} style={{color:"white"}}>
                        -
                    </span>
                </div>
                <input 
                className="form-control"
                readOnly
                min={min}
                max={max}
                name={name}
                pattern="[0-9]*"
                placeholder={placeholder ? placeholder : "0"}
                value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`}
                onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus} style={{color:"white"}}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

InputNumber.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
}

InputNumber.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    isSuffixPlural: propTypes.bool
}

export default InputNumber
