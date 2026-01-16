import React from 'react'
import './createBox.css'
import youtube from '../../assets/social-media/youtube.svg'
import linkedin from '../../assets/social-media/linkedin.svg'

/* */

const CreateBox = (props) => {
  return (
    <section id='create-box'>
        <div className='box-content'>
            <img className='box-img' src={props.img} alt={props.name}/>
            <div className='title-content'>
                <div className='name-socials-box'>
                    <h3 className='name-content'>{props.name}</h3>
                    <div className='socials-box'>
                        {props.youtubeLink && (
                            <a target='_blank' href={props.youtubeLink} className='social-link'>
                                <img src={youtube}/>
                            </a>
                        )}
                        {props.linkedinLink && (
                            <a target='_blank' href={props.linkedinLink} className='social-link'>
                                <img src={linkedin}/>
                            </a>
                        )}
                    </div>

                </div>
                <p className='talk-title-content'>{props.title}</p>


            </div>
            <hr className='box-hr'></hr>
            <p className='box-description'>{props.description}</p>
        </div>
    </section>
  )
}

export default CreateBox
