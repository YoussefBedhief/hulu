const API_KEY = process.env.API_KEY

export default{
    fetchTrending:{
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    
    fetchHorrorMovies:{
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchThrillerMovies:{
        title: 'Thriller',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=53`
    },
    fetchCrimeMovies:{
        title: 'Crime',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=80`
    },
    
    fetchRomanceMovies:{
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    
    fetchComedyMovies:{
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    
    fetchMysteryMovies:{
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },

    fetchFantasyMovies:{
        title: 'Fantasy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=14`
    },
    
    fetchScifiMovies:{
        title: 'Sci-fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    
    fetchAdventurenMovies:{
        title: 'Adventure',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`
    },

    fetchWesternMovies:{
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    
    fetchAnime:{
        title: 'Anime',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    
    fetchTV:{
        title: 'TV Show',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },

}