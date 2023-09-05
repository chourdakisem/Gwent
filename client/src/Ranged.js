const Ranged = ({ranged, morale, setMorale, playerMorale, setPlayerMorale, handlePlayerCards}) => {

    const handleClick = () => {
        if (morale) {
            setPlayerMorale({...playerMorale, ranged : morale});
            handlePlayerCards(morale);
            setMorale('');
        }
    };

    return (
        <div className='player-ranged'>
            <div className='row-score'>{ranged.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale' onClick={handleClick} style={morale ? {backgroundColor: 'green'} : {}}>
                <img src={playerMorale.ranged?.url} style={{objectFit: 'fill', width: '100%', height: '100%'}} />
            </div>
            <div className='cards-space'>
                {ranged.map((item, index) => (
                    <img 
                        key={index} 
                        src={item.url} 
                        style={{objectFit: 'fill', width: 'auto', height: '100%'}} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Ranged;