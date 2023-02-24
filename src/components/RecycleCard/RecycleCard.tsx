import { FC } from 'react';
import { RecycleCardProps } from './RecycleCardProps';

import './RecycleCard.scss';

export const RecycleCard: FC<RecycleCardProps> = ({card}) => (
    <div className={`recycle-card ${card.direction}-${card.size}-card ${card.tone}-card`}>
        {(card.direction === 'vert' || card.size === 'small') &&
            <div className='recycle-card__heading'>{card.heading}</div>
        }
        {card.image && 
            <div className="recycle-card__image">
                <img className={`${card.direction}-${card.size}-image`} src={card.image} alt='card' />
            </div>
        }
        {card.direction === 'vert' && card.size === 'big' &&
            <div className='underliner' />
        }
        {card.direction === 'hori' && card.size === 'big' &&
            <div className='hori-big-card__info'>
                <div className='recycle-card__heading'>{card.heading}</div>
                <div className='recycle-card__text'>
                    {card.text}
                </div>
                <button className='button recycle-card__button' type='button'>
                    {card.buttonValue}
                </button>
            </div>
        }
        {card.direction === 'hori' && card.size === 'small' &&
            <div className={`hori-small-card__info`}>
                <div className='recycle-card__text'>
                    {card.text}
                </div>
                <button className='button recycle-card__button' type='button'>
                    {card.buttonValue}
                </button>
            </div>
        }
        {(card.direction !== 'hori') &&
            <>
                <div className='recycle-card__text'>
                    {card.text}
                </div>
                <button className='button recycle-card__button' type='button'>
                    {card.buttonValue}
                </button>
            </>
        }
    </div>
)