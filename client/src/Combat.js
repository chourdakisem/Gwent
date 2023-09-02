const Combat = ({combat}) => {
    return (
        <div className='player-combat'>
            <div className='row-score'>{combat.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale'></div>
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