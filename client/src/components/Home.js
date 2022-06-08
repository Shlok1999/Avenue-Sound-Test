import React from 'react'
import './Home.css'
import {useNavigate, Navigate} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
function Home({ authorised }) {

    // if (!authorised) {
    //     return <Navigate to="/login"/>
    // }
    // else{
    //     return (
    //         <>
    //             <h1>Home</h1>
    //         </>
    //     )
    // }
    return(
        <>
            <div className="heading">
                <div className="head">
                    <h1>Nothing We Do Is Ordinary</h1><br />
                    <h2>Avenue Sound specializes in performing custom installations and integrations of Audio, Video and Home Automation Solutions for Residential, Commercial and Marine Landscapes.
</h2>

                </div>
                <div className="head-img">

                </div>
            </div>
        </>
    )
}

export default Home