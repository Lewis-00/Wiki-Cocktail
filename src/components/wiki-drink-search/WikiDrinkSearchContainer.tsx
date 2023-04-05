import WikiDrinkSearch from './components/WikiDrinkSearch'
import WikiDrinkCard from './components/WikiDrinkCard'
import {useState} from 'react'

const WikiDrinkSearchContainer = () => {

    const [drinkInfo, setDrinkInfo] = useState<{[key: string]: string }[]>([])


    return <>
        <WikiDrinkSearch getDrinkInfo={setDrinkInfo}/>
        {drinkInfo &&
            drinkInfo.map((drink, index) => {
            return <WikiDrinkCard key={index} drinkInfo={drink}/>
        })}
    </>
}

export default WikiDrinkSearchContainer
