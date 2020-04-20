import React from 'react'
import PropTypes from 'prop-types'

const ShelfChange = ({ book, changeBookShelf, currentlyReading, wantToRead, read, none }) => {

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => changeBookShelf(event.target.value, book)} >
                <option className="moveTo" value='move' disabled>Move to...</option>
                <option className={currentlyReading} value="currentlyReading">Currently Reading</option>
                <option className={wantToRead} value="wantToRead">Want to Read</option>
                <option className={read} value="read">Read</option>
                <option className={none} value="none">None</option>
            </select>
        </div>
    )
}

ShelfChange.propTypes = {
    book: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
    currentlyReading: PropTypes.string.isRequired,
    wantToRead: PropTypes.string.isRequired,
    read: PropTypes.string.isRequired,
    none: PropTypes.string.isRequired
}

export default ShelfChange
