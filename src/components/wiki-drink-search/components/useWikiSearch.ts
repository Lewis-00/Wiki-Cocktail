export const useWikiSearch = () => {
    const fetchDrinkInfo = async (drinkName?: string) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName || 'margarita'}`)
        if(!response.ok) {
            throw new Error('Error while fetching drink info')
        }else{
            return await response.json()
        }
    }

    return {fetchDrinkInfo}
}
