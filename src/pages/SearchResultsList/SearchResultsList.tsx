import React from 'react';

import { useLocation } from 'react-router-dom';

import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';

import { SearchForm } from './../../components/Header/SearchForm';
import { ResultItem } from './ResultItem';

import './SearchResultsList.scss';

export const SearchResultsList = () => {
    const { state } = useLocation();
    interface Result {
        title: string;
        text: string;
        tags: string[];
        url: string;
    }
    const filterData = () => {
        const resultsArr: Result[] = [];
        state[1].forEach((res: Result) => {
            if (res.title === state[0] || res.tags.includes(state[0])) {
                resultsArr.push(res);
            }
        });
        return resultsArr;
    };
    const filteredData = filterData();
    return (
        <React.Fragment>
            <Header />
            <div className="results-wrapper">
                <h2 className="results-title">Результаты поиска</h2>
                <p className="results-count">Количество результатов: {filteredData.length}</p>
                <SearchForm />
                {/* <div className="clear-btn" onClick={handleCleanClick}></div> */}
                <ul className="results-list">
                    {filteredData.map((res: Result, i: number) => (
                        <ResultItem key={i} itemData={res} searchTag={state[0]} />
                    ))}
                </ul>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </React.Fragment>
    );
};
