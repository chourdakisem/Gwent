const Ranged = ({ranged}) => {
    return (
        <div className='player-ranged'>
            <div className='row-score'>{ranged.reduce((a, b) => a + b.power, 0)}</div>
            <div className='morale' ></div>
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