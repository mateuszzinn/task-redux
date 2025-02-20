'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppState, AppDispatch } from '../../store/store';
import { addCard, removeCard, updateCard, moveCardForward, moveCardBackward } from './KanbanSlice';

export default function KanbanBoard() {
    const cards = useSelector((state: AppState) => state.kanban.cards);
    const dispatch: AppDispatch = useDispatch();
    const [newCard, setNewCard] = useState('');
    const [editCard, setEditCard] = useState<{ id: number; text: string } | null>(null);

    const handleSubmit = () => {
        if (editCard) {
            dispatch(updateCard({ id: editCard.id, text: newCard }));
            setEditCard(null);
        } else {
            dispatch(addCard(newCard));
        }
        setNewCard('');
    };

    const renderColumn = (status: "Backlog" | "Desenvolvendo" | "Concluído") => (
        <div className="w-1/3 p-4 bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">{status}</h2>
            {cards.filter(card => card.status === status).map(card => (
                <div key={card.id} className="p-2 bg-gray-800 rounded-lg mb-2 flex justify-between items-center">
                    <span>{card.text}</span>
                    <div className="flex gap-2">
                        <button onClick={() => setEditCard({ id: card.id, text: card.text })} className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">Editar</button>
                        <button onClick={() => dispatch(removeCard(card.id))} className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg">Remover</button>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {status !== "Backlog" && <button onClick={() => dispatch(moveCardBackward(card.id))} className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Voltar</button>}
                        {status !== "Concluído" && <button onClick={() => dispatch(moveCardForward(card.id))} className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg">Avançar</button>}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
            <div className="flex gap-4 mb-4">
                <input 
                    value={newCard} 
                    onChange={(e) => setNewCard(e.target.value)} 
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                />
                <button 
                    onClick={handleSubmit} 
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                >
                    {editCard ? "Atualizar" : "Adicionar"}
                </button>
            </div>
            <div className="flex gap-4">
                {renderColumn("Backlog")}
                {renderColumn("Desenvolvendo")}
                {renderColumn("Concluído")}
            </div>
        </div>
    );
}