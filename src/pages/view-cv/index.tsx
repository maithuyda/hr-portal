import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from 'antd';
import samplePDF from './sample-cv.pdf';
import './index.scss';
export default function ViewCV() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: any) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="view-cv">
      <Document className="view-cv-document" file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="view-cv-navigation">
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <Button disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </Button>
        <Button disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}
