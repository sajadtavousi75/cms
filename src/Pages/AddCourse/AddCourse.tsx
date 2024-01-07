import React ,{useRef} from "react";
import Topbar from "../../components/Topbar/Topbar";

import "./AddCourse.css";

export default function AddCourse() {

  const inputRef= useRef(null)

  const handelLabaleClick = ()=>{
    inputRef.current.click()
  }
  return (
    <div className="add-course min-h-[100vh]">
      <Topbar />
      <div className="main-addcourse mt-5 flex  justify-between ">
        <div className="left border-solid border-x-[1px] border-pink w-[700px] ">
          <div className="min-h-[250px] border-solid border-b-[1px] border-cyan flex items-end justify-center p-2">
            <h1 className=" font-quickb font-bold text-pink">
              Start By Adding The First Part
            </h1>
          </div>
          <div className="min-h-[250px] p-2 flex items center justify-center gap-2">
            <button className="group border-solid border-[1px] border-icon rounded-lg p-3  w-[60px] h-[60px] flex items-center justify-center relative hover:bg-icon">
            <h1 className="absolute  	translate-y-2 opacity-0	 transition ease-in-out duration-300 text-pink font-quikb font-bold text-lg group-hover:translate-y-10 group-hover:opacity-100	 ">text</h1>
              <svg
                width="33"
                height="36"
                viewBox="0 0 33 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 32.8572C0.5 34.1143 1.52857 35.1429 2.78571 35.1429H30.2143C31.4714 35.1429 32.5 34.1143 32.5 32.8572C32.5 31.6 31.4714 30.5715 30.2143 30.5715H2.78571C1.52857 30.5715 0.5 31.6 0.5 32.8572ZM10.7857 20.9715H22.2143L23.7229 24.6286C24.0657 25.4515 24.8657 26 25.7571 26C27.3343 26 28.3857 24.3772 27.7686 22.9372L18.9 2.43432C18.4886 1.47432 17.5514 0.857178 16.5 0.857178C15.4486 0.857178 14.5114 1.47432 14.1 2.43432L5.23143 22.9372C4.61429 24.3772 5.68857 26 7.26571 26C8.15714 26 8.95714 25.4515 9.3 24.6286L10.7857 20.9715ZM16.5 5.38289L20.7743 16.8572H12.2257L16.5 5.38289Z"
                  fill="#6D7992"
                />
              </svg>
            </button>
            <button className="border-solid border-[1px] border-icon rounded-lg p-3 w-[60px] h-[60px] flex items-center justify-center">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7 0H5.30001C4.02741 0.00144908 2.80735 0.507628 1.90749 1.40749C1.00763 2.30735 0.501449 3.52741 0.5 4.80001V27.2C0.501449 28.4726 1.00763 29.6926 1.90749 30.5925C2.80735 31.4924 4.02741 31.9986 5.30001 32H27.7C28.9726 31.9986 30.1926 31.4924 31.0925 30.5925C31.9924 29.6926 32.4986 28.4726 32.5 27.2V4.80001C32.4986 3.52741 31.9924 2.30735 31.0925 1.40749C30.1926 0.507628 28.9726 0.00144908 27.7 0ZM5.30001 3.19995H27.7C28.1242 3.20043 28.5309 3.36915 28.8308 3.6691C29.1308 3.96905 29.2995 4.37574 29.3 4.79993V20.6372L23.0314 14.3686C22.7313 14.0686 22.3243 13.9001 21.9 13.9001C21.4756 13.9001 21.0687 14.0686 20.7686 14.3686L12.9 22.2373L8.63136 17.9686C8.33126 17.6686 7.92429 17.5001 7.49995 17.5001C7.07561 17.5001 6.66864 17.6686 6.36853 17.9686L3.69995 20.6372V4.80001C3.70041 4.37579 3.86913 3.96907 4.1691 3.6691C4.46907 3.36913 4.87579 3.20041 5.30001 3.19995ZM27.7 28.8H5.30001C4.87581 28.7996 4.46913 28.6308 4.16918 28.3309C3.86923 28.0309 3.70051 27.6243 3.70003 27.2001V25.1628L7.49999 21.3625L11.7686 25.6312C12.0687 25.9312 12.4757 26.0997 12.9 26.0997C13.3244 26.0997 13.7313 25.9312 14.0314 25.6312L21.9 17.7625L29.3 25.1626V27.1998C29.2996 27.624 29.131 28.0308 28.831 28.3308C28.531 28.6308 28.1243 28.7996 27.7 28.8Z"
                  fill="#6D7992"
                />
                <path
                  d="M11.7 16C12.6493 16 13.5774 15.7185 14.3667 15.1911C15.1561 14.6636 15.7713 13.914 16.1346 13.0369C16.4979 12.1598 16.593 11.1947 16.4078 10.2636C16.2226 9.33245 15.7654 8.47717 15.0941 7.80587C14.4228 7.13458 13.5675 6.67742 12.6364 6.49221C11.7053 6.307 10.7402 6.40206 9.86311 6.76536C8.98602 7.12866 8.23636 7.74389 7.70893 8.53325C7.1815 9.32261 6.89999 10.2506 6.89999 11.2C6.90143 12.4726 7.40761 13.6926 8.30748 14.5925C9.20734 15.4924 10.4274 15.9985 11.7 16ZM11.7 9.60001C12.0164 9.60001 12.3258 9.69385 12.5889 9.86966C12.852 10.0455 13.0571 10.2953 13.1782 10.5877C13.2993 10.8801 13.331 11.2018 13.2692 11.5121C13.2075 11.8225 13.0551 12.1076 12.8313 12.3313C12.6076 12.5551 12.3225 12.7075 12.0121 12.7692C11.7018 12.831 11.3801 12.7993 11.0877 12.6782C10.7954 12.5571 10.5455 12.352 10.3697 12.0889C10.1939 11.8258 10.1 11.5164 10.1 11.2C10.1005 10.7758 10.2692 10.3691 10.5692 10.0692C10.8691 9.76921 11.2758 9.60049 11.7 9.60001Z"
                  fill="#6D7992"
                />
              </svg>
            </button>
            <button className="border-solid border-[1px] border-icon rounded-lg p-3 w-[60px] h-[60px] flex items-center justify-center">
              <svg
                width="37"
                height="26"
                viewBox="0 0 37 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.5 5.72721L24.3182 12.9999L34.5 20.2727V5.72721Z"
                  stroke="#6D7992"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.4091 2.81812H5.40909C3.80244 2.81812 2.5 4.12056 2.5 5.72721V20.2727C2.5 21.8793 3.80244 23.1818 5.40909 23.1818H21.4091C23.0157 23.1818 24.3182 21.8793 24.3182 20.2727V5.72721C24.3182 4.12056 23.0157 2.81812 21.4091 2.81812Z"
                  stroke="#6D7992"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="border-solid border-[1px] border-icon rounded-lg p-3 w-[60px] h-[60px] flex items-center justify-center">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.1908 2.45206C29.4396 1.67746 28.5402 1.06175 27.5463 0.641485C26.5524 0.221222 25.4842 0.00498892 24.4051 0.00561987H24.3396C22.0736 0.00326867 19.8981 0.89526 18.286 2.48777L10.9526 9.839C9.63002 11.1734 8.80055 12.9178 8.60043 14.7859C8.40031 16.654 8.8415 18.5346 9.85145 20.1188C10.0155 20.3759 10.2357 20.5926 10.4955 20.7524C10.7553 20.9122 11.048 21.011 11.3515 21.0414C11.4267 21.0473 11.5024 21.0473 11.5776 21.0414C12.1253 21.0443 12.6517 20.8304 13.0419 20.4462C13.3739 20.1171 13.5832 19.6843 13.6352 19.2198C13.6872 18.7552 13.5787 18.2869 13.3276 17.8926C12.8219 17.1025 12.6006 16.1637 12.7001 15.2309C12.7997 14.2981 13.2142 13.4272 13.8753 12.7616L21.3634 5.29137C21.7685 4.88898 22.2529 4.57529 22.7857 4.37035C23.3186 4.16541 23.8883 4.07362 24.4586 4.10088C25.0316 4.12535 25.5928 4.27053 26.1057 4.52702C26.6186 4.78345 27.0716 5.14535 27.4348 5.58899C28.0742 6.40631 28.39 7.43054 28.3219 8.46596C28.2538 9.50144 27.8066 10.4755 27.0658 11.2021L25.6015 12.6664C25.4088 12.8578 25.2558 13.0855 25.1514 13.3363C25.047 13.5871 24.9933 13.856 24.9933 14.1277C24.9933 14.3994 25.047 14.6683 25.1514 14.9191C25.2558 15.1699 25.4088 15.3976 25.6015 15.589C25.9897 15.9754 26.5151 16.1923 27.0628 16.1923C27.6106 16.1923 28.136 15.9754 28.5241 15.589L30.0896 14.0235C31.6156 12.4907 32.4808 10.4213 32.4997 8.2584C32.5186 6.0956 31.6898 4.0113 30.1908 2.45206Z"
                  fill="#6D7992"
                />
                <path
                  d="M21.5837 10.8985C21.1976 10.8549 20.807 10.9211 20.4568 11.0895C20.1066 11.258 19.8111 11.5217 19.604 11.8506C19.397 12.1794 19.287 12.56 19.2865 12.9486C19.2861 13.3372 19.3953 13.718 19.6015 14.0473C20.1085 14.8377 20.3311 15.7771 20.2326 16.7109C20.1342 17.6447 19.7205 18.517 19.0599 19.1842L11.5717 26.6723C11.1661 27.0739 10.6816 27.3869 10.1488 27.5919C9.61609 27.7967 9.04668 27.889 8.4765 27.8628C7.9034 27.8365 7.34221 27.6899 6.82941 27.4325C6.31667 27.1751 5.86381 26.8127 5.5003 26.3688C4.86053 25.5539 4.5444 24.5313 4.6125 23.4976C4.68059 22.4638 5.12821 21.4915 5.86935 20.7676L7.33364 19.3033C7.71727 18.9127 7.9312 18.3865 7.92888 17.839C7.93054 17.5687 7.87882 17.3008 7.77668 17.0505C7.67453 16.8002 7.52394 16.5726 7.33364 16.3806C6.94102 16.0027 6.41726 15.7916 5.87232 15.7916C5.32738 15.7916 4.80363 16.0027 4.41101 16.3806L2.98244 17.7914C2.18646 18.5967 1.55741 19.5512 1.13145 20.6003C0.705481 21.6493 0.490987 22.7723 0.50029 23.9045C0.498856 24.9846 0.714708 26.0539 1.13499 27.0489C1.55528 28.0439 2.17141 28.9442 2.94673 29.6962C4.50482 31.1874 6.58328 32.0118 8.73989 31.994C10.8965 31.9762 12.9611 31.1177 14.4944 29.6009L21.9825 22.1068C23.3003 20.7722 24.1267 19.0302 24.3267 17.1653C24.5267 15.3003 24.0885 13.4227 23.0837 11.839C22.921 11.5791 22.7014 11.3595 22.4417 11.1966C22.1818 11.0337 21.8885 10.9318 21.5837 10.8985Z"
                  fill="#6D7992"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="right flex flex-col items-center ">
          <h1 className="text-white font-quickb font bold text-lg">Add New Course</h1>
          <select
            className="bg-icon bg-transparent border-solid border-[1px] border-pink w-[250px] h-[40px] rounded-full text-center text-white font-quickr my-4"
            name=""
            id=""
          >
            <option value="-1">Select Category</option>
            <option className="" value="1">
              1
            </option>
            <option value="2">2</option>
          </select>
          <form className="flex flex-col" action="">
            <input
              className="w-[250px] h-[40px] rounded-full bg-gray-600	 p-2 text-white font-quickr mb-2"
              type="text"
              placeholder="course Name"
            />
            <input
              className="w-[250px] h-[40px] rounded-full bg-gray-600	 p-2 text-white font-quickr mb-2"
              type="text"
              placeholder="Author"
            />
            <input
              className="w-[250px] h-[40px] rounded-full bg-gray-600	 p-2 text-white font-quickr mb-5"
              type="text"
              placeholder="Price"
            />
            <div className="file">
              <label className="w-[250px] h-[40px] p-2 border-solid border-[1px] border-pink rounded-full flex items-center text-white font-quickb font-bold justify-center mb-5" onClick={handelLabaleClick}>
                <span>
                  Set thumbnail
                </span>
              </label>
              <input
                ref={inputRef}
                className="hidden"
                type="file"
                id="upload-file"
              />
            </div>
            <button className="w-[250px] h-[40px] p-2 border-solid border-[1px] border-pink rounded-full flex items-center text-white font-quickb font-bold justify-center mb-2">Next</button>
            <button className="w-[250px] h-[40px] p-2 border-solid border-[1px] border-pink rounded-full flex items-center text-white font-quickb font-bold justify-center mb-2">Preview</button>
            <button className="w-[250px] h-[40px] p-2 border-solid border-[1px] border-pink rounded-full flex items-center text-white font-quickb font-bold justify-center">Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
}
