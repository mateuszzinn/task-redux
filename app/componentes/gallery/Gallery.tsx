'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppState, AppDispatch } from '../../store/store';
import { addFavorite, removeFavorite } from './GallerySlice';
import Image from 'next/image';

export default function Gallery() {
    const images = useSelector((state: AppState) => state.gallery.images);
    const favorites = useSelector((state: AppState) => state.gallery.favorites);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Galeria de Imagens</h2>
            <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <div key={img + index} className="relative">
                        <Image width={500} height={500} key={index} src={img} alt="Imagem" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                        {favorites.includes(img) ? (
                            <button
                                onClick={() => dispatch(removeFavorite(img))}
                                className="absolute bottom-2 right-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
                            >
                                Remover Favorito
                            </button>
                        ) : (
                            <button
                                onClick={() => dispatch(addFavorite(img))}
                                className="absolute bottom-2 right-2 px-2 py-1 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
                            >
                                Favoritar
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8">Favoritos</h2>
            <div className="grid grid-cols-3 gap-4">
                {favorites.map((fav) => (
                    <img key={fav} src={fav} alt="Favorito" className="w-40 h-40 object-cover rounded-lg shadow-md" />
                ))}
            </div>
        </div>
    );
}
