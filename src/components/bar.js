import React from 'react';

const Bar = () => {
	return (
		<div className="testTool_btmBar">
			<div className="testTool_btmBar_actionBtn testTool_btmBar_actionBtn_primary testTool_btmBar_actionBtn_primary-fullWidth js-primary-btn-bottom ">Next</div>
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
export default Bar;
