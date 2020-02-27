import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { fetchMovies } from "../../actions/searchActions";
import debounce from "lodash.debounce";

export class MoviesContainer extends Component {

    componentDidMount(){
        // console.log("component did mount");
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        // console.log("component will un mount");
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(){
        // console.log("comng here");
    }

    handleScroll =  debounce(() => {
        // console.log(new Date().getTime())
            const {isLoading} = this.props;
            if(isLoading) return;
            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
                this.props.fetchMovies(this.props.text, this.props.page);
            }
        }, 10);
    

  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
        <div className="row">
            {movies.Search.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.searchReducer.movies,
  isLoading: state.searchReducer.isLoading,
  text: state.searchReducer.text,
  page: state.searchReducer.page
});

export default connect(mapStateToProps, {fetchMovies})(MoviesContainer);