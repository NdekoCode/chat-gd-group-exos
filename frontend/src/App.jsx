import './App.css'
import mainImg from './assets/img/chat.avif'
import mainImg from './assets/img/'

function App() {

  return (
    <div classNameName="App">
      <div className="container mx-auto">
        <header>
            <h1 className="font-bold text-3xl">Chat App</h1>
        </header>
        <h2 className="m-5 font-bold text-2xl ">Bienvenue sur notre application de Chat</h2>
            <p className="m-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, ex aut, suscipit, quibusdam modi enim quod perferendis architecto magnam dicta amet nam maxime hic eaque nulla repellendus placeat harum vel?</p>
        <div className="pub-user1">
            <div className="img-user1">
              <img src="" alt="user1" />
            </div>
            <div className="msg"><p>Hi Ted!</p></div>
            <div className="msg"><p>How are you doing?</p></div>
        </div>
        <div className="flex shadow p-3 rounded">
            <img src={mainImg} alt="main image" />
        </div>
            <button className="p-2 rounded shadow"><a href="">Débuter une discussion</a></button>
        <div className="pub-user2">
              <div className="img-user1">
                <img src="" alt="" />
              </div>
            <div className="msg"><p>Hi Mr Tobby!</p></div>
            <div className="msg"><p>All things are right</p></div>            
        </div>
    </div>
    </div>
  )
}

export default App
