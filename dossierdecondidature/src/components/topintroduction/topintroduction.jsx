import React from 'react'
import "./topintroduction.css"

export default function Topintroduction() {
  return (
    <div className='blockContainer'>
        <div className="rightblock">
            <p className="maintitle">dossier de candidature au poste du chef mission digitalisation</p>
            <div className="seperateline"></div>
            <p className="smalltitle">présenté par Mohamed Esser Kaabi</p>
            <a href="/presentation-personnelle"><button className='getStartedbutton'> vers la presentation personnelle !</button></a>
        </div>
        <div className='leftblock'>
            <img className='sideImage' src="https://content.app-sources.com/s/3208838592419469/thumbnails/640x480/Images/undraw_mobile_marketing_iqbr-5085005.svg" alt="" />
        </div>
    </div>
  )
}
