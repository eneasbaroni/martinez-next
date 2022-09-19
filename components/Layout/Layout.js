import Head from 'next/head'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <>    
      <Head>
        <title>Martinez Rubiano / Construcciones SAS</title>
        <meta name='description' content='Construcciones - Martinez Rubiano SAS - Constructora - Villa Maria - Villa Nueva' />
      </Head>
      <>
        <Header/>        
        {children}
        <Footer/>
      </>
    </>
  )
}

export default Layout