import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.countes.value;

export default counterSlice.reducer;
