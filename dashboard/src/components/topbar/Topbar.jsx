import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      
      <div className="topbarLeft">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarCenter">

      </div>
      <div className="topbarRight">
        <div className="topbarDropdown">
          <select className="dropdown" id="nameRubrique">
            <option value="Cantonade">Cantonade</option>
            <option value="Relais">Relais</option>
            <option value="Eclaire">Eclaire</option>
            <option value="Identification">Identification</option>
          </select>
        </div>

        <div className="topbarDropdown">
          <select className="dropdown" id="nameRubrique">
            <option value="Cantonade">Cantonade</option>
            <option value="Relais">Relais</option>
            <option value="Eclaire">Eclaire</option>
            <option value="Identification">Identification</option>
          </select>
        </div>

        <div className="topbarImg">
         <ImageIcon className = "imgIcon"/>
         <div className="Note">Images</div>
        </div>
      </div>
    </div>
  );
}
