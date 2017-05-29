var axios= require('axios');

const OPEN_WEATHER_API= 'http://api.openweathermap.org//data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d';

module.exports = {
    getTemp: function (location) {
        var encodedLocation= encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_API}&q=${encodedLocation}`;

        return axios.get(requestUrl).then( function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp ;
            }
        },
        function(res){
           throw new Error(res.message);
        });
    }
}