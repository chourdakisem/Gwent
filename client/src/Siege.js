const Siege = ({siege}) => {
    return (
        <div id='player1-siege'>
            <div className='row-score'>{siege.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale'></div>
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