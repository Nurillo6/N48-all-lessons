
import React from 'react'

function SearchIconBtn({imgURL, imgAlt, imgWidth,imgHeight}) {
    return (
        <button>
            <img src={imgURL} alt={imgAlt} width={imgWidth} height={imgHeight} />
        </button>
    )
}

export default SearchIconBtn