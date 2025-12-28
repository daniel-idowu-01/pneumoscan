const UploadTableRow = () => {
  return (
    <>
      <tr className="group hover:bg-[#2a3c55] transition-colors">
        <td className="p-5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Oct 24, 2023</span>
            <span className="text-text-secondary text-xs">10:45 AM</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">
            PID-99238
          </span>
        </td>
        <td className="p-5">
          <div
            className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors"
            data-alt="Small thumbnail preview of a chest X-ray scan showing lungs and ribs"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPbIMm4EJAp4CXqck0qb6VVO0GDJRoEGZag1_Tp1nhZ-wRk_rhndPnRXcAO8np99wGKQPXpGAYA-Vei5il1PgLLwbWvY7_sv0fhlY55fy1KIyy9GCfXDiqXIZYBn-4eTtnzmcgJzNkuQ9Vq_lMp0d92pnT4EjAQXThleZqo0bkcO62nsCTPVopnyKIi1r32mPmSRkwxu1949YlfjT2cSCdEqgksaUkRCTAlEOToDnrIoKw69xyRVQJysloPj6dGlI_31IDtKUbf5a_")',
            }}
          ></div>
        </td>
        <td className="p-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-red-400 text-sm font-bold">High Risk</span>
              <span className="text-text-secondary text-xs">(98.2%)</span>
            </div>
            <div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[98%]"></div>
            </div>
          </div>
        </td>
        <td className="p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Completed
          </span>
        </td>
        <td className="p-5 text-right">
          <button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
            View Report
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </td>
      </tr>
      <tr className="group hover:bg-[#2a3c55] transition-colors">
        <td className="p-5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Oct 24, 2023</span>
            <span className="text-text-secondary text-xs">09:15 AM</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">
            PID-88124
          </span>
        </td>
        <td className="p-5">
          <div
            className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors"
            data-alt="Thumbnail of a chest X-ray scan, darker contrast"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlH_u-AmNd21sWXQfPzP2rxcqyQT0JjWnCQUdSfwVDryOevllxskBSi6_NcbhMRuGLkZMRtg1BtuYB6e7JxmgwDvBcAT8a_PHUtLYZIidVXf-odPTQQSYtmoeUHlm6y_R1yvK_79z5Oj5wvSrjbxr4-duML32Eu7nLnt2E0X34779ew89h4vYKeayvbvIU_Se0_WxFow_JKuZnYRnjmJDl_R9e31lldqcKzPCA0vNkN6WO-OEbxegvddKyW4PwGUGrHhu7M7OAOpj8")',
            }}
          ></div>
        </td>
        <td className="p-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm font-bold">Normal</span>
              <span className="text-text-secondary text-xs">(12.5%)</span>
            </div>
            <div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[12%]"></div>
            </div>
          </div>
        </td>
        <td className="p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Completed
          </span>
        </td>
        <td className="p-5 text-right">
          <button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
            View Report
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </td>
      </tr>
      <tr className="group hover:bg-[#2a3c55] transition-colors">
        <td className="p-5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Oct 23, 2023</span>
            <span className="text-text-secondary text-xs">16:30 PM</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">
            PID-74221
          </span>
        </td>
        <td className="p-5">
          <div className="flex items-center justify-center h-10 w-10 rounded bg-[#192433] border border-border-dark">
            <span className="material-symbols-outlined text-text-secondary text-[20px]">image</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-text-secondary text-sm italic">Analyzing...</span>
        </td>
        <td className="p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="material-symbols-outlined text-[14px] animate-spin">
              progress_activity
            </span>
            Processing
          </span>
        </td>
        <td className="p-5 text-right">
          <button className="text-text-secondary cursor-not-allowed text-sm font-semibold flex items-center justify-end gap-1 ml-auto">
            Processing...
          </button>
        </td>
      </tr>
      <tr className="group hover:bg-[#2a3c55] transition-colors">
        <td className="p-5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Oct 23, 2023</span>
            <span className="text-text-secondary text-xs">14:10 PM</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">
            PID-11029
          </span>
        </td>
        <td className="p-5">
          <div className="flex items-center justify-center h-10 w-10 rounded bg-[#192433] border border-border-dark text-red-400">
            <span className="material-symbols-outlined text-[20px]">broken_image</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-text-secondary text-sm">--</span>
        </td>
        <td className="p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            <span className="material-symbols-outlined text-[14px]">error</span>
            Failed
          </span>
        </td>
        <td className="p-5 text-right">
          <button className="text-white hover:text-red-400 text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Retry
          </button>
        </td>
      </tr>
      <tr className="group hover:bg-[#2a3c55] transition-colors">
        <td className="p-5">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Oct 22, 2023</span>
            <span className="text-text-secondary text-xs">11:05 AM</span>
          </div>
        </td>
        <td className="p-5">
          <span className="text-white font-mono text-sm bg-[#192433] px-2 py-1 rounded border border-border-dark">
            PID-55901
          </span>
        </td>
        <td className="p-5">
          <div
            className="h-10 w-10 rounded bg-cover bg-center bg-no-repeat border border-border-dark group-hover:border-primary/50 transition-colors"
            data-alt="Thumbnail of X-ray showing chest cavity"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASuVlIuLq9oFvdEQGKmhllHlzilgOl8KtTA7CGRwmigIWfFNQKHyUjXJOHDTgN4_D0CCo8NiE_czXFamTK6Oxzn5tIPgwHQSTYHJ60KfZPH4jgjKQJt0A_fal4kQJMnCBJmxn9uG1hrUR_lw6neD7Nw16VFGbKOLuB4VkvT2l7HEDZ5v-vixQP3dLE0f9g4Rx39ybbsYCzOcb-K0W8w79tDR8935tOF_2aTG2ZnK_rmN4a4_aE1rF44_8300L1jv9TQZbq5cn41Uav")',
            }}
          ></div>
        </td>
        <td className="p-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-sm font-bold">Inconclusive</span>
              <span className="text-text-secondary text-xs">(45.0%)</span>
            </div>
            <div className="w-24 h-1.5 bg-[#192433] rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 w-[45%]"></div>
            </div>
          </div>
        </td>
        <td className="p-5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            Completed
          </span>
        </td>
        <td className="p-5 text-right">
          <button className="text-primary hover:text-white text-sm font-semibold flex items-center justify-end gap-1 ml-auto transition-colors">
            View Report
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </td>
      </tr>
    </>
  )
}

export default UploadTableRow
