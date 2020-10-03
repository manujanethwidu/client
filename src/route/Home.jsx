import React from 'react'
import Header  from '../components/Header'
import Addresturants from '../components/Addresturants'
import Restuarntlist from '../components/Restuarntlist'
const home = () => {
    return (
        <div>
            <Header/>
            <Addresturants/>
            <Restuarntlist/>
        </div>
    )
}

export default home
