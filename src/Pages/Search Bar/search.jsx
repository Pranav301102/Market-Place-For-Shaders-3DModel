import React from "react";
import "./search.css";
function Search({ query, setQuery }) {
	return (
		<>
			<form class="search-container">
				<input
					type="text"
					id="search-bar"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="What can I help you with today?"
				/>
				<a href="#">
					<img
						class="search-icon"
						src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
					/>
				</a>
			</form>
		</>
	);
}

export default Search;
