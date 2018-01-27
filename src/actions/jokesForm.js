export const updateJokeFormData = jokeFormData => {
    return {
      type: 'UPDATED_JOKE',
      jokeFormData
    }
  }

  export const resetJokeForm = () => {
    return {
      type: 'RESET_JOKE_FORM'
    }
  }
