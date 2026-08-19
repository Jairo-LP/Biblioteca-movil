import React, { createContext, useContext, useState } from 'react';
import { Book } from '@/types/book';
import { INITIAL_BOOKS } from '@/data/BooksData';

type BookContextType = {
    books: Book[];
    addBook: (title: string, author: string, genero: string) => void;
};

const BookContext = createContext<BookContextType>({
    books: [],
    addBook: () => {},
});

export function BookProvider({ children }: { children: React.ReactNode }) {
    const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);

    const addBook = (title: string, author: string, genero: string) => {
        const newBook: Book = {
            id: Date.now().toString(),
            title,
            author,
            genero,
            image: null,
        };
        setBooks([...books, newBook]);
    };

    return (
        <BookContext.Provider value={{ books, addBook }}>
            {children}
        </BookContext.Provider>
    );
}

export function useBooks() {
    return useContext(BookContext);
}
