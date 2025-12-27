import NavBar from '@/components/headers/NavBar'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/contact/ContactHeader'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactSidebar from '@/components/contact/ContactSidebar'

const ContactUs = () => {
  return (
    <>
      <NavBar />

      <main className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
        <div className="w-full max-w-7xl">
          <ContactHeader />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <ContactFormSection />
            <ContactSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ContactUs
