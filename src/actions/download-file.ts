import axios from 'axios';

export interface IDownloadFileProp {
  link: string;
  fileName: string;
}
export const downloadFile = ({ link, fileName }: IDownloadFileProp) => {
  axios({
    url: link,
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};
