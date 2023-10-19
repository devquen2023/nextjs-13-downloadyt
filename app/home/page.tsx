import { useCallback, useState } from "react"
import styles from "./home.module.css";
import { API_URL, API_URL_TOKEN} from "httpClient"
import axios from "axios";
// async function getData(idVideo:string|string[]) {
//     const dataToken = await axios.post(`https://api.vtvgiaitri.vn/api/v3/episode/latest_section`);
//     console.log(dataToken)
//     const axiosConfig = {
//         headers: {
//           Authorization: `Bearer ${dataToken?.data?.token}`,
//         },
//       }

//       const response = await axios.get(`${API_URL}/video-stream?id=${idVideo}`,axiosConfig);
//       console.log(response)
//       // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
   
//     if (!response) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return response.data
//   }
const Home = async () =>{
    // const data = await getData("GpmOn4RyzZI");
    // console.log(data)

  
    return (<>
    <div className={styles.homeContainer}>
    <h1>Download Video from Youtube</h1>
        
    </div>

    </>)
}
export default Home