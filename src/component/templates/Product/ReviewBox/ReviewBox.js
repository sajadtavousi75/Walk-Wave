import React from "react";

export default function ReviewBox() {
  return (
    <div className="review-box w-[100%] h-[110px] rounded-[24px] p-4 bg-primary1 ">
      <div className="top flex flex items-center justify-between w-[100%]">
        <div className="left flex items-center justify-between gap-2">
            <h1 className="font-kohob">5</h1>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="#ffd700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.15317 3.90838C9.41981 1.63613 10.0531 0.5 11 0.5C11.9469 0.5 12.5802 1.63612 13.8468 3.90837L14.1745 4.49624C14.5345 5.14194 14.7144 5.4648 14.9951 5.67782C15.2757 5.89084 15.6251 5.96991 16.3241 6.12806L16.9605 6.27204C19.4201 6.82857 20.65 7.10683 20.9426 8.04774C21.2352 8.98861 20.3968 9.96911 18.7199 11.9299L18.2861 12.4372C17.8096 12.9944 17.5713 13.273 17.4641 13.6177C17.357 13.9624 17.393 14.3341 17.465 15.0776L17.5306 15.7544C17.7841 18.3706 17.9109 19.6787 17.1449 20.2602C16.3788 20.8417 15.2273 20.3115 12.9243 19.2512L12.3285 18.9768C11.6741 18.6755 11.3469 18.5248 11 18.5248C10.6531 18.5248 10.3259 18.6755 9.67151 18.9768L9.07571 19.2512C6.77269 20.3115 5.62119 20.8417 4.85516 20.2602C4.08913 19.6787 4.21589 18.3706 4.46941 15.7544L4.53499 15.0776C4.60704 14.3341 4.64306 13.9624 4.53587 13.6177C4.42869 13.273 4.19044 12.9944 3.71393 12.4372L3.28011 11.9299C1.60325 9.96911 0.764822 8.98861 1.05742 8.04774C1.35002 7.10683 2.57986 6.82857 5.03955 6.27204L5.6759 6.12806C6.37486 5.96991 6.72434 5.89084 7.00495 5.67782C7.28556 5.4648 7.46554 5.14195 7.82548 4.49624L8.15317 3.90838Z" />
          </svg>
          <p className="font-kohol">user name</p>
        </div>
        <div className="right">
            <p className="font-kohol text-secondary1">31 March 2024</p>
        </div>
      </div>
      <div className="text">
            <p className="font-quikr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  );
}
