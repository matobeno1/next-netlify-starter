import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);

    let formData = new FormData(e.target)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div>Status <img src="https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status" alt="status"/></div>
          <div>Check console</div>
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact"/>
              <p>
                  <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                  <button type="submit">Send</button>
              </p>
          </form>
      </main>

      <Footer />
    </div>
  )
}
