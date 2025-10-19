"use client";

import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    closeModal,
  };
};
