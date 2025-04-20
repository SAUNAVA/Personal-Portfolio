import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      <span className='contact__number'> Call me - {contact.number}</span>
      <span>Social media handles</span>
      <div className='contact__social'>
        <span>Instagram - <a className='links' href={contact.instagram}>Saunava</a></span>
        <span>Twitter - <a className='links' href={contact.Twitter}>Saunava</a></span>
      </div>
    </section>
  )
}

export default Contact
