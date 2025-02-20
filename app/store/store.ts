import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../componentes/counter/CounterSlice';
import galleryReducer from '../componentes/gallery/GallerySlice'; 
import todoReducer from '../componentes/todo/TodoSlice';
import kanbanReducer from '../componentes/kanban/KanbanSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gallery: galleryReducer, // Adicionando a galeria à store
        todo: todoReducer,
        kanban: kanbanReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

