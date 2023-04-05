import {useEffect, useState} from 'react'

interface IWikiDrinkCardProps {
    drinkInfo: {[key: string]: string}
}

const WikiDrinkCard = (props: IWikiDrinkCardProps) => {

    const {drinkInfo} = props

    const [drinkIngredients, setDrinkIngredients] = useState<string[]>([])

    useEffect(()=> {
        for(let i = 0; i<15; i++){
            if(drinkInfo[`strIngredient${i}`]){
                if(!drinkIngredients.includes(drinkInfo[`strIngredient${i}`])){
                    setDrinkIngredients((prev) => [...prev, drinkInfo[`strIngredient${i}`]])
                }
            }
        }
    }, [drinkInfo, drinkIngredients])

    return (
        <div className="container mb-5" style={{border: '1px', borderColor: 'black', borderStyle: 'solid'}}>
            <div className="row justify-content-evenly align-items-center">
                <div className="card col-6" style={{width: '18rem'}}>
                    <img src={drinkInfo.strDrinkThumb} className="card-img-top mt-3" alt="..."/>
                    <div className="card-body text-center">
                        <h3>{drinkInfo.strDrink}</h3>
                    </div>
                </div>
                <div className='col-6'>
                    <h3>Ingredienti:</h3>
                    <ul>
                        {drinkIngredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                        })}
                    </ul>
                    <p>{drinkInfo.strInstructionsIT}</p>
                </div>
            </div>
        </div>

    )
}

export default WikiDrinkCard
