function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", e.target.name.value);
    console.log("form submitted", e.target.email.value);
    console.log("form submitted", e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SimpleForm;
