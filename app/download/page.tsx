export default function Download() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

const DownloadPage = () => {
  return (
    <>
      <Head>
        <title>Home in Houston, TX - Download</title>
        <meta name="description" content="Download information for Home in Houston, TX" />
      </Head>

      <main className="container py-4">
        <h1 className="mb-4">Download Information for Home in Houston, TX</h1>

        <section>
          <h2>Download Our Brochure</h2>
          <p>Get to know more about Home in Houston, TX by downloading our brochure.</p>
          <Link href="/download/brochure.pdf">
            <a className="btn btn-primary">Download Brochure</a>
          </Link>
        </section>

        <section>
          <h2>Application Forms</h2>
          <p>Download and fill out our application forms to get started.</p>
          <Link href="/download/application-forms.pdf">
            <a className="btn btn-primary">Download Application Forms</a>
          </Link>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Have questions or need more information? Contact us using the form below or email us at <a href="mailto:info@houstonprivateschools.org">info@houstonprivateschools.org</a>.</p>
        </section>

        <section>
          <h2>Visit Our Location</h2>
          <p>Our physical location is not available at this time.</p>
        </section>
      </main>

      <footer className="container py-4">
        <p>&copy; 2023 Home in Houston, TX. All rights reserved.</p>
      </footer>
    </>
  );
};

export default DownloadPage;
```

This is a basic JSX component for a Next.js page that generates a simple download page for Home in Houston, TX. It includes links to download a brochure and application forms, as well as a contact section and a visit our location section. The footer includes a copyright notice.
    </section>
  );
}
