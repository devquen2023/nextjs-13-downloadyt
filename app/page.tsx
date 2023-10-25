'use client';
import axios from "axios";
import { Form } from "components";
import { API_URL, API_URL_TOKEN } from "httpClient";
import { FormEvent, useState } from "react";
import styles from "./home/home.module.css";
import { extractYouTubeVideoId, isValidYouTubeURL } from "utils";
import swal from 'sweetalert';
import Link from "next/link";

async function getData(idVideo: string | File) {
    if (!idVideo) {
        return;
    }
    try {
        const dataToken = await axios.get(`${API_URL_TOKEN}/auth/get-token`);
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${dataToken?.data?.token}`,
                "author": 'phuongmychimusic'
            },
        };
        const response = await axios.get(`${API_URL}/video-stream?id=${idVideo}`, axiosConfig);

        return response.data;
    } catch (error: any) {
        if (error.response) {
            if (error?.response?.data?.statusCode === 503) {
                // console.log("Service Unavailable (503) error:", error.message);
                swal("Oops", `${error?.response?.data?.error}`, "error");


            } else {
                console.log("Unknown error with status code:", error.response.statusCode);
            }
        } else {
            console.log("Request failed with an unknown error:", error.message);
        }
    }
}

const Home = () => {
    const [data, setData] = useState<any>();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const urlVideo = formData.get("urlVideo");

        if (urlVideo) {

            const urlVideoString: string = urlVideo.toString();
            const idVideo = extractYouTubeVideoId(urlVideoString);
            const idVideoString: any = idVideo?.toString();

            const isValid = isValidYouTubeURL(urlVideoString);

            if (isValid) {
                const data = await getData(idVideoString);
                setData(data);
            } else {
             swal("Oops", `Pls enter correct Youtube or Phuong My Chi Music Url`, "error");

            }
        }
    }

    const audioFilter = data?.adaptiveFormats?.filter((item: any) => item?.audioQuality === 'AUDIO_QUALITY_MEDIUM')

    return (<>
        <div className={styles.homeContainer}>
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1> Download Video from Youtube</h1>
                    <Form onSubmit={onSubmit} />
                </div>
                {/* <div >
                    <h3 > Url Support :</h3>
                    <div style={{fontSize:'12px'}}>
                    <p>https://youtube.com/watch?v=xxxxx</p>
                    <p>https://phuongmychi.vn/watch?v=xxxxx</p>
                    <p>https://youtu.be/xxxxxx</p>
                    </div>
                </div> */}

                {data ? <div className={styles.infoDownload}>
                    <h3>{data?.title}</h3>
                    <a className={styles.a} style={{ margin: '0 2px' }} target="_blank" href={data?.mp4URL} download>Download</a>

                    <a className={styles.a} target="_blank" href={audioFilter?.[0]?.url} download>Download Mp3 </a>

                    <p>By clicking Download, you agree to our <Link target="_blank" style={{ textDecoration: 'none' }} href={"/term"}>Terms of service</Link></p>
                </div> : <div className={styles.infoDownload}>
                    <h3>Content Download will appear here</h3>
                    
                </div>}
            </div>
        </div>

    </>)
}
export default Home
