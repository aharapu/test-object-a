import React, {useState} from 'react'
import './App.scss';
import Header from '../Header';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import Profile from '../Profile';
import SortResults from '../SortResults';
import RelatedSearches from '../RelatedSearches';
import Definition from '../Definition';

const App = () => {
    const [hasDefinition, setHasDefinition] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="searchresultsfilters">
            <Header data-test="header-component" />
            <aside>
                <RelatedSearches />
            </aside>
            <div data-test="center-area">
                <SearchBar />
                {hasDefinition && <Definition />}
                {searchResults.map((sr) => (
                    <Profile key={sr.id} data={sr} />
                ))}
            </div>
            <aside>
                <SortResults />
            </aside>
            <Footer data-test="footer-component" />
        </div>
    );
};

export default App;
