
     import React from 'react'
     import Card from './Components/Cards/Card'
      import instamarketing from './Images/INSTAGRAMMARKETING.png'
      import videoediting from './Images/VIDEOEDITING.png'
      import googleads from './Images/GOOGLEADS.png'
      import facebookads from './Images/FACEBOOKADS.png'
     import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

     
     
     function App() {
      
       return (
         <>
           <Header/>
            <Card title="Instagram Marketing" image={instamarketing} msg="A new way to transform your business."/>
              <Card title="Adobe Premiere Pro" image={videoediting} msg="Unlock greater career opportunities with a leading video editor."/>
              <Card title="Google Ads" image={googleads} msg="A great way of investing in your business."/>
              <Card title="Facebook Ads" image={facebookads} msg="Run your campaign effectively"/>
              <Footer/>
         </>
       )
     }
     export default App
     