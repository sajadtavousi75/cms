import React from "react";

export default function Topbar() {
  return (
    <div className="topbar pt-5 flex items-center justify-between">
      <div className="date flex items-center gap-6">
        <svg
          width="28"
          height="31"
          viewBox="0 0 28 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66667 4.33325C1.19387 4.33325 0 5.53325 0 6.99992V25.6666C0 27.1333 1.19387 28.3333 2.66667 28.3333H10.6667H13.3333H21.3333C22.8067 28.3333 24 27.1333 24 25.6666V6.99992C24 5.53325 22.8067 4.33325 21.3333 4.33325H13.3333H10.6667H2.66667Z"
            fill="#BDC3C7"
          />
          <path
            d="M2.66667 3C1.19387 3 0 4.19387 0 5.66667V24.3333C0 25.8067 1.19387 27 2.66667 27H10.6667H13.3333H21.3333C22.8067 27 24 25.8067 24 24.3333V5.66667C24 4.19387 22.8067 3 21.3333 3H13.3333H10.6667H2.66667Z"
            fill="#282C34"
          />
          <path
            d="M2.66667 3C1.19387 3 0 4.19387 0 5.66667V9.66667V11H24V9.66667V5.66667C24 4.19387 22.8067 3 21.3333 3H13.3333H10.6667H2.66667Z"
            fill="#6D7992"
          />
          <path
            d="M6 6.33325C6 6.5959 5.94827 6.85597 5.84776 7.09862C5.74725 7.34127 5.59993 7.56175 5.41421 7.74747C5.2285 7.93318 5.00802 8.0805 4.76537 8.18101C4.52272 8.28152 4.26264 8.33325 4 8.33325C3.73736 8.33325 3.47728 8.28152 3.23463 8.18101C2.99198 8.0805 2.7715 7.93318 2.58579 7.74747C2.40007 7.56175 2.25275 7.34127 2.15224 7.09862C2.05173 6.85597 2 6.5959 2 6.33325C2 6.07061 2.05173 5.81054 2.15224 5.56789C2.25275 5.32523 2.40007 5.10476 2.58579 4.91904C2.7715 4.73332 2.99198 4.586 3.23463 4.48549C3.47728 4.38498 3.73736 4.33325 4 4.33325C4.26264 4.33325 4.52272 4.38498 4.76537 4.48549C5.00802 4.586 5.2285 4.73332 5.41421 4.91904C5.59993 5.10476 5.74725 5.32523 5.84776 5.56789C5.94827 5.81054 6 6.07061 6 6.33325Z"
            fill="#F5F5F5"
          />
          <path
            d="M22 6.33325C22 6.5959 21.9483 6.85597 21.8478 7.09862C21.7472 7.34127 21.5999 7.56175 21.4142 7.74747C21.2285 7.93318 21.008 8.0805 20.7654 8.18101C20.5227 8.28152 20.2626 8.33325 20 8.33325C19.7374 8.33325 19.4773 8.28152 19.2346 8.18101C18.992 8.0805 18.7715 7.93318 18.5858 7.74747C18.4001 7.56175 18.2528 7.34127 18.1522 7.09862C18.0517 6.85597 18 6.5959 18 6.33325C18 6.07061 18.0517 5.81054 18.1522 5.56789C18.2528 5.32523 18.4001 5.10476 18.5858 4.91904C18.7715 4.73332 18.992 4.586 19.2346 4.48549C19.4773 4.38498 19.7374 4.33325 20 4.33325C20.2626 4.33325 20.5227 4.38498 20.7654 4.48549C21.008 4.586 21.2285 4.73332 21.4142 4.91904C21.5999 5.10476 21.7472 5.32523 21.8478 5.56789C21.9483 5.81054 22 6.07061 22 6.33325Z"
            fill="#F5F5F5"
          />
          <path
            d="M2.66663 13.6665V16.3332H5.33329V13.6665H2.66663ZM6.66663 13.6665V16.3332H9.33329V13.6665H6.66663ZM10.6666 13.6665V16.3332H13.3333V13.6665H10.6666ZM14.6666 13.6665V16.3332H17.3333V13.6665H14.6666ZM18.6666 13.6665V16.3332H21.3333V13.6665H18.6666Z"
            fill="#6D7992"
          />
          <path
            d="M2.66663 17.6665V20.3332H5.33329V17.6665H2.66663ZM6.66663 17.6665V20.3332H9.33329V17.6665H6.66663ZM10.6666 17.6665V20.3332H13.3333V17.6665H10.6666ZM14.6666 17.6665V20.3332H17.3333V17.6665H14.6666ZM18.6666 17.6665V20.3332H21.3333V17.6665H18.6666Z"
            fill="#6D7992"
          />
          <path
            d="M2.66663 21.6665V24.3332H5.33329V21.6665H2.66663ZM6.66663 21.6665V24.3332H9.33329V21.6665H6.66663ZM10.6666 21.6665V24.3332H13.3333V21.6665H10.6666ZM14.6666 21.6665V24.3332H17.3333V21.6665H14.6666ZM18.6666 21.6665V24.3332H21.3333V21.6665H18.6666Z"
            fill="#6D7992"
          />
          <path
            d="M27.3885 23.5889C27.3885 25.3718 26.6802 27.0816 25.4196 28.3423C24.1589 29.6029 22.4491 30.3112 20.6662 30.3112C18.8834 30.3112 17.1735 29.6029 15.9129 28.3423C14.6522 27.0816 13.944 25.3718 13.944 23.5889C13.944 21.8061 14.6522 20.0963 15.9129 18.8356C17.1735 17.5749 18.8834 16.8667 20.6662 16.8667C22.4491 16.8667 24.1589 17.5749 25.4196 18.8356C26.6802 20.0963 27.3884 21.8061 27.3885 23.5889Z"
            fill="#F5F5F5"
          />
          <path
            d="M20.6667 16.8667C16.616 16.8667 13.3334 20.2 13.3334 24.2H14.556C14.556 20.8667 17.292 18.0666 20.6667 18.0666C24.0414 18.0666 26.7774 20.8667 26.7774 24.2H28C28 20.2 24.7174 16.8667 20.6667 16.8667Z"
            fill="#2C3E50"
          />
          <path
            d="M21.2773 23V24.2H21.8893H25.556C25.8933 24.2 26.1667 23.9333 26.1667 23.6667C26.1667 23.2667 25.8933 23 25.556 23H21.8893H21.2773Z"
            fill="#BDC3C7"
          />
          <path
            d="M20.6667 19.3999C20.3294 19.3999 20.056 19.6666 20.056 19.9333V22.3333V23H21.2774V22.3333V19.9333C21.2774 19.6666 21.004 19.3999 20.6667 19.3999Z"
            fill="#BDC3C7"
          />
          <path
            d="M20.04 23.8565L17.0151 26.8813L17.4472 27.3134L20.4721 24.2886L20.04 23.8565Z"
            fill="#6D7992"
          />
          <path
            d="M20.6666 22.3333C19.992 22.3333 19.444 22.9999 19.444 23.6666C19.444 24.3333 19.992 24.8666 20.6666 24.8666C21.3413 24.8666 21.8893 24.3333 21.8893 23.6666C21.8893 22.9999 21.3413 22.3333 20.6666 22.3333ZM20.6666 22.9999C21.004 22.9999 21.2773 23.2666 21.2773 23.6666C21.2773 23.9333 21.004 24.2 20.6666 24.2C20.3293 24.2 20.056 23.9333 20.056 23.6666C20.056 23.2666 20.3293 22.9999 20.6666 22.9999Z"
            fill="#BDC3C7"
          />
          <path
            d="M20.6667 16.3333C16.616 16.3333 13.3334 19.5333 13.3334 23.6666C13.3334 27.6666 16.616 30.9999 20.6667 30.9999C24.7174 30.9999 28 27.6666 28 23.6666C28 19.5333 24.7174 16.3333 20.6667 16.3333ZM20.6667 17.5333C24.0414 17.5333 26.7774 20.1999 26.7774 23.6666C26.7774 26.9999 24.0414 29.6666 20.6667 29.6666C17.292 29.6666 14.556 26.9999 14.556 23.6666C14.556 20.1999 17.292 17.5333 20.6667 17.5333Z"
            fill="#95A5A6"
          />
          <path
            d="M21.2778 23.6665C21.2778 23.8286 21.2134 23.984 21.0988 24.0986C20.9842 24.2132 20.8287 24.2776 20.6666 24.2776C20.5046 24.2776 20.3491 24.2132 20.2345 24.0986C20.1199 23.984 20.0555 23.8286 20.0555 23.6665C20.0555 23.5045 20.1199 23.349 20.2345 23.2344C20.3491 23.1198 20.5046 23.0554 20.6666 23.0554C20.8287 23.0554 20.9842 23.1198 21.0988 23.2344C21.2134 23.349 21.2778 23.5045 21.2778 23.6665Z"
            fill="#6D7992"
          />
          <path
            d="M21.724 23C21.828 23.1333 21.896 23.4 21.896 23.6667C21.896 23.8 21.828 24.0667 21.724 24.2H21.896H22.392C22.4613 24.0667 22.5067 23.8 22.5067 23.6667C22.5067 23.4 22.4613 23.1333 22.392 23H21.896H21.724Z"
            fill="#95A5A6"
          />
          <path
            d="M3.99996 0.333252C3.26356 0.333252 2.66663 0.930185 2.66663 1.66659V5.66659C2.66663 6.40299 3.26356 6.99992 3.99996 6.99992C4.73636 6.99992 5.33329 6.40299 5.33329 5.66659V1.66659C5.33329 0.930185 4.73636 0.333252 3.99996 0.333252ZM20 0.333252C19.264 0.333252 18.6666 0.930185 18.6666 1.66659V5.66659C18.6666 6.40299 19.264 6.99992 20 6.99992C20.736 6.99992 21.3333 6.40299 21.3333 5.66659V1.66659C21.3333 0.930185 20.736 0.333252 20 0.333252Z"
            fill="#95A5A6"
          />
          <path
            d="M3.99996 0.333252C3.26356 0.333252 2.66663 0.866585 2.66663 1.66659V4.33325H5.33329V1.66659C5.33329 0.866585 4.73636 0.333252 3.99996 0.333252ZM20 0.333252C19.264 0.333252 18.6666 0.866585 18.6666 1.66659V4.33325H21.3333V1.66659C21.3333 0.866585 20.736 0.333252 20 0.333252Z"
            fill="#BDC3C7"
          />
        </svg>
        <span className="text-white font-quickr">12/04/2023</span>
        <span className="text-white font-quickr">07:26</span>
      </div>
      <div className="search relative">
        <input
          className="w-[360px] h-[40px] bg-whitebg rounded-full text-white font-quickr p-2 text-center text-base "
          type="text"
          placeholder="search and find"
        />
        <svg
          className="absolute top-3 left-5"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6207 15.6543C16.0072 15.2704 16.6268 15.2704 17.0134 15.6543L19.568 17.7164H19.6124C20.1292 18.2388 20.1292 19.0858 19.6124 19.6082C19.0955 20.1306 18.2576 20.1306 17.7407 19.6082L15.6207 17.1785L15.5403 17.0877C15.3904 16.898 15.3076 16.6615 15.3076 16.4164C15.3076 16.1304 15.4203 15.8562 15.6207 15.6543ZM8.57764 0C10.8526 0 13.0343 0.913436 14.6429 2.53936C16.2516 4.16529 17.1553 6.37052 17.1553 8.66993C17.1553 13.4582 13.3149 17.3399 8.57764 17.3399C3.84034 17.3399 0 13.4582 0 8.66993C0 3.88166 3.84034 0 8.57764 0Z"
            fill="#6D7992"
          />
        </svg>
      </div>
      <div className="profile flex items-center gap-4">
        <div className="notif">
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0037 19.2H1.72371C1.08371 19.2 0.523712 18.88 0.203712 18.32C-0.116288 17.76 -0.0362881 17.12 0.283712 16.56L1.16371 15.2C2.60371 13.04 3.32371 10.56 3.32371 8C3.32371 5.04 5.24371 2.32 8.04371 1.36C8.52371 0.48 9.40371 0 10.3637 0C11.3237 0 12.2037 0.48 12.6837 1.36C15.4837 2.32 17.4037 5.04 17.4037 8C17.4037 10.56 18.1237 13.04 19.5637 15.2L20.4437 16.56C20.7637 17.12 20.8437 17.76 20.5237 18.32C20.2837 18.88 19.6437 19.2 19.0037 19.2Z"
              fill="#6D7992"
            />
            <path
              d="M6.44371 20.8C6.84371 22.64 8.44371 24 10.3637 24C12.2837 24 13.8837 22.64 14.2837 20.8H6.44371Z"
              fill="#6D7992"
            />
          </svg>
        </div>
        <div className="massege">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.8L23.8286 3.6C23.3143 1.5 21.6857 0 19.7143 0H4.28571C2.31429 0 0.685714 1.5 0.171429 3.6L12 12.8Z"
              fill="#6D7992"
            />
            <path
              d="M12.5143 14.8C12.3429 14.9 12.1714 15 12 15C11.8286 15 11.6571 14.9 11.4857 14.8L0 5.9V19C0 21.8 1.88571 24 4.28571 24H19.7143C22.1143 24 24 21.8 24 19V5.9L12.5143 14.8Z"
              fill="#6D7992"
            />
          </svg>
        </div>
        <div className="img w-[140px] h-10 bg-whitebg flex gap-3 items-center">
            <img className="w-10 h-10 rounded-full" src="./images/Ellipse 3.png" alt="" />
            <div>
                <h1 className="text-white font-quickb text-sm">Name</h1>
                <h1 className="text-white font-quickr mt-1 text-sm">Admin</h1>
            </div>
        </div>
      </div>
    </div>
  );
}
