import React from 'react';


import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';

const Detail = ({ match: {params: {movieId}} }) => {
    console.log(movieId);
    return <div>Detail</div>;
};

/*
          <div>
          genres: {genres.map((genre, id) => <span key={id}> {genre}/ </span>)}
        </div>
            
          <LinesEllipsis
                text={summary}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
          />  
          */

export default Detail;