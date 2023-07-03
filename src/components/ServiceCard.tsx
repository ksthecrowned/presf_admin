const ServiceCard = ({ service }) => {
    let serviceIcon
    switch (service.key) {
        case 1:
            serviceIcon = <span className="text-5xl w-[52px] flex items-center justify-center text-primary dark:text-white">+</span>
            break;
        case 2:
            serviceIcon = <svg 
                            className="fill-primary dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg" 
                            width="52" 
                            height="52" 
                            viewBox="0 0 512 512"
                        >
                            <path d="M452 96H60c-15.5 0-27.9 12.5-28 28v264c.2 15.5 12.5 28 28 28h392c15.6 0 28-12.7 28-28.3V124.3c0-15.6-12.4-28.3-28-28.3zM77.1 128h357.7c6.9 0 12.1 5.1 13.1 12v20H64v-20.3c1-6.8 6.3-11.7 13.1-11.7zm357.8 256H77.1c-6.9 0-12.1-4.9-13.1-11.7V256h384v116c-1 6.9-6.3 12-13.1 12z"></path>
                            <path d="M96 304h192v16H96zM96 336h96v16H96zM352 304h64v48h-64z"></path>
                        </svg>
            break;
        case 3:
            serviceIcon = <svg 
                            className="fill-primary dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg" 
                            width="52" 
                            height="52" 
                            viewBox="0 0 48 48"
                        >
                            <path d="M38,24A14,14,0,1,0,24,38,14.015,14.015,0,0,0,38,24ZM12,24A12,12,0,1,1,24,36,12.013,12.013,0,0,1,12,24Z"></path>
                            <path d="M45.164 12.014a1 1 0 0 0-1.15.822l-.354 2.123A21.452 21.452 0 0 0 3.027 18.768a1 1 0 0 0 1.946.464 19.452 19.452 0 0 1 37-3.138l-2.343-1.875a1 1 0 1 0-1.25 1.562l5 4A1 1 0 0 0 44 20a.985.985 0 0 0 .357-.066 1 1 0 0 0 .629-.77l1-6A1 1 0 0 0 45.164 12.014zM44.232 28.027a1 1 0 0 0-1.2.741 19.452 19.452 0 0 1-36.994 3.14l2.342 1.873a1 1 0 1 0 1.25-1.562l-5-4a1 1 0 0 0-1.611.617l-1 6a1 1 0 0 0 .822 1.15A.927.927 0 0 0 3 36a1 1 0 0 0 .985-.836l.355-2.126a21.45 21.45 0 0 0 40.632-3.806A1 1 0 0 0 44.232 28.027z"></path>
                            <path d="M25,30V29h2a1,1,0,0,0,1-1V24a1,1,0,0,0-1-1H22V21h5a1,1,0,0,0,0-2H25V18a1,1,0,0,0-2,0v1H21a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h5v2H21a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0Z"></path>
                        </svg>
            break;
    
        default:
            break;
    }
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark relative">
            <div className="flex w-fit p-2 items-center justify-center bg-meta-2 dark:bg-meta-4">
                {serviceIcon}
            </div>
            <span className="absolute right-5 top-5 z-1 h-3 w-3 rounded-full bg-meta-1">
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>
            <div className="mt-4 flex flex-col">
                <div>
                    <h4 className="text-title-md font-bold text-black dark:text-white my-2">
                        {service.title}
                    </h4>
                    <span className="text-sm font-medium">
                        {service.description}
                    </span>
                </div>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-4">
                    Ouvrir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
  