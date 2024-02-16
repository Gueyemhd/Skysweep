import InfoTolBar from "../../components/infoTolBar/infoTolBar"; 
import "./infoDepot.css"
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const db = getFirestore();

//for test
const InfoPage = () => {
    const { id } = useParams();
    const docRef = doc(db, "points", id);
    const [imageUrl, setImageUrl] = useState(null);
    const [ville, setVille] = useState(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const [nanoseconds, setNanoseconds] = useState(null);

    useEffect(() => {
        getDoc(docRef).then((doc) => {
            const storage = getStorage();
            const data = doc.data()
            setVille(data.ville);
            setLng(data.lng);
            setLat(data.lat);
            setSeconds(data.Datetime.seconds); 
            setNanoseconds(data.Datetime.nanoseconds)
            console.log("=====Fetch=====")
            console.log(doc.data().Datetime)
            const fileRef = ref(storage, "gs://skysweep-393a1.appspot.com"+doc.data().ref);
        
            getDownloadURL(fileRef)
              .then((url) => {
                // Mettre à jour l'URL de l'image
                console.log("====URL=====")
                console.log(url)
                setImageUrl(url);
              })
              .catch((error) => {
                // Gérer les erreurs
                console.error("Une erreur s'est produite:", error);
              });
        })
   
      }, []);

    return ( 
        <div className="corps">
            <InfoTolBar ville={ville} lng={lng} lat={lat} seconds={seconds} nanoseconds={nanoseconds}></InfoTolBar>
           
            <div className="depot">
                {/* <img src={MyDepot} alt="" /> */}
                {imageUrl && <img src={imageUrl} alt="Image from Firebase Storage" />}
            </div>
        </div>
     );
}
 
export default InfoPage;