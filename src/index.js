import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBfEWb3HWUrMqUXaFH3gjfwdQzTqLsg0Hg';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));