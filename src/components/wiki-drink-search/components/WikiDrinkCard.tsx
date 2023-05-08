import {useEffect, useState} from 'react'

interface IWikiDrinkCardProps {
    drinkInfo: { [key: string]: string }
}

const WikiDrinkCard = (props: IWikiDrinkCardProps) => {

    const {drinkInfo} = props

    const [drinkIngredients, setDrinkIngredients] = useState<{ name: string, measure: string }[]>([])


    // Vado ad iterare su tutte le chiavi dell'oggetto drinkInfo che contengono ingredienti e misure
    // e creo un nuovo oggetto con le proprietà name e measure
    useEffect(() => {
        for (let i = 0; i <= 15; i++) {
            if (drinkInfo[`strIngredient${i}`]) {
                const newIngredient = {
                    name: drinkInfo[`strIngredient${i}`] ?? '',
                    measure: drinkInfo[`strMeasure${i}`] ?? ''
                }
                const isIngredientPresent = drinkIngredients.find(
                    (ingredient: { name: string, measure: string }) =>
                        ingredient.name === newIngredient.name
                )
                if (!isIngredientPresent) {
                    setDrinkIngredients((prev: any) => [...prev, newIngredient])
                }
            }
        }
    }, [drinkInfo, drinkIngredients])

    useEffect(() => () => {
        setDrinkIngredients([])
    }, [drinkInfo])


    return (
        <div className="container mb-5 rounded-3 py-3" style={{boxShadow: '0px 0px 15px 0px #000000'}}>
            <div className="row justify-content-evenly align-items-center">
                <div className="card col-6" style={{width: '18rem'}}>
                    <img src={drinkInfo.strDrinkThumb} className="card-img-top mt-3" alt="..."/>
                    <div className="card-body text-center">
                        <h3>{drinkInfo.strDrink}</h3>
                    </div>
                </div>
                <div className="col-6">
                    <h3>Ingredienti:</h3>
                    <ul>
                        {drinkIngredients.map((ingredient: { name: string, measure: string }, index: number) => {
                            return <li key={index}>{`${ingredient.measure} - ${ingredient.name}`}</li>
                        })}
                    </ul>
                    <p>{drinkInfo.strInstructionsIT}</p>
                </div>
            </div>
        </div>

    )
}

export default WikiDrinkCard
