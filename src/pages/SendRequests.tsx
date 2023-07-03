import Breadcrumb from '../components/Breadcrumb'
import CustomTable from '../components/CustomTable'
import DefaultLayout from '../layout/DefaultLayout'

const SendRequests = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Demandes d'envois" />

            <div className="flex flex-col gap-10">
                <CustomTable 
                    title="Liste des demandes d'envois d'argent"  
                    data={[]} 
                />
            </div>
        </DefaultLayout>
    )
}

export default SendRequests
