import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';
import Main from './components/Main';

render(<Main limit={6}/>, document.getElementById('react'));

console.log(
	Relay.QL`
		query Test {
			links {
				title
			}
		}		
	`
);
