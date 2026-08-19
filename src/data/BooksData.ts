import {Book} from "@/types/book";

export const INITIAL_BOOKS: Book[] = [
    {
        id: '1',
        title: 'La evolución del hombre',
        author: 'Charles Darwin',
        genero: 'Ciencia',
        image: require('@/assets/images/books/OrigendelHombre.jpg'),
    },
    {
        id: '2',
        title: 'La Odisea',
        author: 'Homero',
        genero: 'Clásico',
        image: require('@/assets/images/books/laodisea.jpg'),
    },
    {
        id: '3',
        title: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes',
        genero: 'Ficción',
        image: require('@/assets/images/books/Donquijote.jpg'),
    },
    {
        id: '4',
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        genero: 'Realismo mágico',
        image: require('@/assets/images/books/Cienanios.jpg'),
    },
    {
        id: '5',
        title: 'Orgullo y prejuicio',
        author: 'Jane Austen',
        genero: 'Romance',
        image: require('@/assets/images/books/OrgulloyPrejuicio.jpg'),
    },
    {
        id: '6',
        title: 'Crimen y castigo',
        author: 'Fiodor Dostoyevski',
        genero: 'Suspenso',
        image: require('@/assets/images/books/Crimencastigo.jpg'),
    },
];
