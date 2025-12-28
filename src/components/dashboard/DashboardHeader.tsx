const DashboardHeader = () => {
  return (
    <div
      className="relative w-full min-h-[220px] bg-cover bg-center flex flex-col justify-end"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(16, 24, 34, 1) 0%, rgba(16, 24, 34, 0.6) 50%, rgba(16, 24, 34, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCETE8FlXPOlg7jPWWS1yexgFjqVMFQQXaEz2ncUdK-nCr2PNZvbdmoqYh10WYmhmIIvrAS3VdmTCWHW_cWHIkUNw7ZqNxsaCdtiF3GTeDwINiBVfh-JC0RP-aGTJ9ODo0AHGmXca75S2lE9yiXq1lzO-1td01YUCcufOFL-g0P2x8hg7MlTshWgsrRLj7gahsjSlxbVtH6aq0w7WdX-GTM5d-_wnJiW2D5WuyoJaxXW1LTxq6w_cYGmKudnR-ENK5-VLaleQf5xaHL")',
      }}
    >
      <div className="p-8 pb-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-blue-300 text-sm uppercase tracking-wider">Radiology Portal</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Welcome back, Dr. Smith
          </h2>
          <p className="text-slate-300 mt-2 max-w-2xl">
            You have 3 scans currently processing and 12 completed analyses ready for review.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
