// src/components/Certificate.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../App.css';

const Certificate = ({ username }) => {
  const certRef = useRef();

  const downloadPDF = () => {
    html2canvas(certRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'PNG', 10, 10, 280, 150);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div className="certificate-section">
      <div className="certificate" ref={certRef}>
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
        <h2>{username}</h2>
        <p>has successfully completed the full learning journey.</p>
        <p>Videos Watched: 10 | Quizzes Passed: 10</p>
        <p><strong>Presented by Learnify</strong></p>
        <p className="cert-date">{new Date().toDateString()}</p>
      </div>
      <button className="download-btn" onClick={downloadPDF}>Download Certificate</button>
    </div>
  );
};

export default Certificate;
