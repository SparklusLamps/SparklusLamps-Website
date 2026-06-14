import React from "react";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import { downloadResources } from "../../constants";
import "./DownloadResources.css";

const DownloadResources = () => {
  const {
    title,
    description,
    downloadButtonText,
    catalogUrl,
    catalogImage,
    whatsappButtonText,
    whatsappLink,
  } = downloadResources;

  return (
    <div className="hub-column download-resources">
      <h3 className="hub-column-title">{title}</h3>

      <p className="resources-description">{description}</p>

      <a
        href={catalogUrl}
        className="resources-download-btn"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {downloadButtonText}
        <FaDownload />
      </a>

      <div className="resources-image">
        <img src={catalogImage} alt="Sparklus Lamps catalog preview" />
      </div>

      <a
        href={whatsappLink}
        className="resources-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        {whatsappButtonText}
      </a>
    </div>
  );
};

export default DownloadResources;
