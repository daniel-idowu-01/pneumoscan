import React from "react";

const AuthSideComp = () => {
  return (
    <div className="relative hidden md:flex md:w-1/2 bg-slate-900 flex-col justify-end p-8 lg:p-12 overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-alt="Digital blue x-ray scan of human lungs on a screen"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmb1sqsT5kW5GnehY6Tir3L0sQAOcHQRqph3CQ81MVp0vhfCd_rUdovEFDBA_vzTCIhKsKfhNn3Dn3rZc3WQEjoomf79I1ozUJyAlPr7IVRL7OemPMvL1j2_QhTRbXhjg76T5EWrtvKWWb7aEw1ObmbIg-t2AmcLT-CwzrbB2MomvcPaUvWBsbQmNTSin41eq0cvHhzmrulnpAPTyuCBLTZADQU41IgWwm3Xm8_Qj1EPkyxml_-Xi38PRPoLvpYummXoqF-ty8CDEc")',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/80 to-transparent opacity-90"></div>
      <div className="relative z-10 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-2">
          <span className="material-symbols-outlined text-white text-[28px]">
            vital_signs
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white leading-tight">
          Advanced AI Diagnostics
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed max-w-md">
          Join over 5,000 medical professionals using our secure platform to
          process chest X-rays with 99.8% accuracy. Instant analysis, securely
          encrypted.
        </p>
        <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-primary uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">
            verified_user
          </span>
          HIPAA Compliant &amp; Secure
        </div>
      </div>
    </div>
  );
};

export default AuthSideComp;
