import { redirect } from 'next/navigation';

// This page currently redirects to the live wedding site.
// When the domain expires (on their anniversary), this will be replaced
// with a static archive of the site.
export default function JohnAndCrystalMayPage() {
  redirect('https://www.john-and-crystal-may.wedding/');
}
