'use client';
import React, { useEffect } from 'react';

const Toaster = ({ successMessage, errorMessage, open, onClose }) => {
  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <div>
      <button
        type="button"
        onClick={onClose}
        style={{ display: open ? 'block' : 'none' }}
        className={`fixed right-4 top-4 z-50 rounded-md ${
          successMessage ? 'bg-green-500' : 'bg-red-500'
        } px-4 py-2 text-white transition`}
      >
        <div className="flex items-center space-x-2">
          <span
            className={`text-3xl ${successMessage ? 'bx bx-check' : 'bx bx-error'}`}
          ></span>
          <p className="font-bold">{successMessage || errorMessage}</p>
        </div>
      </button>
    </div>
  );
};

export default Toaster;
