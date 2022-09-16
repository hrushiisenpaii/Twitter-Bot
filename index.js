const rwClient = require("./twitterclient.js");
const CronJob = require("cron").CronJob;


let now = new Date();


function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
   return `${day}, ${date}th of ${month}, ${year}`;
  }
  function timenow(d) {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
      
    return ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " IST";
  }

//key = '+yA83QmWKwTadb5jgEByow==uRXntzqhCEMvyidI'

const tweetday = async() => {
    try { 
        await rwClient.v2.tweet("Hello to a new day. Today is " + dateBuilder(now) + ". Have a great Day ahead. " )  

    } catch (e) {
        console.error(e)
    }
}
const tweetmorning = async() => {
    try { 
        await rwClient.v2.tweet("Morning " + timenow(now) + ". Good Morning!")  

    } catch (e) {
        console.error(e)
    }
}
const tweetafternoon = async() => {
    try { 
        await rwClient.v2.tweet("afternoon " + timenow(now) + ". Good Afternoon!")  

    } catch (e) {
        console.error(e)
    }
}
const tweetevening = async() => {
    try { 
        await rwClient.v2.tweet("Evening " + timenow(now) + ". Good Evening!")  

    } catch (e) {
        console.error(e)
    }
}
 
const tweetnight = async() => {
    try { 
        await rwClient.v2.tweet("Night " + timenow(now) + ". Good Night!")  

    } catch (e) {
        console.error(e)
    }
        
}   

const jobday = new CronJob("*/1 * * * *",() => {
    console.log('job started today')
    console.log(date = dateBuilder(now)) 
    console.log(time = timenow(now))  
    console.log(x = req.end())
    
  tweetday()
})

const jobmorning = new CronJob("0 9 * * *",() => {
    console.log('job started morning')
    console.log(date = dateBuilder(now))
    console.log(time = timenow(now))    
  tweetmorning()
})

const jobafternoon = new CronJob("1 12 * * *",() => {
    console.log('job started afternoon')
    console.log(date = dateBuilder(now))
    console.log(time = timenow(now))    
  tweetafternoon()
})

const jobevening = new CronJob("0 17 * * *",() => {
    console.log('job started evening')
    console.log(date = dateBuilder(now)) 
    console.log(time = timenow(now))   
  tweetevening()
})

const jobnight = new CronJob("30 22 * * *",() => {
    console.log('job started night')
    console.log(date = dateBuilder(now))  
    console.log(time = timenow(now))  
    tweetnight()
})

jobday.start();
//jobmorning.start();
//jobafternoon.start();
//jobevening.start();
//jobnight.start();

  

  
