import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimalAction } from '../redux/actions';

class AnimalPicture extends Component {
  getCat = (event) => {
    // this.props.updateAnimal(url);
  }

  getDog = (event) => {
    // this.props.updateAnimal(url);
  }

  renderPicture = () => {
    if (this.props.animalSrc) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
    return (
    <div className="animal-picture">
      <button onClick={this.getCat}>Fetch Cat</button>
      <button onClick={this.getDog}>Fetch Dog</button>
      {this.renderPicture()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalSrc: state.animalSrc
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAnimal: (url) => dispatch(updateAnimalAction(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPicture);
