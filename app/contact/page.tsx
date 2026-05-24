export default function Contact() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Houston Private Schools</title>
      </Head>
      <main className="container">
        <h1 className="text-center mb-4">Contact Us</h1>
        <section className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Get in Touch</h2>
            <p>
              If you have any questions or would like to learn more about Houston
              Private Schools, please don't hesitate to contact us.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fas fa-envelope-open-text me-2"></i>
                <a href="mailto:info@houstonprivateschools.org">info@houstonprivateschools.org</a>
              </li>
              <li className="list-group-item">
                <i className="fas fa-map-marker-alt me-2"></i>
                Houston, TX 77000
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
```
    </section>
  );
}
