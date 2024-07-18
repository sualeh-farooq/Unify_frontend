import { BRAND } from "@/types/brand";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaCopy } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";


const brandData = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "X.com",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 1.2,
    revenues: "2,740",
    sales: 230,
    conversion: 1.9,
  },
];

const SellerEnquiries = () => {
  return (
    <div className="rounded-[10px] bg-primary-uni px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-extrabold text-dark dark:text-white">
        Seller Enquiries
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-12 sm:grid-cols-12 py-3 my-2  border-b">
          <div className="flex  w-100 justify-between items-center" >
            <div>
              <h4>Kadeem Curry</h4>
              <small>sualehjetneix@gmail.com</small>
            </div>
            <div className="flex justify-between gap-4">
              <IoIosCopy size={17} />
              <FaArrowUpRightFromSquare size={15} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:grid-cols-12 py-3 my-2  border-b">
          <div className="flex  w-100 justify-between items-center" >
            <div>
              <h4>Kadeem Curry</h4>
              <small>sualehjetneix@gmail.com</small>
            </div>
            <div className="flex justify-between gap-4">
              <IoIosCopy size={17} />
              <FaArrowUpRightFromSquare size={15} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:grid-cols-12 py-3 my-2  border-b">
          <div className="flex  w-100 justify-between items-center" >
            <div>
              <h4>Kadeem Curry</h4>
              <small>sualehjetneix@gmail.com</small>
            </div>
            <div className="flex justify-between gap-4">
              <IoIosCopy size={17} />
              <FaArrowUpRightFromSquare size={15} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:grid-cols-12 py-3 my-2  border-b">
          <div className="flex  w-100 justify-between items-center" >
            <div>
              <h4>Kadeem Curry</h4>
              <small>sualehjetneix@gmail.com</small>
            </div>
            <div className="flex justify-between gap-4">
              <IoIosCopy size={17} />
              <FaArrowUpRightFromSquare size={15} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:grid-cols-12 py-3 my-2  border-b">
          <div className="flex  w-100 justify-between items-center" >
            <div>
              <h4>Kadeem Curry</h4>
              <small>sualehjetneix@gmail.com</small>
            </div>
            <div className="flex justify-between gap-4">
              <IoIosCopy size={17} />
              <FaArrowUpRightFromSquare size={15} />
            </div>
          </div>
        </div>
       
        {/* {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {brand.visitors}K
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">
                ${brand.revenues}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {brand.sales}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-dark dark:text-white">
                {brand.conversion}%
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SellerEnquiries;
