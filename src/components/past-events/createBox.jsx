import React from 'react'
import './createBox.css'
import youtube from '../../assets/social-media/youtube.svg'
import linkedin from '../../assets/social-media/linkedin.svg'

const createBox = (props) => {
  return (
    <section>
        <div className='box-content'>
            <img className='box-img' src={props.img} alt={props.name}/>
            <div className='title-content'>
                <div className='name-box'>
                    <h3 className='name-content'>{props.name}</h3>
                    <p className='name-content'>{props.title}</p>
                </div>
                <div className='socials-box'>
                    <a href={props.youtubeLink} className='social-link'>
                        <img src={youtube}/>
                    </a>
                    <a href={props.linkedinLink} className='social-link'>
                        <img src={linkedin}/>
                    </a>
                </div>
            </div>        
            <p className='box-description'>{props.description}</p>
        </div>
    </section>
  )
}

export default createBox
