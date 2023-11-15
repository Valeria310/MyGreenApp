import Markdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

interface Result {
    title: string;
    text: string;
    tags: string[];
    url: string;
}
export const ResultItem = (props: { itemData: Result; key: number; searchTag: string }) => {
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url, { state: url.slice(url.indexOf('#') + 1) });
    };
    return (
        <li className="result" onClick={() => handleClick(props.itemData.url)}>
            <h3 className="result-title">{props.itemData.title}</h3>
            <Markdown className="result-text" remarkPlugins={[remarkGfm]}>
                {props.itemData.text}
            </Markdown>
            <div className="result-tags">{props.searchTag}</div>
        </li>
    );
};
