import React from 'react'

const Link = () =>  {
    const href = 'https://www.indeed.com/jobs?q=front+end+developer&l=Chicago%2C+IL'
    return (
        <div className="text-center link">
            <a href={href} target="_blank" id="job-search">SEARCH FOR JOBS!</a>
        </div>
    )
}

export default Link