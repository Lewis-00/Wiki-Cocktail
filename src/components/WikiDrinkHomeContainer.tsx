import NavBar from './NavBar'
import WikiDrinkBanner from './wiki-drink-banner/WikiDrinkBanner'
import React from 'react'
import WikiDrinkSearchContainer from './wiki-drink-search/WikiDrinkSearchContainer'

const WikiDrinkHomeContainer = () => {
    return (
        <>
            <NavBar/>
            <WikiDrinkBanner/>
            <WikiDrinkSearchContainer />
        </>
    )
}

export default WikiDrinkHomeContainer
