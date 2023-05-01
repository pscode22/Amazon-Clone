import React from 'react';
import amazonLogo from '@assets/svg/amazon.svg';
import locationLogo from '@assets/svg/location.svg';
import searchLogo from '@assets/svg/search.svg';

export default function MainHeader() {
  return (
    <div className="w-full bg-[#131921] h-[6rem] px-2 flex gap-1">
      <div className="w-[12rem] h-min my-auto">
        <div className="border border-transparent hover:border-white hover:cursor-pointer">
          <img src={amazonLogo} alt="amazon-logo" className="m-2" />
        </div>
      </div>

      <div className="my-auto border border-transparent hover:border-white hover:cursor-pointer">
        <div className="flex gap-1 m-1">
          <div className="m-auto">
            <img src={locationLogo} alt="locationLogo" />
          </div>
          <div className="me-1">
            <p className="text-xs">Hello</p>
            <p className="text-sm font-bold">Select your address</p>
          </div>
        </div>
      </div>

      <div className="h-[4rem] my-auto flex">
        <input
          type="text"
          className="h-full bg-white text-black text-base w-[76rem]"
        />
        <button
          className="h-full bg-secondaryYellow"
          style={{ borderRadius: '0 .4rem .4rem 0' }}
          type="button"
        >
          <img
            src={searchLogo}
            alt="headerSearch"
            className="my-[.8rem] mx-[1rem]"
          />
        </button>
      </div>
    </div>
  );
}
