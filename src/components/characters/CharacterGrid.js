import React from 'react'
import Spinner from '../UI/Spinner'
import CharacterItem from './CharacterItem'

// instead of using props, 
// by using {} and specify names, you can use that 
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ?
        // since calling an api, it may take some time so when this component renders but the response is not yet received, show a spinner
        <Spinner/>
        :
        <section className="cards">
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
}

export default CharacterGrid
