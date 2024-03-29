const API_KEY = 'd3c8de23a0f9f01693a1b6e2907b1237';

const API_BASE = 'https://api.themoviedb.org/3';

/*
Generos na função getHomeList

-originais netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- terror 
- romance
- documentários

*/


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213$language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },
        ]
	},

	getMovieInfo: async (movieID, type) => {
		let info = {}

		if(movieID){
			switch(type){
				case'movie':
					info= await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
					break;

				case'tv':
					info= await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
					break;
					
				default:
					info =  null;
					break;

			}
		}

		return info
	}
}
