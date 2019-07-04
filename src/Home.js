import React from 'react';
import Movie from './Movie';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';


const Home = () => (
  <Query query={HOME_PAGE}>
    {({loading, data, error }) => {
        if(loading) {
            return <span>loading</span>;
        }
        if(error) {
            return <span>something happend</span>;
        }
        if(data) {
            console.log(data);
            return (

                    data.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                            summary={movie.summary}
                            language={movie.language}
                        />))); 


        }
    }}
  </Query>
);


export default Home;