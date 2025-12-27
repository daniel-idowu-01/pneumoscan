import React from "react";
import Link from "next/link";

const AuthHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-[#233348] px-6 py-4 md:px-10 bg-white dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
          <span className="material-symbols-outlined text-[24px]">
            radiology
          </span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          <Link href="/">PneumoScan</Link>
        </h2>
      </div>
      <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-[20px]">help</span>
        <span className="hidden sm:block">Need Help?</span>
      </button>
    </header>
  );
};

export default AuthHeader;
