"use client"

import DefaultLayout from "@/components/Layouts/DefaultLaout"
import ButtonDefault from "@/components/Buttons/ButtonDefault"
import Editor from "@/components/Editor/editor"
import Uploader from "@/components/FileUploader/uploader"
import { useEffect, useState } from "react";
import axios from 'axios'
import baseUrl from '@/config/serverConfig'
import {toast , ToastContainer} from 'react-toastify'
import Link from "next/link"

async function getPageData() {
    const response = await fetch(`${baseUrl}/api/admin/getSeller`)
    const result = await response.json()
    return result
}

export default function NewListing() {

    const [dealName, setDealName] = useState('')
    const [status , setStatus] = useState('')
    const [askingPrice, setAskingPrice] = useState('')
    const [commision, setCommision] = useState('')
    const [funds, setFunds] = useState('')
    const [revenue, setRevenue] = useState('')
    const [ebitda, setEbitda] = useState('')
    const [seller, setSeller] = useState('')
    const [location, setLocation] = useState('')
    const [industry, setIndustry] = useState('')
    const [broker, setBroker] = useState('')
    const [adTitle, setAdTitle] = useState('')
    const [webAd, setWebAd] = useState('')
    const [coverPhoto, setCoverPhoto] = useState('')
    const [agreement, setAgreement] = useState('')
    const [im, setIM] = useState('')
    const [listingPhoto, setListingPhoto] = useState('')
    const [sellers, setSellers] = useState([])
    const coverHandler = (e) => {
        setCoverPhoto(e.target.files[0])
    }
    const listingHandler = (e) => {
        setListingPhoto(e.target.files[0])
    }
    const agreementHandler = (e) => {
        setAgreement(e.target.files[0])
    }
    const imhandler = (e) => {
        setIM(e.target.files[0])
    }
    const checkCover = async () => {
        const formData = new FormData();
        formData.append('deal_name', dealName);
        formData.append('asking_price', askingPrice);
        formData.append('commision', commision);
        formData.append('funds', funds);
        formData.append('revenue', revenue);
        formData.append('ebitda', ebitda);
        formData.append('seller', seller);
        formData.append('location', location);
        formData.append('industry', industry);
        formData.append('broker', broker);
        formData.append('adTitle', adTitle);
        formData.append('coverPhoto', coverPhoto);
        formData.append('listingPhoto', listingPhoto);
        formData.append('agencyAgreement', agreement);
        formData.append('im', im);
        formData.append('status' , status)
        formData.append('webAd', webAd);
        try {
            const response = await axios.post(`${baseUrl}/api/admin/addListing`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then((data) => {
                console.log(data)
                toast.success("Listing Added Succesfully !", {
                    position: "top-center"
                });
            }).catch((err) => console.log(err))
            console.log(response)
        } catch (error) {
            console.log(`Something went wrong ${error}`);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPageData();
            setSellers(data.data)
        }
        fetchData()
    }, [])


    return (
        <>
            <DefaultLayout pageTitle="New Listing">
                <div className="mx-auto w-full ">
                    <div className="grid grid-rows gap-4">
                        <div className="pb-3 border-b flex justify-between" >
                            <div className="flex gap-3" >
                                <ButtonDefault
                                    label="Save Listing"
                                    functionClick={checkCover}
                                    customClasses="active-sidebar-menu hover:bg-red text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10"
                                />
                                <Link
                                    href="/listings"
                                    className="border border-primary-uni text-primary rounded-[5px] px-10 py-3 lg:px-8 xl:px-10"
                                >
                                    Cancel
                                </Link>
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
                                        onChange={(e) => setDealName(e.target.value)}
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
                                        onChange={(e) => setAskingPrice(e.target.value)}
                                        type="number"
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    />
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Commision
                                    </label>
                                    <input
                                        type="number"
                                        name="commision"
                                        onChange={(e) => setCommision(e.target.value)}
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    />
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Marketing Funds
                                    </label>
                                    <input
                                        name="number"
                                        onChange={(e) => setFunds(e.target.value)}
                                        type="text"
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    />
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Seller
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
                                            onChange={(event) => setSeller(event.target.value)}
                                            name="seller"
                                            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}>
                                            {sellers.map((val, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={val._id} className="text-dark-5 dark:text-dark-6">
                                                            {val.name}
                                                        </option>
                                                    </>
                                                )
                                            })}
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
                                            onChange={(event) => setLocation(event.target.value)}
                                            name="location"
                                            value={location}

                                            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                        >
                                            <option value="Abu Dhabi" className="text-dark-5 dark:text-dark-6">
                                                Abu Dhabi
                                            </option>
                                            <option value="Dubai" className="text-dark-5 dark:text-dark-6">
                                                Dubai
                                            </option>
                                            <option value="Ajman" className="text-dark-5 dark:text-dark-6">
                                                Ajman
                                            </option>
                                            <option value="Al Ain" className="text-dark-5 dark:text-dark-6">
                                                Al Ain
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
                                        onChange={(event) => setRevenue(event.target.value)}
                                        type="number"
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    />
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        EBITDA
                                    </label>
                                    <input
                                        name="ebitda"
                                        onChange={(e) => setEbitda(e.target.value)}
                                        type="number"
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
                                            onChange={(event) => setIndustry(event.target.value)}
                                            name="industry"
                                            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                        >
                                            <option value="Information Technology" className="text-dark-5 dark:text-dark-6">
                                                Information Technology
                                            </option>
                                            <option value="Construction" className="text-dark-5 dark:text-dark-6">
                                                Construction
                                            </option>
                                            <option value="Real Estate" className="text-dark-5 dark:text-dark-6">
                                                Real Estate
                                            </option>
                                            <option value="Gaming" className="text-dark-5 dark:text-dark-6">
                                                Gaming
                                            </option>
                                            <option value="Food & Grocery" className="text-dark-5 dark:text-dark-6">
                                                Food & Grocery
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
                                            onChange={(event) => setBroker(event.target.value)}
                                            name="broker"
                                            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                        >
                                            <option value="Ghous Ahmed" className="text-dark-5 dark:text-dark-6">
                                                Ghous Ahmed
                                            </option>
                                            <option value="Sualeh Farooq" className="text-dark-5 dark:text-dark-6">
                                                Sualeh Farooq
                                            </option>
                                            <option value="Faizan Hashmi" className="text-dark-5 dark:text-dark-6">
                                                Faizan Hashmi
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
                                        onChange={(e) => setAdTitle(e.target.value)}
                                        type="text"
                                        className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                                    />
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Status
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
                                            onChange={(event) => setStatus(event.target.value)}
                                            name="industry"
                                            className={`relative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                                        >
                                            <option value="Pending" className="text-dark-5 dark:text-dark-6">
                                               Pending
                                            </option>
                                            <option value="Active" className="text-dark-5 dark:text-dark-6">
                                               Active
                                            </option>
                                            <option value="Sold" className="text-dark-5 dark:text-dark-6">
                                                Sold
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
                                        Cover Photo
                                    </label>
                                    <input type="file" onChange={coverHandler} className="form-control" />
                                    {/* <Uploader  /> */}
                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Listing Photo
                                    </label>

                                    <input type="file" onChange={listingHandler} className="form-control" />

                                    {/* <Uploader files={listingPhoto} name="listingPhoto" filesUpdate={(event) => handleFilesUpdate(event, setListingPhoto, 'listingPhoto')} /> */}

                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        Agency Agreement
                                    </label>
                                    <input type="file" onChange={agreementHandler} className="form-control" />

                                    {/* <Uploader files={agreement} name="agencyAgreement" filesUpdate={(event) => handleFilesUpdate(event, setAgreement, 'agencyAgreement')} /> */}

                                </div>
                                <div>
                                    <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                                        IM
                                    </label>
                                    <input type="file" onChange={imhandler} className="form-control" />

                                    {/* <Uploader files={im} name="im" filesUpdate={(event) => handleFilesUpdate(event, setIM, 'im')} /> */}

                                </div>
                            </div>
                            <div className="mt-4" >
                                <label className="my-3  text-body-md font-bold text-dark dark:text-white">
                                    Web Advertisment
                                </label>
                                <Editor value={webAd} setValue={(e) => setWebAd(e)} />
                            </div>



                        </div>
                    </div>
                    {/* </form> */}
                </div>

                <ToastContainer />
            </DefaultLayout >
        </>
    )
}
