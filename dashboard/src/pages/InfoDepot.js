import InfoTolBar from "../components/infoTolBar/infoTolBar"; 
import "./infoDepot.css"
import MyDepot from "../utils/depot.png"

const InfoPage = () => {
    return ( 
        <div className="corps">
            <InfoTolBar></InfoTolBar>
            <div className="depot">
                <img src={MyDepot} alt="" />
            </div>
        </div>
     );
}
 
export default InfoPage;