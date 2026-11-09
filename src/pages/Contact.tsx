import React from 'react'
import Navber from '../components/Navber';
import ContactHero from '../components/ContactHero';
import Footer from '../components/Footer';
import ContactInformation from '../components/ContactInformation';
import ContactForm from '../components/ContactForm';
import ContactFaq from '../components/ContactFaq';

export default function Contact() {
  return (
    <>
    <Navber />
    <ContactHero />
    <ContactInformation />
    <ContactForm />
    <ContactFaq />
    <Footer />
    </>
  )
}
