import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';

function App() {
    const player = {
        name: "Caitlin clark ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHDOj9m5uc24-ethYpKkjmXEB8RFWvwlrKQ&s",
        position: "Forward",
        stats: {
            pointsPerGame: 25.4,
            assistsPerGame: 7.1,
            reboundsPerGame: 10.5
        },
        info: "Caitlin Clark is an exceptional American college basketball player who plays for the Iowa Hawkeyes in the NCAA. Known for her scoring prowess, playmaking abilities, and competitive spirit, Clark has quickly risen to prominence as one of the top players in women's college basketball. She consistently posts impressive statistics, leading her team in points, assists, and rebounds. Clark's remarkable skills on the court have earned her numerous accolades and recognition, solidifying her reputation as a future star in the sport."
    };

    return (
        <div className="App">
            <BasketballPlayerCard 
                name={player.name}
                image={player.image}
                position={player.position}
                stats={player.stats}
                info={player.info}
            />
        </div>
    );
}

export default App;
