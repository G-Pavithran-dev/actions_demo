import React from 'react';
import './App.css';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


function App() {

  const [color, setColor] = React.useState('primary')
  const [click, setClick] = React.useState('Click & hold me!')
  const [hover, setHover] = React.useState('Hover me!')
  let timer = null

  const handleClick = () => {
    alert('Button clicked')
  }
  const handleDoubleClick = () => {
    alert('Button double clicked')
  }
  const handleDown = () => {
    setClick('Hold for 3 seconds!')
    timer = setTimeout(() => {
      setColor('success')
    }, 3000)
  }
  const handleUp = () => {
    setClick('Click & hold me!')
    clearTimeout(timer)
  }
  
  const handleMouseOver = () => {
    setColor('primary')
    setHover('You\'re hovering me!')
  }

  const handleMouseLeave = () => {
    setHover('Hover me!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4">Mouse Events Testing UI</Typography>
        <Button
          id="double_click"
          variant="contained"
          color="primary"
          onDoubleClick={handleDoubleClick}
          sx={{ marginBottom: '10px',marginTop: '4px'}}
        >
          Double CLick me!
        </Button>
        <Button
          id="click"
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{ marginBottom: '10px' }}
        >
          CLick me!
        </Button>
        <Button
          id="click_hold"
          variant="contained"
          color={color}
          onMouseDown={handleDown}
          onMouseUp={handleUp}
          sx={{ marginBottom: '10px' }}
        >
          {click}
        </Button>
        <Button
          id="hover"
          variant='contained'
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          sx={{ marginBottom: '10px' }}
        >
          {hover}
        </Button>
      </header>
    </div>
  )
}

export default App;