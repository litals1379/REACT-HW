import React, { Component } from 'react'
import CCColors from './CCColors'
import CCForm from './CCForm'
import CCTable from './CCtable'


export default class CCHomePage extends Component {
  render() {
    return (
      <div style={{border:'solid black 2px',margin:5,padding:5,borderRadius:10}}>
        CCHomePage
        <CCColors/>
        <CCForm/>
        <CCTable/>

      </div>
    )
  }
}