function Food({name, picture}){
  return(
    <div >
    <h1>I Like {name}</h1>
    <img src={picture}/>
    </div>
    );
}

const foodILike= [{id:"1",name:"kimchi",image:""},
{id:"2",name:"kimchi2",image:""},
{id:"3",name:"kimchi3",image:""},
{id:"4",name:"kimchi4",image:""}];

/* function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image}/>
}; */

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      {
        foodILike.map(dish => <Food key={dish.id} name = {dish.name} picture={dish.image}/>)
      }
     </div>
  );
}

export default App;
