import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
       <Button variant="success">Current</Button>{' '}
       <Button variant="warning">Location</Button>{' '}
       <Button variant="danger">Paris</Button>{' '}
       <Button variant="info">New york </Button>{' '}
    </div>
  )
}

export default WeatherButton
