'use client';

import { useState } from 'react';

interface DatePickerProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function DatePicker({ placeholder, className, value, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        onClick={() => setIsOpen(!isOpen)}
        className={className}
        readOnly
      />
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 p-4 min-w-[280px]">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fairway-500 focus:border-transparent"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
