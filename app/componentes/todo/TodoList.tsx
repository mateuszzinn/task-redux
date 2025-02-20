'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppState, AppDispatch } from '../../store/store';
import { addTodo, removeTodo, toggleTodo, updateTodo } from './TodoSlice';

export default function TodoList() {
    const todos = useSelector((state: AppState) => state.todo.todos);
    const dispatch: AppDispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const [editTodo, setEditTodo] = useState<{ id: number; text: string } | null>(null);

    const handleSubmit = () => {
        if (editTodo) {
            dispatch(updateTodo({ id: editTodo.id, text: newTodo }));
            setEditTodo(null);
        } else {
            dispatch(addTodo(newTodo));
        }
        setNewTodo('');
    };

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Lista de Tarefas</h2>
            <div className="flex gap-2 mb-4">
                <input 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)} 
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                />
                <button 
                    onClick={handleSubmit} 
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                >
                    {editTodo ? "Atualizar" : "Adicionar"}
                </button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center p-2 bg-gray-700 rounded-lg mb-2">
                        <span 
                            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-white'}`} 
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setEditTodo({ id: todo.id, text: todo.text })} 
                                className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition"
                            >
                                Editar
                            </button>
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))} 
                                className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}