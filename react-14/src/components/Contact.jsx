import React from 'react';
import dayjs from "dayjs";

import './Contact.scss'

class Contact extends React.Component {
  render() {
    const contact = this.props.data;
    return (
      <article className="contact" key={ contact.id } data-testid="contact">
        <span className="contact__avatar"> 
          <img src={ contact.avatar } alt={ contact.name }/>
        </span>
        <span className="contact__data" data-testid="contact-name">{ contact.name }</span>
        <span className="contact__data" data-testid="contact-phone">{ contact.phone }</span>
        <span className="contact__data" data-testid="contact-country">{ contact.country }</span>
        <span className="contact__data" data-testid="contact-date">{ dayjs(contact.admissionDate).format("DD/MM/YYYY") }</span>
        <span className="contact__data" data-testid="contact-company">{ contact.company }</span>
        <span className="contact__data" data-testid="contact-department">{ contact.department }</span>
      </article>
    );
  }
}

export default Contact;
