import useInputState from "../../hooks/useInputState";

function HookForm() {
  //   const [name, handleNameChange] = useInputState("Rojoni hooked");
  const emailState = useInputState("a@b.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="text" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HookForm;
