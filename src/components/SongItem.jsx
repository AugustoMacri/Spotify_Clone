import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = () => {
    return (
        <Link to="/song/1" className='song-item'>

            <div className='song-item__number-album'>

                <p>1</p>

                <div className='song-item__album'>

                    <img className='song-item__image' src="" alt="imagem da musica" />

                    <p className='song-item__name'>Ultima Saudade</p>
                </div>
            </div>

            <p>2:01</p>
        </Link>

    )
}

export default SongItem