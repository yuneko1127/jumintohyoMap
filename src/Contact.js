import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>問い合わせ</h2>
      <p>
        ご質問、ご要望、その他コントリビューションなどは以下フォームからお願いします。
        フォームが利用できない方は、<u>yuneko.monologue[At]gmail.com</u> までご連絡ください。
      </p>
      <iframe 
        title="Contact Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScP2W7bWCN-pAk-fmsJnclTCe8IbZUIXJ843ZmXs3NzJ1bblQ/viewform?embedded=true">
          Contact Formを読み込んでいます…
        </iframe>
    </div>
  );
};

export default Contact;