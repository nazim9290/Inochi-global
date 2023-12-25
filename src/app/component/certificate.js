import React from 'react';
import html2pdf from 'html2pdf.js';

const CertificatePage = () => {
  const generatePDF = () => {
    const element = document.getElementById('certificate-container');
    html2pdf(element);
  };

  return (
    <div>
      <h1>Your Certificate</h1>
      <div id="certificate-container">
        <img src="/certificate.jpg" alt="Certificate" />
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default CertificatePage;
