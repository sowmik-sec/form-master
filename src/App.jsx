import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusableForm/ReusabaleForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log(data);
  };
  const handleUpdateProfile = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
        submitBtnText={"Sign Up"}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText={"Update"}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
