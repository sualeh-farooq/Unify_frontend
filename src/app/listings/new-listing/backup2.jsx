"use client"

import DefaultLayout from "@/components/Layouts/DefaultLaout"
import ButtonDefault from "@/components/Buttons/ButtonDefault"
import Editor from "@/components/Editor/editor"
import Uploader from "@/components/FileUploader/uploader"
import { useState } from "react";
import axios from 'axios'
import baseUrl from '@/config/serverConfig'

export default function NewListing() {
    const [cover, setCover] = useState([]);

    const [agreement, setAgreement] = useState([]);

    const [im, setIM] = useState([]);

    const [listingPhoto, setListingPhoto] = useState([]);

    const [listingForm, setListingForm] = useState({
        deal_name: '',
        asking_price: '',
        commision: '',
        funds: '',
        revenue: '',
        ebitda: '',
        seller: '',
        location: '',
        industry: '',
        broker: '',
        adTitle: '',
        coverPhoto: {}, // Changed to {} or an empty string based on your logic
        listingPhoto: {}, // Adjust as per your requirements
        agencyAgreement: {}, // Adjust as per your requirements
        im: {}, // Adjust as per your requirements
        webAd: ''
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setListingForm({
            ...listingForm,
            [name]: value
        });
    };

    const coverHandler = (fileItems) => {
        if (fileItems.length > 0) {
            const file = fileItems[0].file;
            setListingForm({
                ...listingForm,
                coverPhoto: file
            });
        }
    };

    const agencyAgreement = (event) => {
        setListingForm({
            ...listingForm,
            agencyAgreement: event[0].file
        })
    }
    const listingPhotoHandler = (event) => {
        setListingForm({
            ...listingForm,
            listingPhoto: event[0].file
        })
    }
    
    const imHandler = (event) => {
        setListingForm({
            ...listingForm,
            im: event[0].file
        })
    }
    
    // const handleFilesUpdate = (event, setState, fieldName) => {
    //     const file = event[0]?.file;
    //     if (file) {
    //         setState([file]);
    //     }
    // };
    // const handleFormChange = (event) => {
    //     const { name, value } = event.target;
    //     setListingForm({
    //         ...listingForm,
    //         [name]: value
    //     });
    // };



    const checkCover = async () => {
    const formData = new FormData();
    formData.append('deal_name', listingForm.deal_name);
    formData.append('asking_price', listingForm.asking_price);
    formData.append('commision', listingForm.commision);
    formData.append('funds', listingForm.funds);
    formData.append('revenue', listingForm.revenue);
    formData.append('ebitda', listingForm.ebitda);
    formData.append('seller', listingForm.seller);
    formData.append('location', listingForm.location);
    formData.append('industry', listingForm.industry);
    formData.append('broker', listingForm.broker);
    formData.append('adTitle', listingForm.adTitle);
    formData.append('coverPhoto', cover);
    formData.append('listingPhoto', listingPhoto);
    formData.append('agencyAgreement', agreement);
    formData.append('im', im);
    formData.append('webAd', listingForm.webAd);

    console.log(formData);

    try {
        const response = await axios.post(`${baseUrl}/api/admin/addListing`,  formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(response.data);
    } catch (error) {
        console.log(`Something went wrong ${error}`);
    }
};

    



    return (
        <>
            <DefaultLayout pageTitle="New Listing">
                <div className="mx-auto w-full ">
                    {/* <Breadcrumb pageName="Listings" /> */}
                    {/* <form method="POST" action={`${baseUrl}/api/admin/addListing`} encType="multipart/form-data" > */}

                        <div className="grid grid-rows gap-4">
                            <div className="pb-3 border-b flex justify-between" >
                                <div className="flex gap-3" >
                                    <ButtonDefault
                                        label="Save Listing"
                                        functionClick={checkCover}
                                        link="#dummy"
                                        customClasses="active-sidebar-menu hover:bg-red text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
                                    />
                                    <ButtonDefault
                                        label="Cancel"
                                        link="/"
                                        customClasses="border border-primary-uni text-primary rounded-[5px] px-10 py-3 lg:px-8 xl:px-10"
                                    />
                                </div>


                            </div>
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Deal Name
                                        </label>
                                        <input
                                            name="deal_name"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Asking Price
                                        </label>
                                        <input
                                            name="asking_price"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Commision
                                        </label>
                                        <input
                                            type="text"
                                            name="commision"
                                            onChange={handleFormChange}
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Marketing Funds
                                        </label>
                                        <input
                                            name="funds"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Seller
                                        </label>
                                        {/* <input
                                        type="text"
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    /> */}
                                        {/* <select
                                        className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 `}
                                    >
                                        <option value="UnitedStates" className="text-dark-5 dark:text-dark-6">
                                            United States
                                        </option>
                                        <option value="UK" className="text-dark-5 dark:text-dark-6">
                                            UK
                                        </option>
                                        <option value="Canada" className="text-dark-5 dark:text-dark-6">
                                            Canada
                                        </option>
                                    </select> */}

                                        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
                                            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1680_14985)">
                                                        <path
                                                            d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
                                                            fill="#6B7280"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1680_14985">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>

                                            <select
                                                onChange={(event) => handleFormChange(event)}
                                                name="seller"
                                                className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                            >
                                                <option value="UnitedStates" className="text-dark-5 dark:text-dark-6">
                                                    United States
                                                </option>
                                                <option value="UK" className="text-dark-5 dark:text-dark-6">
                                                    UK
                                                </option>
                                                <option value="Canada" className="text-dark-5 dark:text-dark-6">
                                                    Canada
                                                </option>
                                            </select>

                                            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
                                                <svg
                                                    className="fill-current"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Location
                                        </label>
                                        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
                                            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1680_14985)">
                                                        <path
                                                            d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
                                                            fill="#6B7280"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1680_14985">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>

                                            <select
                                                onChange={(event) => handleFormChange(event)}
                                                name="location"
                                                value={listingForm.location}

                                                className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                            >
                                                <option value="UnitedStates" className="text-dark-5 dark:text-dark-6">
                                                    United States
                                                </option>
                                                <option value="UK" className="text-dark-5 dark:text-dark-6">
                                                    UK
                                                </option>
                                                <option value="Canada" className="text-dark-5 dark:text-dark-6">
                                                    Canada
                                                </option>
                                            </select>

                                            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
                                                <svg
                                                    className="fill-current"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Revenue
                                        </label>
                                        <input
                                            name="revenue"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            EBITDA
                                        </label>
                                        <input
                                            name="ebitda"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Industry
                                        </label>
                                        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
                                            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1680_14985)">
                                                        <path
                                                            d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
                                                            fill="#6B7280"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1680_14985">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>

                                            <select
                                                onChange={(event) => handleFormChange(event)}
                                                name="industry"
                                                className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                            >
                                                <option value="UnitedStates" className="text-dark-5 dark:text-dark-6">
                                                    United States
                                                </option>
                                                <option value="UK" className="text-dark-5 dark:text-dark-6">
                                                    UK
                                                </option>
                                                <option value="Canada" className="text-dark-5 dark:text-dark-6">
                                                    Canada
                                                </option>
                                            </select>

                                            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
                                                <svg
                                                    className="fill-current"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Broker
                                        </label>
                                        <div className="relative z-20 rounded-[7px] bg-white dark:bg-dark-2">
                                            <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1680_14985)">
                                                        <path
                                                            d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
                                                            fill="#6B7280"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1680_14985">
                                                            <rect width="20" height="20" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>

                                            <select
                                                onChange={(event) => handleFormChange(event)}
                                                name="broker"
                                                className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                            >
                                                <option value="UnitedStates" className="text-dark-5 dark:text-dark-6">
                                                    United States
                                                </option>
                                                <option value="UK" className="text-dark-5 dark:text-dark-6">
                                                    UK
                                                </option>
                                                <option value="Canada" className="text-dark-5 dark:text-dark-6">
                                                    Canada
                                                </option>
                                            </select>

                                            <span className="absolute right-4.5 top-1/2 z-10 -translate-y-1/2 text-dark-4 dark:text-dark-6">
                                                <svg
                                                    className="fill-current"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            AD Title
                                        </label>
                                        <input
                                            name="adTitle"
                                            onChange={handleFormChange}
                                            type="text"
                                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                        />
                                    </div>
                                    <div></div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Cover Photo
                                        </label>
                                        <Uploader files={cover} name="coverPhoto" filesUpdate={coverHandler} />
                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Listing Photo
                                        </label>
                                        <Uploader files={listingPhoto} name="listingPhoto" filesUpdate={listingPhotoHandler} />

                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            Agency Agreement
                                        </label>
                                        <Uploader files={agreement} name="agencyAgreement" filesUpdate={agencyAgreement} />

                                    </div>
                                    <div>
                                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                            IM
                                        </label>
                                        <Uploader files={im} name="im" filesUpdate={imHandler} />

                                    </div>
                                </div>
                                <div className="mt-4" >
                                    <label className="my-3  text-body-md font-bold text-dark dark:text-white">
                                        AD Title
                                    </label>
                                    <Editor />
                                </div>



                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </DefaultLayout >
        </>
    )
}