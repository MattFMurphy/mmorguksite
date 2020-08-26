import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class DeskHeader extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<header className="hidden-xs">
				<div className="desk-header" data-spy="affix" data-offset-top="200">
					<div className="container">
						<div className="row">Hello</div>
                        <Button/>
					</div>
				</div>
			</header>
		);
	}
}
export default DeskHeader;
