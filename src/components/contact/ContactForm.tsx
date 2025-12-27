import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'
import FormFooter from './FormFooter'

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Input label="Full Name" placeholder="Dr. Jane Doe" />
        <Input label="Medical License ID" placeholder="MD-12345-XY" optional />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Input label="Work Email" placeholder="jane.doe@hospital.org" type="email" />
        <Select />
      </div>

      <Textarea />

      <FormFooter />
    </form>
  )
}

export default ContactForm
