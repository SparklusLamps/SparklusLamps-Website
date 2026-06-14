import React, { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaDownload,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { brochure } from "../../constants";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./BrochureModal.css";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.5;
const ZOOM_STEP = 0.25;

const BrochureModal = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [fitToWidth, setFitToWidth] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const viewportRef = useRef(null);

  const updateContainerWidth = useCallback(() => {
    if (viewportRef.current) {
      setContainerWidth(viewportRef.current.clientWidth - 32);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = "hidden";
    updateContainerWidth();

    const observer = new ResizeObserver(updateContainerWidth);
    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    return () => {
      document.body.style.overflow = "";
      observer.disconnect();
    };
  }, [isOpen, updateContainerWidth]);

  useEffect(() => {
    if (!isOpen) {
      setNumPages(null);
      setZoom(1);
      setFitToWidth(true);
      setLoading(true);
      setError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setFitToWidth(false);
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setFitToWidth(false);
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  };

  const handleResetZoom = () => {
    setFitToWidth(false);
    setZoom(1);
  };

  const handleFitToWidth = () => {
    setFitToWidth(true);
    setZoom(1);
  };

  const pageWidth = fitToWidth
    ? Math.max(containerWidth, 280)
    : Math.max(containerWidth * zoom, 200);

  if (!isOpen) return null;

  return (
    <div
      className="brochure-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="brochure-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="brochure-modal-title"
      >
        <div className="brochure-modal-header">
          <h2 id="brochure-modal-title">{brochure.title}</h2>
          <button
            type="button"
            className="brochure-icon-btn brochure-close-btn"
            onClick={onClose}
            aria-label="Close brochure"
          >
            <FaTimes />
          </button>
        </div>

        <div className="brochure-toolbar">
          <span className="brochure-page-indicator">
            {numPages ? `${numPages} pages` : "Scroll to browse"}
          </span>

          <div className="brochure-toolbar-group">
            <button
              type="button"
              className="brochure-icon-btn"
              onClick={handleZoomOut}
              disabled={!fitToWidth && zoom <= MIN_ZOOM}
              aria-label="Zoom out"
            >
              <FaSearchMinus />
            </button>
            <span className="brochure-zoom-indicator">
              {fitToWidth ? "Fit" : `${Math.round(zoom * 100)}%`}
            </span>
            <button
              type="button"
              className="brochure-icon-btn"
              onClick={handleZoomIn}
              disabled={!fitToWidth && zoom >= MAX_ZOOM}
              aria-label="Zoom in"
            >
              <FaSearchPlus />
            </button>
            <button
              type="button"
              className="brochure-text-btn"
              onClick={handleResetZoom}
              aria-label="Reset zoom to 100%"
            >
              100%
            </button>
            <button
              type="button"
              className="brochure-icon-btn"
              onClick={handleFitToWidth}
              aria-label="Fit to width"
              title="Fit to width"
            >
              {fitToWidth ? <FaCompress /> : <FaExpand />}
            </button>
          </div>

          <a
            href={brochure.url}
            download={brochure.fileName}
            className="brochure-download-btn"
          >
            <FaDownload />
            Download
          </a>
        </div>

        <div className="brochure-viewport" ref={viewportRef}>
          {loading && !error && (
            <p className="brochure-status">Loading brochure…</p>
          )}
          {error && (
            <p className="brochure-status brochure-error">
              Unable to load the brochure. Please try downloading it instead.
            </p>
          )}

          <Document
            file={brochure.url}
            onLoadSuccess={({ numPages: total }) => {
              setNumPages(total);
              setLoading(false);
              setError(false);
            }}
            onLoadError={() => {
              setLoading(false);
              setError(true);
            }}
            loading=""
            className="brochure-document"
          >
            {!error && containerWidth > 0 && numPages > 0 && (
              <div className="brochure-pages-stack">
                {Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={`page-${index + 1}`}
                    pageNumber={index + 1}
                    width={pageWidth}
                    className="brochure-page"
                    renderTextLayer
                    renderAnnotationLayer
                  />
                ))}
              </div>
            )}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
