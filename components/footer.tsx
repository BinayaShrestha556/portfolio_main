import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import ContactForm from "./contact-form";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "contact me from here",
};
const Footer = () => {
  return (
    <footer id="footer" className="w-full mt-20 bg-black/60 p-3">
      <div className="xl:w-[80%] p-3 flex flex-col md:flex-row justify-between items-center h-full mb-2 md:w-[90%] w-full mx-auto">
        <div>
          <h1 className="text-primary text-lg font-bold ">Contact me</h1>
          <div className="flex items-center gap-6 text-2xl mt-3">
            <Link
              href="https://www.instagram.com/binay._.shrestha/"
              className="hover:text-primary transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com/BinayaShrestha556"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.facebook.com/Binaya.Shrestha.00"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/binaya-shrestha-1b906a326/"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </Link>
            <Link href="" className="hover:text-primary transition">
              <FaUpwork />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
