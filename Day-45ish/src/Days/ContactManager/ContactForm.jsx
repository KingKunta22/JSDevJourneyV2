// So the items inside {} are all props and I can just name it anything I want right? Andd, it doesnt matter as long as I get the info from the <ContactForm/> from the App

export default function ContactForm({
  contact,
  editingIndex,
  onChange,
  onSave,
  onCancel,
}) {
  return (
    <>
      <br />
      <h1>Add a Contact</h1>
      <br />
      <div>
        <div>
          <input type="text" placeholder="Name" />
          &thinsp;
          <input type="email" placeholder="Email"/>
          &thinsp;
          <input type="number" placeholder="Phone #"/>
        </div>
        <br />
        <button>Add Contact</button>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

// Wow, I am so confused, can you also do a similarity check on the laravel props, because I used to do that but I kinda forgot it or maybe yk it might help me XD
