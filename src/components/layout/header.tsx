import React from 'react';
import amazonLogo from '@assets/png/amazon-logo.png';

export default function MainHeader() {
  return (
    <div className="w-full bg-[#131921] h-[6rem] px-2  gap-1">
      <div className="w-[12rem] h-full">
        <div className="h-full flex align-middle justify-center py-2">
          <img
            src={amazonLogo}
            alt="amazon-logo"
            className="border border-transparent cursor-pointer hover:border-white p-2"
          />
        </div>
      </div>

      <div className="my-[.5rem] border border-white">ded</div>
    </div>
  );
}
