import ServerActions from './actions/ServerActions';

let API = {
	fetchLinks() {
		console.log('1. in API');
		fetch('/data/links')
			.then(response => response.json())
			.then(data => {
				ServerActions.receiveLinks(data);
			})
	}
};

export default API;