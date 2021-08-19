import React from 'react'

const Header = ({title}) => {
    return (
      <header>
        <h1>{title}</h1>
      </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// CSS in JS example: 
// const headingStyle =  {
//   color: 'blue',
//   backgroundColor: 'green'
// }
// must pass to Header above

export default Header