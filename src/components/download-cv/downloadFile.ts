// import { useState, useRef, useEffect } from 'react';
// import { message } from 'antd';
// import axios, { AxiosResponse } from 'axios';

// export interface IDownloadFile {
//   getCVProp: () => Promise<AxiosResponse<Blob>>;
// }
// export interface IgetCV {
//   cv_id: string;
// }

// export const DownloadFile = ({ cv_id }: any) => {
//   const ref = useRef<HTMLAnchorElement | null>(null);
//   const [url, setFileUrl] = useState<string>();
//   const [name, setFileName] = useState<string>();

//   const getCV = async ({ getCVProp }: IDownloadFile) => {
//     try {
//       const data = axios.get(
//         `https://raw.githubusercontent.com/anubhav-goel/react-download-file-axios/main/sampleFiles/${cv_id}`,
//         { responseType: 'blob' },
//       );
//       const url = URL.createObjectURL(new Blob([data]));
//       setFileUrl(url);
//       setFileName(getFileName());
//       ref.current?.click();
//       URL.revokeObjectURL(url);
//     } catch (error: any) {
//       message.error(error.message);
//     }
//   };
//   const getFileName = () => {
//     return '_sample-file.csv';
//   };
//   useEffect(() => {
//     getCV();
//   }, [])
//   return { ref, url, name };
// };
