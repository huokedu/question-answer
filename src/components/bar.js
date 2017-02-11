import React from 'react';

class Bar extends React.Component {
	constructor(props) {
		super(props);
		
	}
	submitstate() {
		let self=this;
		if(self.props.option===null||self.props.correct_status!=null)
			return (<div className="testTool_btmBar_actionBtn testTool_btmBar_actionBtn_primary grey testTool_btmBar_actionBtn_primary-fullWidth js-primary-btn-bottom">Next</div>);
		else
			return (<div className="testTool_btmBar_actionBtn testTool_btmBar_actionBtn_primary testTool_btmBar_actionBtn_primary-fullWidth js-primary-btn-bottom" onClick={() => self.props.checkanswer()} >Submit</div>);
	}
	checkanswer() {
		let self=this;
		self.props.checkanswer();
	}
	render() {
		return (
			<div className="testTool_btmBar">
				{this.submitstate()}>
      			<div className="testTool_btmBar_loadingView hide js-loading-view-bottom">
        			<div className="loadingDots loadingDots-h15 ma testTool_btmBar_loadingView_dots">
        				<span className="loadingDots_dot loadingDots_dot-d1"></span>
        				<span className="loadingDots_dot loadingDots_dot-d2"></span>
        				<span className="loadingDots_dot loadingDots_dot-d3"></span>
          			<div className="clr"></div>
        			</div>
      			</div>
    		</div>
		);
	}
	
}

export default Bar;
