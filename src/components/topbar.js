import React from 'react';

class Topbar extends React.Component{
	render(){
		return (
			<div>
      <div className="testTool_topBar">
        <div className="testTool_topBar_container cf"><button className="testTool_topBar_stateBtn -strk js-btn-finish-assessment"><i className="fa fa-pause"></i><span className="testTool_topBar_stateBtn_text">Pause</span></button>
          <div className="testTool_topBar_timer js-header-timer" style={{display: "block"}}>
            <div className="testTool_topBar_timer_title js-timer-title">Time Elapsed</div>
            <div className="testTool_topBar_timer_val"><span className="js-test-timer-hours">1</span>
              49
              <span className="js-test-timer-minutes">1</span>
              51
              <span className="js-test-timer-seconds">59</span></div>
          </div><button className="testTool_topBar_stateBtn -strk js-btn-finish-assessment difficulty-btn"> DIFFICULT </button><button className="testTool_topBar_stateBtn -strk js-btn-finish-assessment difficulty-btn"> IMPORTANT </button>
          <h1 className="testTool_topBar_title"> 56 Biological classification 57 Practice</h1></div>
      </div>
    </div>
			);
	}
}
export default Topbar;