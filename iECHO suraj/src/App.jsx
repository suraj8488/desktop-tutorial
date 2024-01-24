import welcomeimg from './assets/welcomePageIllustration.svg'
import Nav from './nav';
import{users} from './Data.js'
function App() {
  const phoneSelect= ()=>{
    alert("Thank you for choosing mobile, Suraj");
  }
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  console.log(sortedUsers)
  for (let i = 0; i < sortedUsers.length; i++) {
    const names = sortedUsers[i].name;
    console.log(names);
    }
  const emailSelect = ()=> {
    const userNames = users.map(user => user.name);
    alert(`Names: ${userNames}`);
  };

  return (
    <>
     <Nav/>
     <main>
            <div class="pageleft">
                <h1>Welcome to iECHO</h1>
                <p>Please choose an option to continue</p>
                <div class="continue">
                   <button onClick={emailSelect}>Continue with Email</button>
                   <button on onClick={phoneSelect}> Continue with Phone</button>
                   <div class="divider">
                        <p>OR</p>
                    </div>
                    <button type='button' disabled id='Google'>Continue with google</button>
                    </div>
    
            <div class="tc"><p>By continuing, you accept the <a href="https://iecho.org/terms">Terms of Use</a> and<a href="https://iecho.org/privacy"> Privacy Policy</a></p></div>
            
                </div>
                <div class="pageright">
                    <img src={welcomeimg} alt="" />
                    <h1>Learn from Experts and Share <br/>your Expertise</h1>
                    <p>The ECHO model uses a hub-and-spoke <br/> knowledge-sharing approach</p>
                </div>
      
        </main>
        <footer><p>© 2024 The University of New Mexico and Project ECHO</p></footer>        
    </>
  )
}

export default App
