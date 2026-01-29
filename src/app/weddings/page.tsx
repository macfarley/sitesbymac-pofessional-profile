'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WeddingsPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = 'mac@sitesbymac.dev';
  const phone = '(937) 467-9312';
  const phoneRaw = '+19374679312';

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        {/* Hero Section with Business Card */}
        <div className="text-center mb-12">
          <div className="relative w-full max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/businessCard.png"
              alt="Sites By Mac - Digital Artistry, Forever Memories"
              width={1200}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Romance Websmith
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Creating beautiful, lasting memories for your special day
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-amber-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Let&apos;s Create Something Beautiful
          </h2>
          
          <div className="space-y-6 max-w-md mx-auto">
            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-pink-50 dark:bg-gray-700 rounded-xl">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</p>
                <a 
                  href={`tel:${phoneRaw}`}
                  className="text-2xl font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                >
                  {phone}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                aria-label="Copy phone number"
              >
                {phoneCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-amber-50 dark:bg-gray-700 rounded-xl">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                <a 
                  href={`mailto:${email}`}
                  className="text-xl font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors break-all"
                >
                  {email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(email, 'email')}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                aria-label="Copy email address"
              >
                {emailCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Website */}
            <div className="text-center p-4 bg-amber-50 dark:bg-gray-700 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Website</p>
              <a 
                href="https://sitesbymac.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2"
              >
                SitesByMac.com
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Business Card with QR Code */}
        <div className="text-center">
          <div className="bg-amber-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Scan to Save
            </h3>
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="/businessCardWithQR.png"
                alt="Sites By Mac business card with QR code"
                width={1024}
                height={512}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Scan the QR code to save my contact info
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg font-semibold mb-2">Sites By Mac</p>
          <p className="italic">Digital Artistry, Forever Memories</p>
        </div>
      </div>
    </div>
  );
}
