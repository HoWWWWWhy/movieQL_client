import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Movie = ({id, title, poster, rating}) => {            
  return (
      <Link to={`/details/${id}`}>
        <Card background={poster}>
          <Title>
            {title} / 👍{rating}
          </Title>
        </Card>
      </Link>
  );
}


Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
}

const Card = styled.div`
  border-radius: 15px;
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  margin: 5px;
  margin-bottom: 20px;
  align-items: center;
  height: 300px;
  width: 200px;  
  position: relative;
  background-position: center center;
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
`;

export default Movie;
