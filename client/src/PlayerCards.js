const PlayerCards = ({handleClick, playerCards}) => {
    return (
        <div className='player-cards'>
            {playerCards.map((item, index) => (
                <img 
                    key={index} 
                    src={item.url} 
                    style={{objectFit: 'fill', width: 'auto', height: '100%', cursor: 'pointer'}}
                    onClick={() => handleClick(item)} 
                />
            ))}
        </div>
    );
};

export default PlayerCards;