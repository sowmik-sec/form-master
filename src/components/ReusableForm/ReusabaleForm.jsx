/* eslint-disable react/prop-types */
function ReusableForm({ formTitle, handleSubmit, submitBtnText, children }) {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleLocalSubmit}>
        {children}
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={`${submitBtnText}`} />
      </form>
    </div>
  );
}

export default ReusableForm;
