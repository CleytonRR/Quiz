import { CLICK_UPDATE_VALUE, CLICK_UPDATE_CORRECT } from './actionTypes'

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
})

export const clickUpdate = value => ({
    type: CLICK_UPDATE_CORRECT,
    correct: value
})