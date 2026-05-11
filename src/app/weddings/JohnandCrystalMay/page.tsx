import { redirect } from 'next/navigation';

const WEDDING_URL = 'https://www.john-and-crystal-may.wedding/';

// This page currently redirects to the live wedding site.
// NEXT_PUBLIC_WEDDING_SLUG is appended as a ref param so the wedding site
// can identify portfolio-sourced traffic.
// When the domain expires (on their anniversary), replace this with a
// static archive of the site.
export default function JohnAndCrystalMayPage() {
  const slug = process.env.NEXT_PUBLIC_WEDDING_SLUG;
  const url = slug ? `${WEDDING_URL}?ref=${slug}` : WEDDING_URL;
  redirect(url);
}
