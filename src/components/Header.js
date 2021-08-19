import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
      <header className= 'header'>
        <h1>{title}</h1>
        <Button color='blue' text='Hi'/>
      </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS example: 
// const headingStyle =  {
//   color: 'blue',
//   backgroundColor: 'green'
// }
// must pass to Header above

export default Header