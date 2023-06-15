import './SideBar.scss';
import Yoga from '../../assets/icons/yoga.svg';
import Swimming from '../../assets/icons/nager.svg';
import Biking from '../../assets/icons/pedaler.svg';
import Fitness from '../../assets/icons/haltere.svg'

function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="sidebar-buttons center">
        <button className="sidebar-button">
          <img src={Yoga} alt="" className="sidebar-button-logo" />
        </button>
        <button className="sidebar-button">
          <img src={Swimming} alt="" className="sidebar-button-logo" />
        </button>
        <button className="sidebar-button">
          <img src={Biking} alt="" className="sidebar-button-logo" />
        </button>
        <button className="sidebar-button">
          <img src={Fitness} alt="" className="sidebar-button-logo" />
        </button>
			</div>
			<p className="copyright">Copyright, SportSee 2020</p>
=    </aside>
  );
}

export default Sidebar;
