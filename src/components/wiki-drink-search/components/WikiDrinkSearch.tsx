import {useEffect, useState} from 'react'
import {useWikiSearch} from './useWikiSearch'

interface IWikiDrinkSearchProps {
    getDrinkInfo: (drinkInfo: {[key: string]: string }[]) => void
}
const WikiDrinkSearch = (props: IWikiDrinkSearchProps) => {

    const {getDrinkInfo} = props
    const {fetchDrinkInfo} = useWikiSearch()

    const [drinkName, setDrinkName] = useState<string>('')
    const [drinkInfo, setDrinkInfo] = useState<{ [key: string]: any }>({})

    
    useEffect(() => {
        getDrinkInfo(drinkInfo.drinks)
    }, [drinkInfo, getDrinkInfo])
    
   useEffect(() => {
       fetchDrinkInfo().then((res) => {
           setDrinkInfo(res)
       })
   }, [])

    const handleSearchButton = () => {
        fetchDrinkInfo(drinkName).then((res) => {
            setDrinkInfo(res)
        })

    }
    return (
        <div className="mb-5 text-center">
            <h1 className="my-3 text-center fw-bold">Ricerca il tuo drink</h1>

            <div className="container d-flex align-items-center justify-content-center">
                <input className="form-control-lg w-50" value={drinkName} onChange={(e) => setDrinkName(e.target.value)}
                       type="text" placeholder="Drink name..."/>

                <button className="btn btn-lg btn-outline-secondary ms-2"
                        onClick={handleSearchButton}
                >{!!drinkName ? 'Cerca' : 'Random'}
                </button>
            </div>

        </div>
    )
}

export default WikiDrinkSearch
