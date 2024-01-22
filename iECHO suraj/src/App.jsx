
import echologo from './assets/echo_2x (1).png'
import welcomeimg from './assets/welcomePageIllustration.svg'
function App() {
  
  const select= function(){
    alert("Thank you for choosing mobile, Suraj");

  }
  const users = [{ name: 'John Doe', age: 25},{ name: 'Alexander', age: 17},
  { name: 'Nelson Mandela', age: 78},{ name: 'Mahatma Gandhi', age: 56},
  { name: 'Nikol Tesla', age: 39}]
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  console.log(sortedUsers)
  for (let i = 0; i < sortedUsers.length; i++) {
    const names = sortedUsers[i].name;
    console.log(names);
   
  
    }
   
    const Emailselect= function(){
      users.forEach(user => {
        alert(`Name: ${user.name}`);
      });
  }
 

  return (
    <>
     <header>
     <nav>
           <img src={echologo} />
            <div class="help"><a href="https://projectecho.notion.site/iECHO-Help-Center-1e3301587de24775a6abd9100f937682">?</a></div>

        </nav>
     </header>
     <main>
            <div class="pageleft">
                <h1>Welcome to iECHO</h1>
                <p>Please choose an option to continue</p>
                <div class="continue">
                    <a href=""> <div onClick={Emailselect} class="email"> Continue with Email</div></a>
                   
                   <div onClick={select} class="phone">  <a href="">Continue with Phone</a>
                    </div>
                    <div class="divider">
                        <p>OR</p>
                    </div>
                
                    <div class="google">
                    <a href="">Continue with Google</a>
                </div>
               
            </div>
            <div class="tc"><p>By continuing, you accept the <a href="https://iecho.org/terms">Terms of Use</a> and<a href="https://iecho.org/privacy"> Privacy Policy</a></p></div>
            
                </div>
                <div class="pageright">
                    <img src={welcomeimg} alt="" />
                    <h1>Learn from Experts and Share <br/>your Expertise</h1>
                    <p>The ECHO model uses a hub-and-spoke <br/> knowledge-sharing approach</p>
                </div>
      
        </main>
        <footer>
        <p>© 2024 The University of New Mexico and Project ECHO</p>
        </footer>
        
    </>
  )
}

export default App
