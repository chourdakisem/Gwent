const Combat = ({combat, morale, setMorale, playerMorale, setPlayerMorale, handlePlayerCards}) => {

    const handleClick = () => {
        if (morale) {
            setPlayerMorale({...playerMorale, combat : morale});
            handlePlayerCards(morale);
            setMorale('');
        }
    };

    console.log(playerMorale);

    return (
        <div className='player-combat'>
            <div className='row-score'>{combat.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale' onClick={handleClick} style={morale ? {backgroundColor: 'green'} : {}}>
                <img src={playerMorale.combat?.url} style={{objectFit: 'fill', width: '100%', height: '100%'}} />
            </div>
            <div className='cards-space'>
                {combat.map((item, index) => (
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

export default Combat;