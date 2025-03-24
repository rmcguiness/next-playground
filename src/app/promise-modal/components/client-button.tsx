'use client';

import { useEffect, useState } from 'react';
interface ModalInfo {
  id: number;
  title: string;
  body: string;
  // ... other fields from your API
}

interface ClientButtonProps {
  modalInfo: ModalInfo;
  remainingModalInfoPromise?: Promise<ModalInfo[]>;
}

export default function ClientButton({ modalInfo, remainingModalInfoPromise }: ClientButtonProps) {
  const [allModalInfo, setAllModalInfo] = useState<ModalInfo[]>([modalInfo]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (remainingModalInfoPromise) {
      setIsLoading(true);
      remainingModalInfoPromise.then(remainingInfo => {
        setAllModalInfo(current => [...current, ...remainingInfo]);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [remainingModalInfoPromise]);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % allModalInfo.length);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              name="modalIndex"
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
              className="mr-2"
            />
            <span className="text-sm">Option {index + 1}</span>
          </label>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        disabled={isLoading && currentIndex >= allModalInfo.length}
        className={`px-4 py-2 rounded-md transition-colors ${
          isLoading && currentIndex >= allModalInfo.length
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isLoading && currentIndex >= allModalInfo.length ? 'Loading...' : 'Open Modal'}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{allModalInfo[currentIndex].title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="mb-4">
              <p>{allModalInfo[currentIndex].body}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}