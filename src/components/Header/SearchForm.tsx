import React, { useRef } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export const SearchForm = () => {
    const searchForm = useRef<HTMLFormElement>(null);
    const searchBtn = useRef<HTMLDivElement>(null);
    const searchInput = useRef<HTMLInputElement>(null);

    const [results, setResults] = useState<string[]>([]);
    const [resultsList, setResultsList] = useState<any[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const searchForm = e.currentTarget.parentElement;
        setInputValue(value);
        if (value.length >= 3) {
            findResults(value);
            searchForm?.classList.add('showes');
            searchForm?.classList.add('opened');
        } else {
            setResults([]);
            searchForm?.classList.remove('showes');
        }
    };

    const findResults = async (value: string) => {
        const data = await (await import('../../search.json')).data;
        const options = Array.from(
            new Set(
                Array.from(data, (x) => x.tags)
                    .concat(Array.from(data, (x) => x.title))
                    .flat()
            )
        );

        const searchRes = options.filter((searchTag) => searchTag.toLowerCase().includes(value.toLowerCase()));
        const preSearchRes: any[] = [];
        searchRes.forEach((tag) => {
            preSearchRes.push(...data.filter((res) => res.title.includes(tag) || res.tags.includes(tag)));
        });
        setResultsList(Array.from(new Set(preSearchRes)));
        const noRes = 'По вашему запросу ничего не найдено';
        if (searchRes.length > 0) {
            setResults(searchRes);
        } else {
            setResults([noRes]);
        }
    };

    const showCloseSearchBtn = (event: React.FormEvent<HTMLInputElement>) => {
        const closeSearchBtn = event.currentTarget.parentElement?.lastChild as HTMLDivElement;
        closeSearchBtn.classList.remove('hidden');
    };

    const hideCloseSearchBtn = (event: React.FormEvent<HTMLInputElement>) => {
        const closeSearchBtn = event.currentTarget.parentElement?.lastChild as HTMLDivElement;
        if (!document.getElementById('header')?.contains(event.currentTarget) && !event.currentTarget.value) {
            closeSearchBtn.classList.add('hidden');
        }
    };
    const handleCloseSearchClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const searchForm = event.currentTarget.parentElement;
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = event.currentTarget.parentElement?.firstChild as HTMLInputElement;

        if (searchInput != null) {
            searchInput.value = '';
            searchInput.setAttribute('value', '');
        }
        searchForm?.classList.remove('opened');
        searchForm?.classList.remove('showes');
        if (document.getElementById('header')?.contains(event.currentTarget)) {
            searchBtn?.classList.remove('opened');
        }
        setInputValue('');
        setResults([]);
        searchInput?.blur();
        event.currentTarget.classList.add('hidden');
    };

    const handleTagLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const searchForm = event.currentTarget.parentElement?.parentElement;
        const searchInput = searchForm?.firstChild as HTMLInputElement;
        const closeSearchBtn = searchInput?.parentElement?.lastChild as HTMLDivElement;
        if (searchInput != null) {
            searchInput.value = '';
            searchInput.setAttribute('value', '');
        }
        searchForm?.classList.remove('opened');
        searchForm?.classList.remove('showes');
        setInputValue('');
        setResults([]);
        searchInput?.blur();
        searchBtn.current?.classList.remove('opened');
        closeSearchBtn?.classList.add('hidden');
    };
    const handleSearchClick = () => {
        if (searchForm.current?.classList.contains('opened')) {
            searchForm.current?.classList.remove('opened');
            searchForm.current?.classList.remove('showes');
            searchBtn.current?.classList.remove('opened');
            searchInput.current?.blur();
        } else {
            searchForm.current?.classList.add('opened');
            searchBtn.current?.classList.add('opened');
            searchInput.current?.focus();
        }
    };

    return (
        <form
            ref={searchForm}
            className="search-form"
            onSubmit={(e) => {
                e.preventDefault();
                return false;
            }}
        >
            <input
                ref={searchInput}
                key={1}
                className="search-input"
                id="searchInput"
                type="text"
                placeholder="Поиск по сайту"
                value={inputValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e)}
                maxLength={28}
                autoComplete="off"
                onFocus={(e: React.FormEvent<HTMLInputElement>) => showCloseSearchBtn(e)}
                onBlur={(e: React.FormEvent<HTMLInputElement>) => hideCloseSearchBtn(e)}
            />
            <div ref={searchBtn} className="search-btn" id="searchBtn" onClick={handleSearchClick}></div>
            <div className="underline"></div>
            <div className="res-list">
                {results.map((result, i) => (
                    <Link
                        to={'/search-results'}
                        state={[result, resultsList]}
                        className="res-item"
                        key={i}
                        onClick={(e) => {
                            handleTagLinkClick(e);
                        }}
                    >
                        {result}
                    </Link>
                ))}
            </div>
            <div className="close-search hidden" onClick={(e) => handleCloseSearchClick(e)}></div>
        </form>
    );
};
