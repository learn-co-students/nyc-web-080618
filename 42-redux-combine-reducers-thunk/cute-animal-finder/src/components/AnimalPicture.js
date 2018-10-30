import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateAnimalAction, fetchAnimalAction } from '../redux/actions';
import AnimalAdapter from '../apis/AnimalAdapter';
import * as actions from '../redux/actions';

class AnimalPicture extends Component {
  getCat = (event) => {
    // this.props.updateAnimal(url);
  }

  getDog = (event) => {
    console.log(this.props);
    // this.props.updateAnimal();
    this.props.fetchAnimal();

    // AnimalAdapter.getDog()
    //   .then(url => {
    //     console.log('am i running?', url);
    //     this.props.updateAnimal(url);
    //     // this.setState({ url })
    //   })
  }

  renderPicture = () => {
    if (!this.props.isLoading) {
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
    animalSrc: state.animal.animalSrc,
    isLoading: state.animal.isLoading,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // updateAnimal: (url) => dispatch(updateAnimalAction(url))
//     // updateAnimal: () => {
//     //   AnimalAdapter.getDog()
//     //     .then(url => {
//     //       dispatch(updateAnimalAction(url))
//     //     })
//     // }
//     // updateAnimal: () => dispatch(fetchAnimalAction())
//     updateAnimal: () => dispatch(fetchAnimalAction())
//
//   }
// }

// export default connect(mapStateToProps, { updateAnimal: fetchAnimalAction })(AnimalPicture);
export default connect(mapStateToProps, actions)(AnimalPicture);
