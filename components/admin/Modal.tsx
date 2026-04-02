"use client";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dim background with fade */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal content with animation */}
      <div className="relative z-10 bg-white rounded-xl shadow-2xl p-6 w-[420px] animate-[fadeIn_0.3s_ease-out]">
        {children}
      </div>
    </div>
  );
}
