const API_KEY = 'cf7258ddce5634737986dcc9aadd195d';
const API_BASE = 'https://api.themoviedb.org/3'
const PT_BR = 'language=pt-BR'

//Função apra gerar requisição pelo parâmetro
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [{
            slug: 'originals',
            title: 'Originais Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendações para você',
            items: await basicFetch(`/trending/all/week?${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'toprates',
            title: 'Conteúdo em alta na plataforma',
            items: await basicFetch(`/movie/top_rated?${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&${PT_BR}&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&${PT_BR}&api_key=${API_KEY}`)
        }

        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${PT_BR}&api_key=${API_KEY}`)
                    break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${PT_BR}&api_key=${API_KEY}`)
                    break;

                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}