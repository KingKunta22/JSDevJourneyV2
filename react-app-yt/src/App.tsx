// // import Message from './Message';
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Cebu", "Makati", "Metro Manila", "Davao", "Naga"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

import Alert from './components/Alert'

function App(){
  return(
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  )
}


export default App;