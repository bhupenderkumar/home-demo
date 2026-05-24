export default function Contact() {
  return (
    <section className="section">
      ```jsx
// pages/contact.js

import Head from 'next/head';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Home in Houston, TX</title>
      </Head>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
        
        <ContactForm
          email="info@houstonprivateschools.org"
          phone=""
        />
      </Container>
    </>
  );
}
```
    </section>
  );
}
