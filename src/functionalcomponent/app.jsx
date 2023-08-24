import React, {useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './footer'
import Navbar from './navbar'
import News from './news'

export default function App() {
 let [language,setlanguage]=useState("hi")
 let [pageSize,setpageSize]=useState(24)
 let [search,setsearch]=useState("")
   
  
  const changelanguage=(data)=>{
      setlanguage(data)
  }
  const changepageSize=(data)=>{
    data=parseInt(data)
    setpageSize(data)
    }
    const changeSearch=(data)=>{ 

      setsearch(data)
     
    }
 
    return (
      <>
        <BrowserRouter>
        <Navbar changeSearch={changeSearch} changelanguage={changelanguage} changepageSize={changepageSize}/>
        <Routes>
           <Route path='/' element={<News search={search} pageSize={pageSize} language={language} q="Latest"/>}/>
            <Route path='/latest' element={<News search={search} pageSize={pageSize} language={language} q="Latest"/>}/>
            <Route path='/sports' element={<News search={search} pageSize={pageSize} language={language} q="Sports"/>}/>
            <Route path='/crime' element={<News search={search} pageSize={pageSize} language={language} q="Crime"/>}/>
            <Route path='/politics' element={<News search={search} pageSize={pageSize} language={language} q="Politics"/>}/>
            <Route path='/education' element={<News search={search} pageSize={pageSize} language={language} q="Education"/>}/>
            <Route path='/science' element={<News search={search} pageSize={pageSize} language={language} q="Science"/>}/>
            <Route path='/entertainment' element={<News search={search} pageSize={pageSize} language={language} q="Entertainment"/>}/>
            <Route path='/jokes' element={<News search={search} pageSize={pageSize} language={language} q="Jokes"/>}/>
            <Route path='/world' element={<News search={search} pageSize={pageSize} language={language} q="World"/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
      )
    
  }


