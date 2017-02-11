import React from 'react';

class Nav extends React.Component{
	render(){
		return (
			<div className="testTool_qNav">
				<a className="testTool_qNav_arrow testTool_qNav_arrow-left js-qnav-prev ">
					<i className="fa fa-angle-left"></i>
				</a>
				<a className="testTool_qNav_arrow testTool_qNav_arrow-right js-qnav-next">
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
			);

	}
}
export default Nav;