import { useState } from 'react'

import './App.css'
import Table from './components/Table'
import Propsfromchild from './components/propsfromchild'
import UseRef from './components/useRef';
import ControlledComponent from './components/controlledComponent';
import Form from './components/form';
import HigherCompo from './components/HigherCompo';
import Rout from './components/Route';
import ApI from './components/ApT';
import PostApi from './components/PostApi';
import PostManager from './components/DeleteApi';

function App() {
 function promtAlert(data){
  alert(data);
 }
  return (
    <>
      {/*<Table/>
      <Propsfromchild alert={promtAlert}/>
      <UseRef/>
      <ControlledComponent/>
      <Form/>
      <HigherCompo/>
      <Rout/>*/}
      <ApI/>
      <PostApi/>
      <PostManager/>
    </>
  )
}

export default App
