import PatientForm from "@/components/forms/patient-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen max-h-screen ">
      {/* TODO OTP Verification | Passkey modal */}

      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} CarePulse
            </p>
            <Link className="text-green-500" href={"/?admin=true"}>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/images/onboarding-img.png"}
        alt="patient"
        className="side-img max-w-[50%]"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default HomePage;
