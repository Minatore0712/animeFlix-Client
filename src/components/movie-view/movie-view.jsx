import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./movie-view.scss";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Card.Img className="mt-4" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
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

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
