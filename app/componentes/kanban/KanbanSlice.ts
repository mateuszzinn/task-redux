
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
    id: number;
    text: string;
    status: "Backlog" | "Desenvolvendo" | "Concluído";
}

interface KanbanState {
    cards: Card[];
}

const initialState: KanbanState = {
    cards: [],
};

const kanbanSlice = createSlice({
    name: "kanban",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<string>) => {
            state.cards.push({
                id: Date.now(),
                text: action.payload,
                status: "Backlog",
            });
        },
        removeCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(card => card.id !== action.payload);
        },
        updateCard: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const card = state.cards.find(card => card.id === action.payload.id);
            if (card) {
                card.text = action.payload.text;
            }
        },
        moveCardForward: (state, action: PayloadAction<number>) => {
            const card = state.cards.find(card => card.id === action.payload);
            if (card) {
                if (card.status === "Backlog") {
                    card.status = "Desenvolvendo";
                } else if (card.status === "Desenvolvendo") {
                    card.status = "Concluído";
                }
            }
        },
        moveCardBackward: (state, action: PayloadAction<number>) => {
            const card = state.cards.find(card => card.id === action.payload);
            if (card) {
                if (card.status === "Concluído") {
                    card.status = "Desenvolvendo";
                } else if (card.status === "Desenvolvendo") {
                    card.status = "Backlog";
                }
            }
        },
    },
});

export const { addCard, removeCard, updateCard, moveCardForward, moveCardBackward } = kanbanSlice.actions;
export default kanbanSlice.reducer;