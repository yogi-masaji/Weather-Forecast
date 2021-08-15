class DataSource {
    
    static searchClub(keyword) {
        const api_key = 'd2459355e85541d68e6fb202abf57ddb';
        const base_url = 'https://api.weatherbit.io/v2.0/current';
        return fetch(`${base_url}?&city=${keyword}&key=${api_key}`)
        .then(response => {
            return response.json(); 
            
        })
        
        .then(responseJson => {
            if(responseJson.data) {
                return Promise.resolve(responseJson.data);
                
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })

        
    }
}

export default DataSource;