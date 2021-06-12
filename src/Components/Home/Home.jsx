import React, { useRef, useEffect } from 'react';
import Header from './../Header';
import About from './../About';
import SectionTitle from './../SectionTitle';
import Portfolio from './../Portfolio';
import TextAndImage from './../TextAndImage';
import Skills from './../Skills';
import Projects from './../Projects';
import Footer from './../Footer';

import booksImage from './../../assets/img/books.jpg';
// import image from './../../assets/img/pexels-wallace-chuck-3749989.jpg';

const Home = (props) => {
    return (
        <>
            <Header />
            <About />
            <TextAndImage 
                title="Philosophy & values"
                text="I think everyone wants the same thing - relationship with humanity, 
                peace with the metaphysical, and experience with the universe. I try to 
                grasp these things with my values: authenticity, creativity, & hospitality." 
                img={booksImage}
            />
            <Skills/>
            <Projects/>
            {/* <SectionTitle title="my Portfolio"/>*/}
            <Portfolio />
            <Footer />
        </>    
    )
    
}

export default Home;

// import React from 'react';
// // ref can only be used on class components
// class SomeComponent extends Component {
//   // get a reference to the element after the component has mounted
//   componentDidMount(){
//     M.Sidenav.init(this.sidenav);
//   }

//   render(){
//     return (
//       <ul className={this.props.classes}
//           ref={ (sidenav) => {this.sidenav = sidenav} }
//           id={this.props.id}>
//         // menuItems
//       </ul>
//     )
//   }
// }