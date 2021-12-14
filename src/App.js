import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const name ='Feisbrut'
  const nav=[
    {link: "/home",label:"Home"},
    {link: "/friends",label:"Friends"},
    {link: "/messages",label:"Messages"}
];
  return (
    <div>
    <Header name={name}  links={nav}/>
    <p>Lorem ipsum</p>
    <Footer/>
    </div>
  );
}

export default App;
