import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface GalleryState {
    images: string[];  // Lista de imagens
    favorites: string[]; // Lista de imagens favoritas
}

const initialState: GalleryState = {
    images: [
        "/static/images/png.png",
        "/static/images/galeria.png",
        "/static/images/cachorro.png"
    ],
    favorites: [],
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(img => img !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = gallerySlice.actions;
export default gallerySlice.reducer;
