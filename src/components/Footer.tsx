import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioContent } from "@/content/site";

export default function Footer() {
  const footerText = portfolioContent.footer;
  return (
    <footer className="border-t border-white/10 bg-surface-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link
          href="#inicio"
          className="text-xl font-bold text-blue-500 transition-colors hover:text-blue-400"
        >
          {footerText.logo}
        </Link>

        {/* Copyright */}
        <p className="hidden text-sm text-gray-500 md:block">
          {footerText.text}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/joansaguilarj1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/joansaguilarj1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}