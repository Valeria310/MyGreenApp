import React from 'react';
import { useState } from 'react';

export const SearchForm = () => {
    const [results, setResults] = useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const searchForm = document.getElementById('searchForm');
        setInputValue(value);
        if (value.length>=3) {
            findResults(value);
            searchForm?.classList.add('showes');
        } else {
            setResults([]);
            searchForm?.classList.remove('showes');
        }
    };
    
    const findResults = async (value:string) => {
        const data = await (await import('../../search.json')).data;
        const options = Array.from(new Set(Array.from(data, (x) => x.tags).concat(Array.from(data, (x)=>x.title)).flat()));
        const searchRes= options.filter(res => res.includes(value.toLowerCase()));
        const noRes = 'По вашему запросу ничего не найдено';
        if (searchRes.length>0) {
            setResults(searchRes);
        } else {
            setResults([noRes]);
        }
    };

    return (<form className="search-form" id='searchForm' onSubmit={(e) => {e.preventDefault(); return false;}}>
        <input key={1} className="search-input" id='searchInput' type="text" placeholder="Поиск по сайту" value={inputValue} onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e)} maxLength={28} autoComplete='off'/>
        <div className='underline'></div>
        <div className='res-list'>
            {results.map((result, i) => (
                <div className='res-item' key={i}>{result}</div>
            ))}
        </div>
    </form>);
};
