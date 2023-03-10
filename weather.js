let search =document.getElementById('search'); //input tag
let cityname =document.getElementById('cityname');
let temp =document.getElementById('temp');
///////////////////////////////////////////////////////////////////////////////////////////////////
let getinfo=async()=>{
    let inputValue = search.value// prevent reloading of the pages
    if (inputValue == "") 
    {
        alert('please enter the location') // error msg
    } 
    else 
    {
       let URL =` http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e `
       let response= await fetch(URL)
       let data = await response.json(); // fetching only json from api
       console.log(data);
       cityname.textContent=`${data.name}/${data.sys.country}`;
       temp.textContent=data.main.temp;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////