import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import StarsRating from 'stars-rating'

const UsersProfile = () => {
    const params = useParams()
    console.log(params)

    const filteredData = data.filter((item) => item.Id === params.id )

    console.log(filteredData)

  return (
    <div className='profile'>
        <div>
        <div>
            <pre className='profile-head-name' >
                Hello I'm <br />
                {filteredData[0].Developer_Name}
            
            </pre></div>
            <div className='user-details' >
                <p>I'm a {filteredData[0].Skills} Developer. I am working on a {filteredData[0].Vendor}. 
                I have {filteredData[0].Experience} years of experience. {filteredData[0].summary}</p>
            </div>

                <div className='profile-box'>
                    <div className='profile-exp' >
                        <div className='profile-year' >{filteredData[0].Experience} Y.</div><br />
                        <div className='exp' >Experience</div>
                    </div>
                    <div className='profile-exp' >
                        <div className='rating-star' >
                        <StarsRating
                            count={+(filteredData[0].Ranked)}
                            size={24}
                            color1={'rgb(115, 115, 28)'} />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default UsersProfile