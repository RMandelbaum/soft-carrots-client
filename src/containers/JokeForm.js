import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateJokeFormData } from '../actions/jokesForm';
import { createJoke } from '../actions/jokes';
import FormError from '../components/FormError';


class JokeForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentJokeFormData = Object.assign({}, this.props.jokeFormData, {
          [name]: value
        })
        this.props.updateJokeFormData(currentJokeFormData)
      }

      handleOnSubmit = event => {
        event.preventDefault();
        const { createJoke, jokeFormData, history} = this.props;
            createJoke(jokeFormData, history);
      }

    render(){
        const { description, author, category, rating, img_url} = this.props.jokeFormData;
        return(
            <div>
                <h3 className="formHeader">Joke Form</h3>
                {this.props.errors === true ? <FormError />: null}
                <hr />
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="description">Joke Entry<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='description'
                               value={description} />
                    </div>
                    <div>
                        <label htmlFor="author">Submitted By: <span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='author'
                               value={author} />
                    </div>
                    <div>
                        <label htmlFor="category">Category<span className="fieldRequired"> *</span>:</label>
                        <input type='option'
                               onChange={this.handleOnChange}
                               name='category'
                               value={category} />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating: <span className="fieldRequired"> *</span>:</label>
                        <input type='number'
                               onChange={this.handleOnChange}
                               name='rating'
                               value={rating} />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image URL<span className="fieldRequired"> *</span>:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='img_url'
                               value={img_url} />
                    </div>
                    <Button type="submit" bsStyle='primary'>Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        jokeFormData: state.jokeFormData,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {updateJokeFormData, createJoke})(JokeForm)
