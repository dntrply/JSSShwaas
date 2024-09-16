import { createSlice } from "@reduxjs/toolkit";

import {
    nextQuestion,
    previousQuestion, removeAnswersNotInQuestionList,
    visibleQuestions,
} from '../../domain/questionModel';



const initialState = {
    form: {},
    currentQuestionKey: nextQuestion().key,
};

const getValue = (key, value) => {
    const obj = {};
    obj[key] = value;
    return obj;
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setValue(state, action) {
            const { key, value } = action.payload;
            const form = {
                ...state.form,
                ...getValue(key, value),
            }
            const newForm = removeAnswersNotInQuestionList(form);

            state.form = newForm;
        },
    },
    resetCalculator(state) {
        state.form = {};
        state.currentQuestionKey = "";
    },
    goToNextQuestion(state) {
        const nextQ = nextQuestion(state.form, state.currentQuestionKey);
        const nextQuestionKey = nextQ ? nextQ.key : state.currentQuestionKey;

        state.currentQuestionKey = nextQuestionKey;
      },
    goToPrevoiusQuestion(state) {
        const previousQ = previousQuestion(state.form, state.currentQuestionKey);
        const previousQuestionKey = previousQ
          ? previousQ.key
          : state.currentQuestionKey;

        state.currentQuestionKey = previousQuestionKey;

    },
    goToChosenQuestion(state, action) {
        state.currentQuestionKey = visibleQuestions(state.form)[action.index].key;
    },

});

export const { setValue, goToNextQuestion, goToPrevoiusQuestion, goToChosenQuestion, resetCalculator } = formSlice.actions;

export default formSlice.reducer;
