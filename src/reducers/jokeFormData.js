const initialState = {
    description: null,
    author: null,
    category: null,
    rating: null,
    img_url: null
  }

  export default (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATED_JOKE':
        return action.jokeFormData

      case 'RESET_JOKE_FORM':
        return initialState;

        default:
          return state;
    }
  }
