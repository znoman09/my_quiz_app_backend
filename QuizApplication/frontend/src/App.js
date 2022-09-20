import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/HomeCompnent/homeComponent';
import Quiz from './Component/QuizComponent/quizComponent';
import About from './Component/AboutComponent/aboutComponent';
import MyAppBar from './Component/AppBarComponent/appBar';
import Login from './Component/LoginComponent/loginComponent';
import QuizCRUD from './Component/QuizCrudOperations/quizCRUD';
import Paper1 from './Component/QuizPapers/paper1';
import Result from './Component/Result/totalMarks';
import NewQuestion from './Component/QuizCrudOperations/CreateQuizQuestion/newQuestion';
import UpdateQuestion from './Component/QuizCrudOperations/UpdateQuizQuestion/updateQuiz';
import DeleteQuiz from './Component/QuizCrudOperations/DeleteRequest/deleteQuiz';
import DeleteQuizQuestion from './Component/QuizCrudOperations/DeleteRequest/deleteQuizQuestion';
import DeleteQuiz1 from './Component/QuizCrudOperations/DeleteRequest/deleteQuiz1';
import SuccessfullyAdd from './Component/QuizCrudOperations/CreateQuizQuestion/successfullyAdd';
import SignUp from './Component/SignUP/signup';
import Alert from './Component/SignUP/alert';


function App() {

  const [auth, setAuth] = useState("false")

  useEffect(()=>{
    const authInLocalStorage = localStorage.getItem('token')
    
    if(authInLocalStorage){
      console.log("auth is",authInLocalStorage);
      setAuth(authInLocalStorage)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <MyAppBar auth={auth} setAuth={setAuth}/>
        <Routes>
          <Route 
            path='/' element={<Home/>} 
          />
          <Route
            path='/quiz' element={<Quiz/>}
          /> 
          <Route
            path='/about' element={<About/>}
          />  
          <Route
            path='/action' element={
              auth!="null"? <QuizCRUD/>:<Login/>
            }
          />
          <Route
            path='/action/newquestion' element={
              auth!="null"? <NewQuestion auth = {auth}/>:<Login/>
            }
          />
          {/* <Route
            path='/action/updatequestion' element={
              auth!="null"? <UpdateQuestion/>:<Login/>
            }
          /> */}
          <Route
            path='/action/deletequiz' element={
              auth!="null"? <DeleteQuiz/>:<Login/>
            }
          />
          <Route
            path='/action/deletequiz/1' element={
              auth!="null"? <DeleteQuiz1 auth={auth}/>:<Login/>
            }
          />
          <Route
            path='/signup' element={
              auth==="null"? <SignUp/>:<Alert/>
            }
          />
          <Route
            path='/action/successfully_add' element={
              auth!="null"? <SuccessfullyAdd/>:<Login/>
            }
          />
          <Route
            path='/successfully_add' element={
              <SuccessfullyAdd/>
            }
          />
          <Route
            path='/quiz/1' element={<Paper1/>}
          />
          <Route
            path='/result' element={<Result/>}
          />
          <Route
            path='/login' element={<Login/>}
          /> 
          <Route
            path='/logout' element={<Login/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
