import ServerActions from './actions/ServerActions';

const query = `query { 
  links { 
    _id 
    title 
    url 
  } 
}`;

let API = {
	fetchLinks() {
		console.log('1. in API');
		fetch('/graphql', {
		  method: 'POST',
      body: JSON.stringify({query}),
      headers: {
		    'content-type': 'application/json'
      }
    })
      .then(response => response.json())
			.then(resp => {
				ServerActions.receiveLinks(resp.data.links);
			})
	}
};

export default API;