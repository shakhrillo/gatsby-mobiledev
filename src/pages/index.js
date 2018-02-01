import React from 'react'
import Link from 'gatsby-link'
import LogoImg from '../assets/logo.jpg'

const IndexPage = () => (
  <div>
    <hr />
    <img src={LogoImg} height="70" alt="{LogoImg}"/>
    <h4>Tukhsanov</h4>
    <a>Download as pdf</a>
    <p><i>+ 12 tasks / Last Active: 3hours ago / Last week: 32 hours</i></p>
    {/* <br /> */}
    {/* <hr /> */}
    <h4>Toggl history <span>+</span></h4>
    <ul>
      {
        [1,2,3,4].map(e=>{
          return (
            <li key={e}>
              <p>Task {e}</p>
              <small>Expectation: 8hours</small>
              <br />
              <small>Worked: 4hours</small>
              <br />
              <small>Review: Add review</small>
              <hr />
            </li>
          )
        })
      }
    </ul>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
