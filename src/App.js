import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList'

function App(){
    return (
      <div id="app">
        <Header />
        <PostList />
      </div>

    )
}

export default App