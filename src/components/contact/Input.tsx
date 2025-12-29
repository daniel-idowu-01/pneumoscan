import { ContactInputProps } from "@/types/props"

const Input = ({ label, placeholder, type = 'text', optional }: ContactInputProps) => {
  return (
    <label className="flex flex-col flex-1">
      <span className="text-slate-900 dark:text-white text-sm font-medium pb-2">
        {label}
        {optional && <span className="text-slate-400 font-normal"> (Optional)</span>}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="form-input h-12 px-4 rounded-lg border bg-slate-50 dark:bg-[#111822]
          border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white
          placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
      />
    </label>
  )
}

export default Input
