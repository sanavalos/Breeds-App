import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Card from './Card';
import ScrollUp from './ScrollUp';
import NoDog from './NoDog';
import { FavoritesStyle} from './Styles';


function Favorites() {
    const favoriteDogs = useSelector((state) => state.favorites)

    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setIsDisplayed(true);
        }, 1500);
    }, []);
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <FavoritesStyle>
            <Header showSearch={false} />
            <div className='content'>
                <div>
                    <div className='cards'>
                        {
                            favoriteDogs.length > 0 ? favoriteDogs.map(dog => {
                                return <Card key={dog.id} id={dog.id} image={dog.image} name={dog.name} temperaments={dog.temperaments} weight_min={dog.weight_min} weight_max={dog.weight_max} favorite={true} />
                            }) : 
                                isDisplayed && <NoDog />
                        }
                    </div>
                </div>
            </div>
            <ScrollUp />
        </FavoritesStyle>
    )
}

export default Favorites