import React from "react";
import DeskHeader from "./DeskHeader";
import MobHeader from "./MobHeader";
class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="site-headers">
				<DeskHeader />
				<MobHeader />
			</div>
		);
	}
}
export default Header;
