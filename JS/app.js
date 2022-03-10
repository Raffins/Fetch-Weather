window.addEventListener('load',() =>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api =`https://api.weatherapi.com/v1/current.json?key=0682b69c41e74916abf63741221801&q=${lat},${long}`;
        });
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    }
});