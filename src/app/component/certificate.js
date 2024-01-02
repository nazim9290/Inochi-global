import React from 'react';
import html2pdf from 'html2pdf.js';
import Image from 'next/image';

const CertificatePage = () => {
  const generatePDF = () => {
    const element = document.getElementById('certificate-container');
    html2pdf(element);
  };

  return (
    <div>
      <h1>Your Certificate</h1>
      <div id="certificate-container">
        <Image src="/certificate.jpg" alt="Certificate" />
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default CertificatePage;
