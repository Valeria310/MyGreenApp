import { FC, useState } from 'react';
import { RecycleCardProps } from './RecycleCardProps';

import RecycleArrow from '../../assets/icons/recycle-arrow.svg';
import RecycleCross from '../../assets/icons/recycle-cross.svg';

import './RecycleCard.scss';

export const RecycleCard: FC<RecycleCardProps> = ({card}) => {
    const { content } = card;
    const [isExpanded, setExpanded] = useState(false);
    
    return (
        <div className={`recycle-card ${card.type}-card ${isExpanded ? 'recycle-card-expanded' : ''}`}>
            <div className="recycle-card__header">
                <img src={card.image} alt={card.type} className='recycle-card__image' />
                <div className='recycle-card__description'>
                    <div className="recycle-card__info">
                        <h3 className='recycle-card__heading'>{card.heading}</h3>
                        <p className='recycle-card__text'>{card.text}</p>
                    </div>
                    <button
                        type='button'
                        className='recycle-card__button'
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        <img src={isExpanded ? RecycleCross : RecycleArrow} alt={isExpanded ? 'recycle-cross' : 'recycle-arrow'} />
                    </button>
                </div>
            </div>
            { isExpanded &&
                <div className="recycle-card__content">
                    <table className='recycle-table'>
                        <thead>
                            <tr>
                                {content.columns.map(col => 
                                    <th key={col.id}>{col.name}</th>    
                                )}
                            </tr>
                        </thead>    
                        <tbody>
                            <tr className='recycle-table__images'>
                                {content.columns.map(col => 
                                    <td key={col.id} className='recycle-table__image'>
                                        <img src={col.image} alt={card.type} />
                                    </td>
                                )}
                            </tr>
                            <tr className='recycle-table__descriptions'>
                                {content.columns.map(col => 
                                    <td key={col.id} className='recycle-table__description'>
                                        {col.description.map(par => 
                                            <p key={par.id}>{par.text}</p>    
                                        )}
                                    </td> 
                                )}
                            </tr>
                            <tr className='recycle-table__statuses'>
                                {content.columns.map(col => 
                                    <td key={col.id} className={`recycle-table__status recycle-status-${col.color}`}>{col.status}</td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
