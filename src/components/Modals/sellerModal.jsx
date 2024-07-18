import { Modal } from 'antd'
import React, { useState } from 'react';
import ButtonDefault from '../Buttons/ButtonDefault';
import axios from 'axios';
import baseURL from '@/config/serverConfig';
import { toast, ToastContainer } from 'react-toastify';



export default function SellerModal({ modalOpen, setModalOpen }) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [interest, setInterest] = useState('')
    const [broker, setBroker] = useState(null)
    const [business, setBusiness] = useState('')

    const submitSeller = async () => {
        let formData = {
            name: name,
            email: email,
            phone: phone,
            interest: interest,
            broker: Number(broker),
            business: business,
            type: 'Leads'
        }

        try {
            const response = await axios.post(`${baseURL}/api/admin/addSeller`, formData)
                .then((data) => {
                    console.log(data)
                    toast.success("Seller Added Succesfully !", {
                        position: "top-center"
                    });
                    setTimeout(() => {
                        setModalOpen()
                    }, 5000);
                    setName('')
                    setPhone('')
                    setEmail('')
                    setInterest('')
                    setBroker(null)
                    setBusiness('')
                    
                }).catch((err) => {
                    console.log(err)
                    toast.error("Something Went Wrong !", {
                        position: "top-center"
                    });
                })
        } catch (error) {
            console.log(err)
            toast.error("Something Went Wrong !", {
                position: "top-center"
            });
            
        }
    }

    return (
        <>
            <Modal
                title="Add Seller"
                centered
                open={modalOpen}
                onOk={() => setModalOpen()}
                onCancel={() => setModalOpen()}
                width={800}
                footer={null} >
                <hr />
                <div className="mt-3 grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                            Name
                        </label>
                        <input
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                        />
                    </div>
                    <div>
                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                            Email
                        </label>
                        <input
                            name="deal_name"
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                        />
                    </div>
                    <div>
                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                            Phone
                        </label>
                        <input
                            name="deal_name"
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                        />
                    </div>
                    <div>
                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                            Business Name
                        </label>
                        <input
                            name="deal_name"
                            onChange={(e) => setBusiness(e.target.value)}
                            type="text"
                            className="w-full mt-2 rounded-[7px] form-control block border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary-uni active:border-primary-uni disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary-uni"
                        />
                    </div>
                    <div>
                        <label className="mb-3  text-body-md font-bold text-dark dark:text-white">
                            Interest
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
                                onChange={(event) => setInterest(event.target.value)}
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
                                name="industry"
                                className={`rel ative z-10 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2
            `}
                            >
                                <option value="12" className="text-dark-5 dark:text-dark-6">
                                    John Doe
                                </option>
                                <option value="13" className="text-dark-5 dark:text-dark-6">
                                    Carl Micheal
                                </option>
                                <option value="14" className="text-dark-5 dark:text-dark-6">
                                    Santino Albenese
                                </option>
                                <option value="15" className="text-dark-5 dark:text-dark-6">
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
                </div>

                <div className="grid grid-cols-1 gap-1 mt-3">
                    <div className='justify-self-end grid grid-cols-2 gap-3' >
                        <ButtonDefault
                            label="Cancel"
                            functionClick={() => setModalOpen()}
                            customClasses="w-max  bg-red text-white rounded-[5px] px-8 py-2 lg:px-6 xl:px-8 justify-self-end"
                        />
                        <ButtonDefault
                            label="Add"
                            functionClick={submitSeller}
                            customClasses="w-max active-sidebar-menu hover:bg-red text-white rounded-[5px] px-8 py-2 lg:px-6 xl:px-8 justify-self-end"
                        />

                    </div>
                </div>


            </Modal>
        </>
    )
}