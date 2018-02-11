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
            debugger
      }

    render(){
        const { description, author, category, img_url} = this.props.jokeFormData;

        return(
            <div>
                <h3 className="FormHeader">Joke Form</h3>
                {this.props.errors === true ? <FormError />: null}
                <hr />
                <form className="PageContent" onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="description">Joke Entry: </label>
                        <br />
                        <textarea
                               onChange={this.handleOnChange}
                               name='description'
                               value={description}
                               placeholder="required"
                          />

                    </div>
                    <br />
                    <div>
                        <label htmlFor="author">Submitted By:</label>
                        <br />
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='author'
                               value={author}
                               placeholder="required" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category">Category:</label>
                          <br />
                        <select name='category' value={category}  onChange={this.handleOnChange}>
                            <option value="irony">Irony</option>
                            <option value="character">Character</option>
                            <option value="reference">Reference</option>
                            <option value="shock">Shock</option>
                            <option value="parady">Parady</option>
                            <option value="hyperbole">Hyperbole</option>
                            <option value="wordplay">Wordplay</option>
                            <option value="analogy">Analogy</option>
                            <option value="madcap">Madcap</option>
                            <option value="meta-humor">Meta-Humor</option>
                            <option value="misplaced">Misplaced</option>
                            <option value="focus">Shock</option>
                        </select>


                    </div>
                    <br />
                    <div>
                        <label htmlFor="img_url">Image URL:</label>
                        <br />
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='img_url'
                               value={img_url}
                               placeholder="optional" />
                    </div>
                    <br />
                    <Button type="submit" bsStyle='primary'>Submit</Button>
                </form>
                <br />

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
