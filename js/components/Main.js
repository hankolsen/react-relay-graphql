import React from 'react';
import PropTypes from 'prop-types';

import API from '../API';
import LinkStore from '../stores/LinkStore';

const _getAppStore = () => {
	return { links: LinkStore.getAll() };
};

class Main extends React.Component {

  static propTypes = {
    limit: PropTypes.number
  };

	static defaultProps = {
    limit: 3
  };

	state = _getAppStore();

  constructor(props) {
		super(props);
	}
	componentDidMount() {
		API.fetchLinks();
		LinkStore.on('change', this.onChange);
	}

	onChange = () => {
		console.log('4. In the View');
		this.setState(_getAppStore());
	};

	render() {
		const content = this.state.links.slice(0, this.props.limit).map(link => {
			return <li key={link._id}>
				<a href={link.url}>{link.title}</a>
			</li>;
		});
		return (
			<div>
				<h3>Links</h3>
				<ul>
					{content}
				</ul>
			</div>
		)
	}
}

export default Main;