import React, { Component } from 'react';

export class MovieCard extends Component {

componentDidMount(){
    // console.log("----- componentDidMount -----");
    // console.log(this.props.movie);
}

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-info text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
        </div>
      </div>
    );
  }
}

export default MovieCard;