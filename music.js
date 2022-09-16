const request = async() => {
    const options = {
        method: 'GET',
        url: 'https://genius.p.rapidapi.com/songs/442856',
        headers: {
          'X-RapidAPI-Key': 'eabaf5e84cmsh7e077c936e3ef93p1f020fjsnad03ba6fe338',
          'X-RapidAPI-Host': 'genius.p.rapidapi.com',
          useQueryString: true
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(body);
      });
}

console.log(request())


