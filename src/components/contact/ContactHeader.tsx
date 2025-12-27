const ContactHeader = () => {
  return (
    <div className="flex flex-col gap-3 mb-12">
      <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
        Contact Support
      </h1>
      <p className="text-slate-500 dark:text-text-secondary text-lg max-w-2xl">
        Our medical support team is available 24/7 to assist with imaging processing, API
        integrations, and technical inquiries.
      </p>
    </div>
  )
}

export default ContactHeader
