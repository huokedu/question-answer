import React from 'react';

const Sidebar = () => {
	return (
		<div className="testTool_sideBar testTool_sideBar-tillBottom js-sidebar">
      <div className="goalsList mt-15 testTool_goalList js-goals-list pl-30">
        <div className="testTool_sideBar_sHeading mb-20">Goals</div>
        <div className="pr-30">
          <div className="goalsList_goal goalsList_goal-small goalsList_goal-animate js-goal" id="goal-63829" data-goal_id="63829" data-progress="0">
            <div className="goalsList_goal_num goalsList_goal_num-small">1</div>
            <div className="goalsList_goal_content goalsList_goal_content-small">
              <div className="goalsList_goal_title goalsList_goal_title-small">Basics of Friction</div>
              <div className="goalsList_goal_desc goalsList_goal_desc-small"></div>
              <div className="goalsList_goal_progress color-prog-0p js-progress">
                <div className="goalsList_goal_progress_val goalsList_goal_progress_val-small js-score">0%</div>
                <div className="goalsList_goal_progress_meter">
                  <div className="goalsList_goal_progress_meter_fill js-meter-fill" style={{width: "0%"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="goalsList_goal goalsList_goal-small goalsList_goal-animate js-goal" id="goal-63830" data-goal_id="63830" data-progress="0">
            <div className="goalsList_goal_num goalsList_goal_num-small">2</div>
            <div className="goalsList_goal_content goalsList_goal_content-small">
              <div className="goalsList_goal_title goalsList_goal_title-small">Static Friction</div>
              <div className="goalsList_goal_desc goalsList_goal_desc-small"></div>
              <div className="goalsList_goal_progress color-prog-0p js-progress">
                <div className="goalsList_goal_progress_val goalsList_goal_progress_val-small js-score">0%</div>
                <div className="goalsList_goal_progress_meter">
                  <div className="goalsList_goal_progress_meter_fill js-meter-fill" style={{width: "0%"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="goalsList_goal goalsList_goal-small goalsList_goal-animate js-goal" id="goal-63831" data-goal_id="63831" data-progress="0">
            <div className="goalsList_goal_num goalsList_goal_num-small"><i className="fa fa-lock q_tip_s"></i></div>
            <div className="goalsList_goal_content goalsList_goal_content-small">
              <div className="goalsList_goal_title goalsList_goal_title-small">Kinetic Friction</div>
              <div className="goalsList_goal_desc goalsList_goal_desc-small"></div>
              <div className="goalsList_goal_progress color-prog-0p js-progress">
                <div className="goalsList_goal_progress_val goalsList_goal_progress_val-small js-score">0%</div>
                <div className="goalsList_goal_progress_meter">
                  <div className="goalsList_goal_progress_meter_fill js-meter-fill" style={{width: "0%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testTool_sideBar_overlay js-sidebar-overlay"></div>
    </div>);

}
export default Sidebar;
