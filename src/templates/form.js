import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout";

import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from "flatpickr";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    content: "",
    job: "",
    information: "",
  }
  displayInput = () => {
    if (this.props.location.state) {
      if (this.props.location.state.prof) {
        return "col-12 col-md-6 form-group"
      } else { return "col-12 col-md-6 form-group d-none" }
    } else { return "col-12 col-md-6 form-group d-none" }
  }
  displayContent = () => {
    if (this.props.location.state) {
      if (this.props.location.state.prof) {
        return(
          <div>
            <h5>
              ENVIE DE FAIRE TESTER VOTRE MÉTIER ? 
            </h5>
            // Image
            <p> Si vous aussi comme Gilles vous voulez faire découvrir votre métier et donner la chance aux personnes intéressées de découvrir votre savoir-faire ou de se reconvertir dans votre métier, alors c’est içi.</p>
          </div>
        )
      } else if (this.props.location.state.pack) {
        return (
          <h5>
            VOUS SOUHAITEZ TESTER LE MÉTIER SUIVANT : <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.job}</strong>
            <br />
            AVEC LE <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.pack}</strong> POUR UNE DURÉE DE <strong style={{ color: '#3EAAF4' }}>{this.props.location.state.duration}</strong>
          </h5>
        )
      }
    }
  }
  displayLinks = () => {
    if (this.props.location.state) {
      if (this.props.location.state.pack) {
        return (
          <div>
            <Link to='/'>Accueil</Link> >
            <Link to='/jobs'> Nos Métiers</Link> >
            <Link to={`/jobs/${this.props.pageContext.slug}`}> {this.props.pageContext.title}</Link> >
            <Link to={`/jobs/${this.props.pageContext.slug}/duration`}> Durée</Link> >
            <span> Formulaire</span>
          </div>
        )
      } else {
        return (
          <div>
            <Link to='/'>Accueil</Link> >
            <span> Formulaire</span>
          </div>
        )
      }
    }
  }
  setValue = () => {
    if (this.props.location.state) {
      if (this.props.location.state.pack) {
        return `${this.props.location.state.job} - ${this.props.location.state.pack} - ${this.props.location.state.duration}`
      }
    } else {
      return ""
    }
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    flatpickr("#myID", {
      mode: "range",
      minDate: "today"
    })
  }

  render() {
    return (
      <Layout>
        <div className="follow-up-links">
          {this.displayLinks()}
        </div>
        <div className="form-header">
          <div className="form-title">
            <h2 style={{margin: '50px 0'}}>Nous contacter</h2>
          </div>
          <div className="form-subtitle">
            {this.displayContent()}
          </div>
        </div>
        <div className='form-container'>
          <form
            className='row form-row'
            action="https://formspree.io/benoit.calin@gmail.com"
            method="POST"
          >
            <div className="col-12 col-md-6 form-group">
              <label>
                Prénom<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Nom<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Email<span style={{color: 'red'}}>*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <label>
                Téléphone
              </label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className={this.displayInput()}>
              <label>
                Profession
              </label>
              <input
                className="form-control"
                type="text"
                name="job"
                value={this.state.job}
                onChange={this.handleInputChange}
              />
            </div>
            <div className='d-none'>
              <label>
                Informations du choix client
              </label>
              <input
                className="form-control"
                type="text"
                name="information"
                value={this.setValue()}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-12 form-group">
              <label>
                Disponibilité
              </label>
              <input
                className="form-control"
                type="text"
                id='myID'
                name="disponibility"
                placeholder='Choisissez la période de votre choix'
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-12 form-group">
              <label>
                Parlez-nous de votre projet
              </label>
              <textarea
                className="textarea"
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="submit-zone">
              <div className='d-flex align-items-center' style={{marginBottom: '16px'}}>
                <input type="checkbox" name="CGU" required/>
                <p style={{ margin: '0 0 0 15px' }}>J'ai pris connaissance et accepte les CGU <span style={{ color: 'red' }}>*</span></p>
              </div>
              <p><span style={{ color: 'red' }}>*</span> Ces champs sont obligatoires</p>
              <button type="submit" className='btn button-primary'>ENVOYER</button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}
