import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF, { jspdf } from 'jspdf';
const DownloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a2")
            pdf.addImage(imgData, "pdf", 3, 40)
            pdf.save(`${downloadFileName}`)
        })
    }
    return (
        <div>
            <div class="buttons pull-right">
               
                <button class="btn btn-primary" onClick={downloadFileDocument}><i class="fa fa-cloud-download" aria-hidden="true"></i>Download Resume as
                    doc</button>
            </div>
        </div>
    );
}

export default DownloadPage;