
"use client"
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ButtonDefault from "@/components/Buttons/ButtonDefault"

import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import Link from "next/link";
import baseURL from "@/config/serverConfig";
import { useEffect, useState } from "react";

const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

async function pageData() {
  const response = await fetch(`${baseURL}/api/admin/getlistings`)
  const result = response.json()
  return result
}


interface Seller {
  _id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  interest: string;
  broker: number;
  sellerType: string;
  __v: number;
}
interface Listing {
  _id: string;
  dealName: string;
  askingPrice: string;
  commision: string;
  marketingFunds: string;
  revenue: string;
  ebitda: string;
  seller: string;
  location: string;
  industry: string;
  broker: string;
  adTitle: string;
  webAd: string;
  coverPhoto: string;
  listingPhoto: string;
  agencyAgreement: string;
  im: string;
  status: string;
  sellerDetails: Seller; 
}

interface ListingsComponentProps {
  listings: Listing[];
}
const Settings = () => {
  const actionDropdown = [

    {
      icon: <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2575_3985)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.95697 0.9375L10.125 0.9375C10.4357 0.9375 10.6875 1.18934 10.6875 1.5C10.6875 1.81066 10.4357 2.0625 10.125 2.0625H9C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9V7.875C15.9375 7.56434 16.1893 7.3125 16.5 7.3125C16.8107 7.3125 17.0625 7.56434 17.0625 7.875V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM12.5779 1.70694C13.6038 0.681022 15.2671 0.681022 16.2931 1.70694C17.319 2.73285 17.319 4.39619 16.2931 5.4221L11.307 10.4082C11.0285 10.6867 10.8541 10.8611 10.6594 11.013C10.4302 11.1918 10.1821 11.3451 9.91961 11.4702C9.69676 11.5764 9.46271 11.6544 9.08909 11.7789L6.9107 12.505C6.50851 12.6391 6.0651 12.5344 5.76533 12.2347C5.46556 11.9349 5.36089 11.4915 5.49495 11.0893L6.22108 8.91092C6.34559 8.53729 6.42359 8.30324 6.5298 8.08039C6.65489 7.81791 6.80821 7.56984 6.98703 7.34056C7.13887 7.1459 7.31333 6.97147 7.59183 6.693L12.5779 1.70694ZM15.4976 2.50243C14.911 1.91586 13.96 1.91586 13.3734 2.50243L13.0909 2.7849C13.108 2.85679 13.1318 2.94245 13.1649 3.038C13.2724 3.34779 13.4758 3.75579 13.86 4.13999C14.2442 4.5242 14.6522 4.7276 14.962 4.83508C15.0575 4.86823 15.1432 4.89205 15.2151 4.90907L15.4976 4.62661C16.0841 4.04003 16.0841 3.08901 15.4976 2.50243ZM14.3289 5.79532C13.9419 5.6289 13.4911 5.36209 13.0645 4.93549C12.6379 4.50889 12.3711 4.05812 12.2047 3.67114L8.41313 7.46269C8.10075 7.77508 7.97823 7.89897 7.87411 8.03246C7.74553 8.19731 7.6353 8.37567 7.54536 8.56439C7.47252 8.71722 7.41651 8.8822 7.2768 9.30131L6.95288 10.2731L7.72693 11.0471L8.69869 10.7232C9.1178 10.5835 9.28278 10.5275 9.43561 10.4546C9.62433 10.3647 9.80269 10.2545 9.96754 10.1259C10.101 10.0218 10.2249 9.89926 10.5373 9.58687L14.3289 5.79532Z"
            fill=""
          />
        </g>
        <defs>
          <clipPath id="clip0_2575_3985">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>,
      name: 'Change to Active',

    },

    {
      icon: <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2575_3985)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.95697 0.9375L10.125 0.9375C10.4357 0.9375 10.6875 1.18934 10.6875 1.5C10.6875 1.81066 10.4357 2.0625 10.125 2.0625H9C7.21633 2.0625 5.93517 2.06369 4.96018 2.19478C4.00138 2.32369 3.42334 2.56886 2.9961 2.9961C2.56886 3.42334 2.32369 4.00138 2.19478 4.96018C2.06369 5.93517 2.0625 7.21633 2.0625 9C2.0625 10.7837 2.06369 12.0648 2.19478 13.0398C2.32369 13.9986 2.56886 14.5767 2.9961 15.0039C3.42334 15.4311 4.00138 15.6763 4.96018 15.8052C5.93517 15.9363 7.21633 15.9375 9 15.9375C10.7837 15.9375 12.0648 15.9363 13.0398 15.8052C13.9986 15.6763 14.5767 15.4311 15.0039 15.0039C15.4311 14.5767 15.6763 13.9986 15.8052 13.0398C15.9363 12.0648 15.9375 10.7837 15.9375 9V7.875C15.9375 7.56434 16.1893 7.3125 16.5 7.3125C16.8107 7.3125 17.0625 7.56434 17.0625 7.875V9.04303C17.0625 10.7743 17.0625 12.1311 16.9202 13.1897C16.7745 14.2733 16.4705 15.1283 15.7994 15.7994C15.1283 16.4705 14.2733 16.7745 13.1897 16.9202C12.1311 17.0625 10.7743 17.0625 9.04303 17.0625H8.95697C7.22567 17.0625 5.8689 17.0625 4.81028 16.9202C3.72673 16.7745 2.87171 16.4705 2.2006 15.7994C1.5295 15.1283 1.22549 14.2733 1.07981 13.1897C0.937483 12.1311 0.937491 10.7743 0.9375 9.04303V8.95697C0.937491 7.22567 0.937483 5.86889 1.07981 4.81028C1.22549 3.72673 1.5295 2.87171 2.2006 2.2006C2.87171 1.5295 3.72673 1.22549 4.81028 1.07981C5.86889 0.937483 7.22567 0.937491 8.95697 0.9375ZM12.5779 1.70694C13.6038 0.681022 15.2671 0.681022 16.2931 1.70694C17.319 2.73285 17.319 4.39619 16.2931 5.4221L11.307 10.4082C11.0285 10.6867 10.8541 10.8611 10.6594 11.013C10.4302 11.1918 10.1821 11.3451 9.91961 11.4702C9.69676 11.5764 9.46271 11.6544 9.08909 11.7789L6.9107 12.505C6.50851 12.6391 6.0651 12.5344 5.76533 12.2347C5.46556 11.9349 5.36089 11.4915 5.49495 11.0893L6.22108 8.91092C6.34559 8.53729 6.42359 8.30324 6.5298 8.08039C6.65489 7.81791 6.80821 7.56984 6.98703 7.34056C7.13887 7.1459 7.31333 6.97147 7.59183 6.693L12.5779 1.70694ZM15.4976 2.50243C14.911 1.91586 13.96 1.91586 13.3734 2.50243L13.0909 2.7849C13.108 2.85679 13.1318 2.94245 13.1649 3.038C13.2724 3.34779 13.4758 3.75579 13.86 4.13999C14.2442 4.5242 14.6522 4.7276 14.962 4.83508C15.0575 4.86823 15.1432 4.89205 15.2151 4.90907L15.4976 4.62661C16.0841 4.04003 16.0841 3.08901 15.4976 2.50243ZM14.3289 5.79532C13.9419 5.6289 13.4911 5.36209 13.0645 4.93549C12.6379 4.50889 12.3711 4.05812 12.2047 3.67114L8.41313 7.46269C8.10075 7.77508 7.97823 7.89897 7.87411 8.03246C7.74553 8.19731 7.6353 8.37567 7.54536 8.56439C7.47252 8.71722 7.41651 8.8822 7.2768 9.30131L6.95288 10.2731L7.72693 11.0471L8.69869 10.7232C9.1178 10.5835 9.28278 10.5275 9.43561 10.4546C9.62433 10.3647 9.80269 10.2545 9.96754 10.1259C10.101 10.0218 10.2249 9.89926 10.5373 9.58687L14.3289 5.79532Z"
            fill=""
          />
        </g>
        <defs>
          <clipPath id="clip0_2575_3985">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>,
      name: 'Edit',

    },
    {
      icon: <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.73202 1.68751H10.2681C10.4304 1.68741 10.5718 1.68732 10.7053 1.70864C11.2328 1.79287 11.6892 2.12186 11.9359 2.59563C11.9984 2.71555 12.043 2.84971 12.0942 3.00371L12.1779 3.25488C12.1921 3.2974 12.1962 3.30943 12.1996 3.31891C12.3309 3.682 12.6715 3.92745 13.0575 3.93723C13.0676 3.93748 13.08 3.93753 13.1251 3.93753H15.3751C15.6857 3.93753 15.9376 4.18937 15.9376 4.50003C15.9376 4.81069 15.6857 5.06253 15.3751 5.06253H2.625C2.31434 5.06253 2.0625 4.81069 2.0625 4.50003C2.0625 4.18937 2.31434 3.93753 2.625 3.93753H4.87506C4.9201 3.93753 4.93253 3.93749 4.94267 3.93723C5.32866 3.92745 5.66918 3.68202 5.80052 3.31893C5.80397 3.30938 5.80794 3.29761 5.82218 3.25488L5.90589 3.00372C5.95711 2.84973 6.00174 2.71555 6.06419 2.59563C6.3109 2.12186 6.76735 1.79287 7.29482 1.70864C7.42834 1.68732 7.56973 1.68741 7.73202 1.68751ZM6.75611 3.93753C6.79475 3.86176 6.82898 3.78303 6.85843 3.70161C6.86737 3.67689 6.87615 3.65057 6.88742 3.61675L6.96227 3.39219C7.03065 3.18706 7.04639 3.14522 7.06201 3.11523C7.14424 2.95731 7.29639 2.84764 7.47222 2.81957C7.50561 2.81423 7.55027 2.81253 7.76651 2.81253H10.2336C10.4499 2.81253 10.4945 2.81423 10.5279 2.81957C10.7037 2.84764 10.8559 2.95731 10.9381 3.11523C10.9537 3.14522 10.9695 3.18705 11.0379 3.39219L11.1127 3.61662L11.1417 3.70163C11.1712 3.78304 11.2054 3.86177 11.244 3.93753H6.75611Z"
          fill=""
        />
        <path
          d="M4.43632 6.33761C4.41565 6.02764 4.14762 5.79311 3.83765 5.81377C3.52767 5.83444 3.29314 6.10247 3.31381 6.41245L3.6614 11.6262C3.72552 12.5883 3.77731 13.3654 3.89879 13.9752C4.02509 14.6092 4.23991 15.1387 4.6836 15.5538C5.1273 15.9689 5.66996 16.1481 6.31095 16.2319C6.92747 16.3126 7.70628 16.3125 8.67045 16.3125H9.32963C10.2938 16.3125 11.0727 16.3126 11.6892 16.2319C12.3302 16.1481 12.8728 15.9689 13.3165 15.5538C13.7602 15.1387 13.975 14.6092 14.1013 13.9752C14.2228 13.3654 14.2746 12.5883 14.3387 11.6263L14.6863 6.41245C14.707 6.10247 14.4725 5.83444 14.1625 5.81377C13.8525 5.79311 13.5845 6.02764 13.5638 6.33761L13.2189 11.5119C13.1515 12.5228 13.1034 13.2262 12.998 13.7554C12.8958 14.2688 12.753 14.5405 12.5479 14.7323C12.3429 14.9242 12.0623 15.0485 11.5433 15.1164C11.0082 15.1864 10.3032 15.1875 9.29007 15.1875H8.71005C7.69692 15.1875 6.99192 15.1864 6.45686 15.1164C5.93786 15.0485 5.65724 14.9242 5.45218 14.7323C5.24712 14.5405 5.10438 14.2687 5.00211 13.7554C4.89669 13.2262 4.84867 12.5228 4.78127 11.5119L4.43632 6.33761Z"
          fill=""
        />
        <path
          d="M7.0691 7.69032C7.37822 7.65941 7.65387 7.88494 7.68478 8.19406L8.05978 11.9441C8.09069 12.2532 7.86516 12.5288 7.55604 12.5597C7.24692 12.5906 6.97127 12.3651 6.94036 12.056L6.56536 8.306C6.53445 7.99688 6.75998 7.72123 7.0691 7.69032Z"
          fill=""
        />
        <path
          d="M10.931 7.69032C11.2402 7.72123 11.4657 7.99688 11.4348 8.306L11.0598 12.056C11.0289 12.3651 10.7532 12.5906 10.4441 12.5597C10.135 12.5288 9.90945 12.2532 9.94036 11.9441L10.3154 8.19406C10.3463 7.88494 10.6219 7.65941 10.931 7.69032Z"
          fill=""
        />
      </svg>,
      name: 'Delete',

    },

  ]
  // const [listings, setListings] = useState([])
  const [listings, setListings] = useState<Listing[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchListingData = async () => {
      setIsLoading(true)
      const listingData = await pageData()
      console.log(`Listings Fetch Succesfully`)
      setListings(listingData.data)
      setIsLoading(false)
      console.log(listingData.data)
    }
    fetchListingData()
  }, [])




  const downloadFile = (fileName:string) => {
    fetch(`${baseURL}/files/${fileName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link:any = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName); 
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        });
      })
      .catch((error) => console.error('Error downloading the file:', error));
  };



  return (
    <>
      <DefaultLayout pageTitle="Listings">
        <div className="mx-auto w-full ">
          {/* <Breadcrumb pageName="Listings" /> */}
          <div className="grid grid-rows gap-4">
            <div className="pb-3 border-b flex justify-between" >
              <div>
                <Link

                  href='/listings/new-listing'
                  className="active-sidebar-menu hover:bg-red text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
                >
                  Add New Listing
                </Link>

             
              </div>

            </div>
            <div>
              <h4 className="mb-5.5 text-body-2xlg font-extrabold text-primary">
                Pending Listings
              </h4>





              <table className="w-full table-bordered text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>

                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	 border-left-primary">
                      Deal
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Asking Price

                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Commision
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Marketing Funds
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Agreement
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      IM
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      EBITDA
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Industry
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>


                  {
                    isLoading ? (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                        <td className="px-6 py-3 border whitespace-nowrap	 text-center" colSpan={10} > <b>Loading .......</b>  </td>
                      </tr>
                    ) : null
                  }

                  {
                    listings
                      .filter((list) => list.status.toLocaleLowerCase() === 'pending')
                      .map((list) => {
                        console.log(list);
                        return (
                          <tr key={list._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-3 border whitespace-nowrap	 font-medium text-gray-900 whitespace-nowrap dark:text-white border-left-primary" >{list.dealName}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.askingPrice}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.commision}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.marketingFunds}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.sellerDetails.name}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	"> 
                            <button onClick={()=>downloadFile(list.agencyAgreement)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                                </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                            <button  onClick={()=>downloadFile(list.im)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                            </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.revenue}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.ebitda}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.industry}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                              <DropdownDefault actions={actionDropdown} />
                            </td>
                          </tr>
                        );
                      })
                  }






                </tbody>
              </table>
            </div>
            <div>
              <h4 className="mb-5.5 text-body-2xlg font-extrabold text-primary">
                Active Listings
              </h4>





              <table className="w-full table-bordered text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>

                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	 border-left-primary">
                      Deal
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Asking Price
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Commision
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Marketing Funds
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Agreement
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      IM
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      EBITDA
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Industry
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ? (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                        <td className="px-6 py-3 border whitespace-nowrap	 text-center" colSpan={10} > <b>Loading .......</b>  </td>
                      </tr>
                    ) : null
                  }

                  {
                    listings
                      .filter((list) => list.status.toLocaleLowerCase() === 'active')
                      .map((list) => {
                        console.log(list);
                        return (
                          <tr key={list._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-3 border whitespace-nowrap	 font-medium text-gray-900 whitespace-nowrap dark:text-white border-left-primary" >{list.dealName}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.askingPrice}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.commision}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.marketingFunds}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.sellerDetails.name}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	"> 
                            <button  onClick={()=>downloadFile(list.agencyAgreement)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                                </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                            <button  onClick={()=>downloadFile(list.im)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                            </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.revenue}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.ebitda}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.industry}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                              <DropdownDefault actions={actionDropdown} />
                            </td>
                          </tr>
                        );
                      })
                  }


                </tbody>
              </table>
            </div>
            <div>
              <h4 className="mb-5.5 text-body-2xlg font-extrabold text-primary">
                Sold Listings
              </h4>





              <table className="w-full table-bordered text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>

                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	 border-left-primary">
                      Deal
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Asking Price
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Commision
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Marketing Funds
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Agreement
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      IM
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Revenue
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      EBITDA
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Industry
                    </th>
                    <th scope="col" className="px-6 py-3 border whitespace-nowrap	">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isLoading ? (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                        <td className="px-6 py-3 border whitespace-nowrap	 text-center" colSpan={10} > <b>Loading .......</b>  </td>
                      </tr>
                    ) : null
                  }

                  {
                    listings
                      .filter((list) => list.status.toLocaleLowerCase() === 'sold')
                      .map((list) => {
                        console.log(list);
                        return (
                          <tr key={list._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-3 border whitespace-nowrap	 font-medium text-gray-900 whitespace-nowrap dark:text-white border-left-primary" >{list.dealName}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.askingPrice}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.commision}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.marketingFunds}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.sellerDetails.name}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	"> 
                            <button  onClick={()=>downloadFile(list.agencyAgreement)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                                </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                            <button  onClick={()=>downloadFile(list.im)} type="button" className="btn-primary-light bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
                              Download
                            </button>
                            </td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.revenue}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.ebitda}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >{list.industry}</td>
                            <td className="px-6 py-3 border whitespace-nowrap	" >
                              <DropdownDefault actions={actionDropdown} />
                            </td>
                          </tr>
                        );
                      })
                  }


                </tbody>
              </table>
            </div>


          </div>
        </div>
      </DefaultLayout >
    </>
  );
};

export default Settings;
