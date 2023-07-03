import { useState } from 'react'

type TableColumn = {
    accessorKey: string
    header: string
}

const tableColumns: TableColumn[] = [
    {
        accessorKey: 'transactionCode',
        header: 'Code',
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    {
        accessorKey: 'name',
        header: 'Nom',
    },
    {
        accessorKey: 'amount',
        header: 'Montant',
    },
    {
        accessorKey: 'currency',
        header: 'Devise',
    },
    {
        accessorKey: 'status',
        header: 'Statut',
    },
]

type TableRow = {
    transactionCode: string
    date: Date
    name: string
    amount: number
    currency: string
    status: string
}

const dataRows: TableRow[] = [
    {        
        transactionCode: '#75496',
        date: '2023-06-30',
        name: 'John Doe',
        amount: 100.50,
        currency: 'USD',
        status: 'Validée',
    },
    {        
        transactionCode: '#23651',
        date: '2023-06-30',
        name: 'Jane Smith',
        amount: 75.20,
        currency: 'EUR',
        status: 'En attente de validation',
    },
    {        
        transactionCode: '#45736',
        date: '2023-07-02',
        name: 'Michael Johnson',
        amount: 50.75,
        currency: 'CAD',
        status: 'Rejetée',
    },
    {        
        transactionCode: '#48672',
        date: '2023-06-30',
        name: 'Emily Davis',
        amount: 120000.00,
        currency: 'XAF',
        status: 'En attente de validation',
    },
    {        
        transactionCode: '#45675',
        date: '2023-07-01',
        name: 'Emily Davis',
        amount: 120.90,
        currency: 'GBP',
        status: 'En attente de validation',
    },
    {         
       transactionCode: '#45312',
        date: '2023-06-30', 
        name: 'David Wilson',
        amount: 65.40,
        currency: 'AUD',
        status: 'En attente de paiement',
    },
]
  

const CustomTable = ({ title, data }) => {
    const [rows, setRows] = useState(dataRows)
    const [originalRows, setOriginalRows] = useState(dataRows)
    const [openDetailDialog, setOpenDetailDialog] = useState(false)
    const [selectedRow, setSelectedRow] = useState({})

    const [filterOption, setFilterOption] = useState('')

    const handleSearch = (e) => {
        const searchTerm = e.target.value
        const filteredRows = originalRows.filter((row) => {
            return Object.values(row).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
        setRows(filteredRows)
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "En attente de validation":
                return "text-warning dark:text-warning"
            case "En attente de paiement":
                return "text-warning dark:text-warning"
            case "Validée":
                return "text-meta-3 dark:text-meta-3"
            case "Rejetée":
                return "text-danger dark:text-danger"
            default:
                return ""
        }
    }

    const handleFilter = (filterOption) => {
        let filteredRows = []
        setRows(dataRows)
      
        switch (filterOption) {
            case 'today':
                    filteredRows = dataRows.filter((row) => {
                    const rowDate = new Date(row.date)
                    const today = new Date()
                    return rowDate.toDateString() === today.toDateString()
                })
                break
        
            case 'yesterday':
                    filteredRows = dataRows.filter((row) => {
                    const rowDate = new Date(row.date)
                    const yesterday = new Date()
                    yesterday.setDate(yesterday.getDate() - 1)
                    return rowDate.toDateString() === yesterday.toDateString()
                })
                break
        
            case 'thisWeek':
                filteredRows = dataRows.filter((row) => {
                    const rowDate = new Date(row.date)
                    const today = new Date()
                    const firstDayOfWeek = today.getDate() - today.getDay()
                    const lastDayOfWeek = firstDayOfWeek + 6
                    const firstDay = new Date(today.getFullYear(), today.getMonth(), firstDayOfWeek)
                    const lastDay = new Date(today.getFullYear(), today.getMonth(), lastDayOfWeek)
                    return rowDate >= firstDay && rowDate <= lastDay
                })
                break
        
            case 'thisMonth':
                filteredRows = dataRows.filter((row) => {
                    const rowDate = new Date(row.date)
                    const today = new Date()
                    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
                    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
                    return rowDate >= firstDayOfMonth && rowDate <= lastDayOfMonth
                })
                break

            case 'lastMonth':
                filteredRows = dataRows.filter((row) => {
                    const rowDate = new Date(row.date)
                    const today = new Date()
                    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)
                    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
                    return rowDate >= firstDayOfLastMonth && rowDate <= lastDayOfLastMonth
                })
                break
        
            default:
                filteredRows = dataRows
                break
        }
      
        setRows(filteredRows)
    }        

    const handleFilterChange = (e) => {
        const selectedOption = e.target.value
        setFilterOption(selectedOption)
        handleFilter(selectedOption)
    }    
 
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                <form action="" method="POST">
                    <div className="relative">
                        <button className="absolute top-1/2 left-0 -translate-y-1/2">
                            <svg
                            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                fill=""
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                fill=""
                            />
                            </svg>
                        </button>

                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                            onChange={(e) => handleSearch(e)}
                        />
                    </div>
                </form>
                <div className="flex items-center gap-2">
                    <label className="relative">
                        <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary appearance-none mr-6" value={filterOption} onChange={handleFilterChange}>
                            <option value="">Selectionner une période</option>
                            <option value="today">Ajourd'hui</option>
                            <option value="yesterday">Hier</option>
                            <option value="thisWeek">Cette semaine</option>
                            <option value="thisMonth">Ce mois</option>
                        </select>
                        <span className="absolute top-1/2 right-4 -translate-y-1/2">
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g opacity="0.8">
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                                ></path>
                            </g>
                            </svg>
                        </span>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-12 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-black">
                {
                    tableColumns.map(column => {
                        return(
                            <div key={column.accessorKey} className="col-span-1 flex items-center">
                                <p className="font-medium">{column.header}</p>
                            </div>
                        )
                    })
                }
                <div className="flex-1 flex items-center">
                    <p className="font-medium">Actions</p>
                </div>
            </div>
            {   
                rows.length > 0
                ? rows.map((row, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                        {
                            Object.entries(row).map((cell, cellIndex) => {
                                const [key, value] = cell
                                return (
                                    <div key={cellIndex} className="col-span-1 items-center">
                                        <p className={`text-sm text-black dark:text-white ${key == 'status' ? getStatusColor(value) : ""}`}>{value}</p>
                                    </div>
                                )
                            })
                        }
                        <div className="flex-1 flex items-center gap-4">
                            <button disabled={row.status !== "En attente de validation" ? true : false} className={`${row.status !== "En attente de validation" ? "bg-body opacity-25 cursor-not-allowed" : ""} flex items-center whitespace-nowrap rounded-full bg-meta-3 px-4 py-1 text-white`}>Valider ✔</button>
                            <button disabled={row.status === "Validée" || row.status === "Rejetée" ? true : false} className={`${row.status == "Validée" || row.status == "Rejetée" ? "bg-body opacity-25 cursor-not-allowed" : ""} flex items-center whitespace-nowrap rounded-full bg-meta-1 px-4 py-1 text-white`}>Rejeter ✖</button>
                            <button className="flex items-center whitespace-nowrap rounded-full bg-primary px-4 py-1 text-white" onClick={() => {setOpenDetailDialog(true), setSelectedRow(row)}}>Details</button>
                        </div>
                    </div>
                ))
                : <p className="text-center p-5">Il n'y aucune donnée à afficher</p>
            }
            {/* <RowContentPopup /> */}
            {
                openDetailDialog &&
                <Dialog content={<RowContentPopup row={selectedRow} />} closeBtnAction={setOpenDetailDialog} />
            }
        </div>
    )
}

const Dialog = ({ content, closeBtnAction, width }) => {
    return (
        <div className="fixed top-0 right-0 z-50 bg-black/90 lg:w-10/12 h-full flex flex-col items-center justify-center">
            <div className={`${width || "w-[40%]"} relative rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}>
                {content}
                <button onClick={() => closeBtnAction(false)} className="absolute right-3 top-2 text-2xl">✖</button>
            </div>
        </div>
    )
}

const RowContentPopup = ({ row }) => {
    return (
        <>
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Transaction n° 4526
                </h3>
            </div>
            <form action="#">
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                            Last name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                            Last name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <button className="flex w-full justify-center rounded bg-meta-3 p-3 font-medium text-gray">
                        Valider ✔
                    </button>
                </div>
            </form>
        </>
    )
}

export default CustomTable
