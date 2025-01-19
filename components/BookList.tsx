import React from 'react'

interface BookListProps {
    title: string
    books: Book[]
    containerClassName?: string

}

const BookList = ({title, books, containerClassName }: BookListProps) => {
  return (
    <section className={containerClassName} >
        <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>

        <ul className='book-list'>
            {books.map((book) => (
                <li>
                    
                </li>
            ))}
        </ul>
    </section>
  )
}

export default BookList
