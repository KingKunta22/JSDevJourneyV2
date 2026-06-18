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
          <input type="text" placeholder="Name" value={contact.name} onChange={onChange}/>
          &thinsp;
          <input type="email" placeholder="Email" value={contact.email} onChange={onChange}/>
          &thinsp;
          <input type="number" placeholder="Phone #" value={contact.phone} onChange={onChange}/>
        </div>
        <br />
        <button onClick={onSave}>
            {editingIndex !== null ? "Update" : "Add"}
        </button>
        {/* {editingIndex !== null ? (<button onClick={onCancel}>Cancel</button>)} Ohh wait, this is wrong? */}
        {editingIndex !== null && <button onClick={onCancel}>Cancel</button>} 
        {/* WHAT? HOW? */}
        
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

// Wow, I am so confused, can you also do a similarity check on the laravel props, because I used to do that but I kinda forgot it or maybe yk it might help me XD

// CONSUMINGGGGG MEDIAAAA BY WATCHING REACT JS TUYTORIALLSSS EHEHE