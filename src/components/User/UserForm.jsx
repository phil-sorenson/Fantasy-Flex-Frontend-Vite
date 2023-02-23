// When Sleeper is clicked, this form will pop up and have User input user

const UserForm = ({}) => {
  
  
  
  return ( 
    <form>
      <label htmlFor="user-form">Enter Username</label>
      <input
        type='text'
        name="username"
        id="username"
        placeholder="Enter Username"
        value={userForm.username}      
      />

      
    </form>
   );
}
 
export default UserForm;