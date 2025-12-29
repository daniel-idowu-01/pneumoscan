const ProfileActions = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-input-border">
      <button className="px-6 py-3 rounded-lg text-white hover:bg-input-border">
        Discard Changes
      </button>
      <button className="px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-lg flex items-center gap-2">
        <span className="material-symbols-outlined text-[20px]">save</span>
        Save Profile
      </button>
    </div>
  )
}

export default ProfileActions
