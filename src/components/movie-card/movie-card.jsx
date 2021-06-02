import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./movie-card.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="mt-4 cardStyle">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open</Button>
          </Link>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button className="mb-2" block variant="primary">
              Genre
            </Button>
          </Link>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button className="mb-2" block variant="primary">
              Director
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
