import React from "react";
import Link from "next/link";
import { Button } from "@headlessui/react";

interface ButtonPropTypes {
  label: string;
  customClasses: string;
  children?: React.ReactNode;
  functionClick?: ()=>void;
}

const ButtonDefault = ({
  label,
  customClasses,
  children,
  functionClick
}: ButtonPropTypes) => {
  return (
    <>
      <Button
        className={`inline-flex items-center justify-center gap-2.5 text-center font-medium hover:bg-opacity-90 ${customClasses}`}
        onClick={functionClick}
      >
        {children}
        {label}
      </Button>
    </>
  );
};

export default ButtonDefault;
