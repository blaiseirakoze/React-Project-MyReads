import React from 'react'
import ShelfChange from './ShelfChange'
import PropTypes from 'prop-types'

const BookItem = ({ book, changeBookShelf, currentlyReading, wantToRead, read, none }) => {

    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                    <ShelfChange changeBookShelf={changeBookShelf}
                        book={book} currentlyReading={currentlyReading}
                        wantToRead={wantToRead} read={read} none={none} />
                </div>
                <div className="book-title">{book.authors}</div>
                <div className="book-authors">{book.subtitle}</div>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    book: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    currentlyReading: PropTypes.string.isRequired,
    wantToRead: PropTypes.string.isRequired,
    read: PropTypes.string.isRequired,
    none: PropTypes.string.isRequired
}

export default BookItem
