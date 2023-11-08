import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const items = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = onClickNumber => {
    const renderButton = item => (<Button key={item} text={item.toString()} clickHandler={onClickNumber}/>)
    return items.map(renderButton)
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">{renderButtons(onClickNumber)}</section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers