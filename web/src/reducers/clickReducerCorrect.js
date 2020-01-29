import { CLICK_UPDATE_CORRECT } from '../actions/actionTypes'

const initialState = {
    correctAsnwer: 0
}

export const clickReducerCorrect = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_CORRECT:
            return {
                ...state,
                correctAsnwer: action.correct
            }
        default:
            return state
    }
}