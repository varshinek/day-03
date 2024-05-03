var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function()
{
    var res = JSON.parse(request.response);
    
    for(var i = 0;i<res.length;i++)
    {
        console.log(res[i].flags.png);  //Print all the flag
        console.log(res[i].region);     //Print all the region name
        console.log(res[i].subregion);  //Print all the sub-region name
        console.log(res[i].name.common); //print all the countries name
        console.log(res[i].population);  //Print all the population name
    }
}   