import { useNavigate } from "react-router-dom";

function Contact() {

     const nav = useNavigate();
     const goBack = () => { nav(-1); };
     return (
          <div>
               <h1>Welcome to Contact Page</h1>
               <p>This is the Contact page of the application.</p>
               <button onClick={goBack}>Go back</button>
          </div>
     );
}

export default Contact;
