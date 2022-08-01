import { buildQueries, findByLabelText } from '@testing-library/react'
import React from 'react'

const About = () => {
    const style = {
      background: 'orange',
      height: 100 + "vh"
    }

    const containerStyle = {
      background: 'yellow',
      height: 100 + "vh",
      padding: 30,
    }

  return (
    
    <div style={style}>
      <center>
      <div style={containerStyle}>
      <h1>About App</h1>
      <p>There is a popular saying that “The easiest way of becoming bankrupt is by not paying attention to your expenses.” There is nothing that captures the importance of keeping track of your expenses better than that saying.</p>
      <p>This app helps you track your expenses by helping you add your income sources and get the current balance as you spend. This helps you plan your finances and make sure you dont run into the ever-commo problem of bankrupcy, especially in this flactuating economy.</p>
      <p>Additionally, this app keeps you updated since you can check out the latest news fetched by the News API.</p>
      </div>
      </center>
    </div>
  )
}

export default About;

