import React from 'react'
import Spinner from '../UI/Spinner'
import CharacterItem from './CharacterItem'

// instead of using props, 
// by using {} and specify names, you can use that 
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ?
        <Spinner/>
        :
        (<section className="cards">
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>)
}

export default CharacterGrid
