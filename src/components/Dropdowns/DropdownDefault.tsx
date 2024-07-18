import { useState } from "react";
import ClickOutside from "@/components/ClickOutside";

const DropdownDefault = (props: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)}>
      <div className="relative flex">
        <button
          className="hover:text-primary"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
              fill=""
            />
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              fill=""
            />
            <path
              d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"
              fill=""
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div
            className={`absolute right-0 top-full z-40 w-46.5 space-y-1.5 rounded-[7px] border border-stroke bg-white p-2 shadow-2 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card`}
          >
            {props.actions.map((val: any, index: any, arr: any) => {
              console.log(val)

              return (
                <>
                  <button key={index} className="flex w-full items-center gap-2 rounded-lg px-2.5 py-[9px] text-left  font-medium text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white">
                    {val.icon}
                    {val.name}
                  </button>
                </>
              )

            })}

          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropdownDefault;
