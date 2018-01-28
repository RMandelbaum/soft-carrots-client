const initialState = {
    description: "",
    author: "",
    category: "",
    rating: 0,
    img_url: ""
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
