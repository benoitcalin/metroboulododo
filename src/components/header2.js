// import React from 'react'
// import { Link, StaticQuery, graphql } from "gatsby"
// import Img from 'gatsby-image'

// class Header extends React.Component {
//   componentWillMount() {
//     handleClick = (event) => {
//       event.currentTarget.classList.toggle('open')
//     }

//     coloredUrl = (relativeUrl) => {
//       if (window.location.pathname === relativeUrl) {
//         return 'colored-link'
//       }
//     }
//   }

//   render() {
//     console.log(this.props.data)
//     const logo = this.props.data.wpgraphql.page.page_home.logo

//     return (
//       <div className='header'>
//         <div className="header-logo">
//           <Img
//             fluid={logo.imageFile.childImageSharp.fluid}
//             alt={logo.alt}
//             loading='auto'
//           />
//         </div>
//         <div className='header-links'>
//           <Link className={this.coloredUrl('/')} to='/'>CONCEPT</Link>
//           <Link className={this.coloredUrl('/jobs')} to='/jobs'>METIERS</Link>
//           <Link className={this.coloredUrl('/contact')} to='/contact'>CONTACT</Link>
//           <Link
//             className={this.coloredUrl('/pro/contact')}
//             to='/pro/contact'
//             state={{ prof: true }}
//           >
//             DEVENIR PARTENAIRE
//           </Link>
//         </div>
//         <div
//           id="nav-icon1"
//           onClick={this.handleClick()}
//           // type="button"
//           className="navbar-toggle collapsed"
//           data-toggle="collapse"
//           data-target="#navbar-main-collapse"
//           aria-expanded="false"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <div
//           className="collapse navbar-collapse"
//           id="navbar-main-collapse"
//         >
//           {/* <Link>CONCEPT</Link>
//               <Link>METIERS</Link>
//               <Link>CONTACT</Link>
//               <Link>DEVENIR PARTENAIRE</Link> */}
//         </div>
//       </div>
//     )
//   }
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         wpgraphql {
//           page(id: "cGFnZToxNjc=") {
//             page_home {
//               logo {
//                 altText
//                 sourceUrl
//                 imageFile {
//                   childImageSharp {
//                     fluid(maxWidth: 1000) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <Header data={data} />
//     )}
//   />
// )