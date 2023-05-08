export const useWikiSearch = () => {
    const fetchDrinkInfo = async (drinkName?: string) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${drinkName ? 'search.php?s=' + drinkName : 'random.php'}`)
        if(!response.ok) {
            throw new Error('Error while fetching drink info')
        }else{
            return await response.json()
        }
    }

    return {fetchDrinkInfo}
}
