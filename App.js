/*import React, { useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import Mylist from './FormRedux/Mylist';
import { addItem, resetList, updateItem, deleteItem, editItem, loadData,search } from './FormRedux/action';
import axios from 'axios';

function App() {
  const listValue = useSelector((state) => state.listValue);
  const editMode = useSelector((state) => state.editMode);
  //const editIndex = useSelector((state) => state.editIndex);
  const  refresh=useSelector((state)=>state.refresh);
  
  
  const dispatch = useDispatch();
  const getItem = () => (dispatch) => {
   
    console.log("in getItem");
 axios.get('http://localhost:1337/api/stagaires/?populate=*')
  .then((response) => {
    console.log('API Response:', response.data);
    dispatch(loadData(response.data)); // ==  dispatch({type:"LOAD_DATA",payload:response.data})

  })
  .catch((error) => console.error("Error fetching data:", error));

  }
  const deletItemApi = (index) => (dispatch) => {
    //message confirmation 
    axios.delete(`http://localhost:1337/api/stagaires/${index}`)
      .then((response) => {
        console.log("Axios api delete:", response);
        dispatch({ type: 'REFRESH_DATA' });
        dispatch(deleteItem(index));
      })
      .catch((error) => {
        console.log("Error deleting item via API:", error);
      });
  };
  const AddItemApi = (data) => {
    return (dispatch) => {
      axios
        .post('http://localhost:1337/api/stagaires',{data:data} )
        .then((response) => {
          console.log('Axios API add:', response);
          dispatch(addItem(data));
         
        })
        .catch((error) => {
          console.log('Error adding item via API:', error);
        });
    };
  };
  const UpdatItemApi = (data) => {
    //const {Name,Email}=data
    console.log("Test data "+ JSON.stringify(data))
    const payload ={};
    ({Name:payload.Name,Email:payload.Email}=data)
  
    return   (dispatch) => {
        axios
        .put(`http://localhost:1337/api/stagaires/${data.id}` ,{data:payload,headers:{'Content-Type':'application/json'}})
        .then((response) => {
          console.log('Axios API update:', response);
          dispatch(updateItem(data));
        })
        .catch((error) => {
          console.log('Error updating item via API:', error);
        });
    };
  };
  
  
    

  useEffect(() => {
    console.log("This refresh :"+refresh)
    if( refresh===true){
      dispatch(getItem());


    }
   
  },[refresh]);

  console.log('Redux State:', listValue);
  const Name = useRef('');
  const Email = useRef('');
  const stgid=useRef()
  const searchInput =useRef();

  const onDelete = (index) => {
     if(window.confirm("Voullez vous vraiment  suprime  "+ index))

    dispatch(deletItemApi(index));
    console.log("is deleted ")
   
  };

  const onEdit = (index) => {
    console.log(listValue[index])
    dispatch(editItem(index));
    const itemToEdit = listValue[index];
    Name.current.value = itemToEdit.attributes.Name;
    Email.current.value = itemToEdit.attributes.Email;
    stgid.current=itemToEdit.id

  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const nameRef = Name.current.value;
    const emailRef = Email.current.value;
    const id = stgid.current;
    
  
      
   
      dispatch(UpdatItemApi({ Name: nameRef, Email: emailRef, id: id }))
        Name.current.value = '';
        Email.current.value = '';
      

  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRef = Name.current.value;
    const emailRef = Email.current.value;

    dispatch(AddItemApi({ Name: nameRef, Email: emailRef }));
    Name.current.value = '';
    Email.current.value = '';
  };

  const reset = (e) => {
    Name.current.value = '';
    Email.current.value = '';
    e.preventDefault();
    dispatch(resetList());
  };
console.log("this list :" +listValue)

const handelSearch = (e) => {
  e.preventDefault();
  const searchValue = searchInput.current.value;
  dispatch(search(searchValue))
  searchInput.current.value='';
 

 

 
  
  
  
};

  return (

    <div>
      <h1>Hello World</h1>
      <form >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            ref={Name}
          />
        </div><br></br>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            ref={Email}
          />
        </div><br></br>
        <div className='Buttons_form'>
        <button type="submit" disabled={editMode} onClick={handleSubmit}>Submit</button>

          <button type="reset" onClick={reset}>Cancel</button>
          <button onClick={handleUpdate} disabled={!editMode}>Update</button>
         
        </div><br></br>
     
      </form>
      <br></br>
      Search : <input type='text' id='Search_input' placeholder='Search...' ref={searchInput} ></input><button onClick={handelSearch}>Search <SearchIcon style={{fontSize: '25px' ,color:'#22c55e'} }/></button>

      <Mylist listValue={listValue} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;*/
/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ListStagaires from './components/ListStagaires';
import AddStagaires from './components/AddStagaires';
import DetailStagiaire from "./components/DetaillesStagaires";
import StagiaireAPI from "./components/StagairApi";
function App() {
  return(
    <>
    <BrowserRouter>
  <Header/> 
        <Routes>
            <Route>
                <Route path="/" element={<Header  />}/>

                <Route index element={<  ListStagaires />}/>
                <Route path="ListStagaires" element={<ListStagaires/>}/>
                <Route path="AddStagaires" element={<AddStagaires/>}/>
                <Route path="/detail/:stagairesNom" element={<DetailStagiaire/>}/>
                <Route path="StagiaireAPI" element={<StagiaireAPI/>}/>
                





            </Route>




        </Routes>
        
        
        
        
        </BrowserRouter>



    </>
  )

}
  export default App;*/
/*import Counter from "./feauters/counter/counter";
  function App() {
    return(
    
    
    <>
    <Counter/>

    </>
    
    
    )}
    export default App;*/
   
  import TodoGeneral from "./ToDoListProject/Todogeneral";
      function App() {
        return(
        
        
        <>
     
    <TodoGeneral/>
        </>
        
        
        )}
        export default App;