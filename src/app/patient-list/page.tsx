import ImageUploadNavBar from '@/components/headers/ImageUploadNavBar'
import PatientListHeader from '@/components/patient-list/PatientListHeader'
import PatientFilters from '@/components/patient-list/PatientFilters'
import PatientTable from '@/components/patient-list/PatientTable'

const PatientList = () => {
  return (
    <>
      <ImageUploadNavBar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col gap-6">
        <PatientListHeader />
        <PatientFilters />
        <PatientTable />
      </main>
    </>
  )
}

export default PatientList
