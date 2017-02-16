import React from 'react';

class Topbar extends React.Component{
	checkimp = (props) => {
    if(this.props.ques_data.ques_imp===true)
      return 'IMPORTANT';
  }
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
          </div><button className="testTool_topBar_stateBtn -strk js-btn-finish-assessment difficulty-btn"> {this.props.ques_data.ques_level} </button><button className="testTool_topBar_stateBtn -strk js-btn-finish-assessment difficulty-btn"> {this.checkimp()} </button>
          <h1 className="testTool_topBar_title"> {this.props.ques_data.chap_name}</h1></div>
      </div>
    </div>
			);
	}
}
export default Topbar;