export const fetchData = async() => {
    try{
        let response = await fetch("https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439")
        if(response.ok){
            let responseJson = await response.json()
            return responseJson;
        }
    }
    catch(err){
        throw err;
    }
}