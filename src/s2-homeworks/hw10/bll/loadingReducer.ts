const initState = {
  isLoading: false,
}

type InitStateType = typeof initState

type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
  switch (action.type) {
    // пишет студент  // need to fix
    case 'CHANGE_LOADING': {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }

    default:
      return state
  }
}


export const loadingAC = (isLoading: boolean) => ({
  type: 'CHANGE_LOADING',
  isLoading,
})

