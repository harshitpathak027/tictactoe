import Icon from '../Icons/Icons'
import './Cards.css';

function card({player,gameEnd ,onplay,index}) {
    let icon = <Icon/>
    if(player === 'X'){
        icon = <Icon name = "cross"/>

    }
    else if(player === 'O'){
        icon = <Icon name = "circle"/>
    }
    return (
        <>
            <div className='card'  onClick={()=> !gameEnd && player==="" && onplay(index)}>
            {icon}
            </div>
        </>
    );
}

export default card;