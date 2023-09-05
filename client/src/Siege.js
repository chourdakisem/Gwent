const Siege = ({siege, morale, setMorale, playerMorale, setPlayerMorale, handlePlayerCards}) => {

    const handleClick = () => {
        if (morale) {
            setPlayerMorale({...playerMorale, siege : morale});
            handlePlayerCards(morale);
            setMorale('');
        }
    };

    return (
        <div id='player1-siege'>
            <div className='row-score'>{siege.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale' onClick={handleClick} style={morale ? {backgroundColor: 'green'} : {}}>
                <img src={playerMorale.siege?.url} style={{objectFit: 'fill', width: '100%', height: '100%'}} />
            </div>
            <div className='cards-space'>
                {siege.map((item, index) => (
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

export default Siege;