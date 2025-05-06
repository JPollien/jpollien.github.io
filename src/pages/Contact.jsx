import React from 'react';

function Contact() {
  return (
    <section style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1>Contact Us</h1>
      <p>
        Interested in our photogrammetry services or have questions? Please {' '}
        <span>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.location.href = 'mailto:' + ['downeastlandscapeimaging', 'gmail.com'].join('@');
    }}
  >
    contact us by email.
  </a>
</span>
      </p>
      {/* 
<form
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
  }}
>
  <label>
    Name:
    <input type="text" placeholder="Your Name" />
  </label>
  <label>
    Email:
    <input type="email" placeholder="Your Email" />
  </label>
  <label>
    Message:
    <textarea rows="5" placeholder="How can we help?" />
  </label>
  <button type="submit">Send</button>
</form>
*/}
    </section>
  );
}

export default Contact;
