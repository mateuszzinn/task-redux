import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../componentes/counter/CounterSlice';
import galleryReducer from '../componentes/gallery/GallerySlice'; // Importando o reducer da galeria


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gallery: galleryReducer, // Adicionando a galeria à store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

