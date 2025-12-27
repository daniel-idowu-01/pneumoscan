import ContactForm from './ContactForm'

const ContactFormSection = () => {
  return (
    <div className="lg:col-span-7">
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 md:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h3>

        <ContactForm />
      </div>
    </div>
  )
}

export default ContactFormSection
