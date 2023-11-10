import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import '../ServicesList.css';




class Services extends React.Component {
  render() {
    return (
      <div>
        <div className="services-container">
  <h1>Our Services</h1>
  <br></br>
  <div className="service-row">
    <div className="service-text">
      <h2>Birthday Parties</h2>
      <p>Throw a memorable birthday party with our help! We offer customized party packages that include a variety of casino games.</p>
    </div>
    <div className="service-image">
      <img src='images/WEtables.jpg' alt="Birthday Parties" />
    </div>
  </div>
  <div className="service-row service-row-reverse">
    <div className="service-image">
      <img src='images/blackjack2.jpg' alt="Fundraisers" />
    </div>
    <div className="service-text">
      <h2>Fundraisers</h2>
      <p>Planning a fundraiser can be challenging, but we're here to make it easier. We offer event planning services to help you organize a successful fundraiser that raises funds for your cause.</p>
    </div>
  </div>
  <div className="service-row">
    <div className="service-text">
      <h2>Parties</h2>
      <p>Whether you're celebrating a graduation, anniversary, or any other special occasion, we can help you throw a party that your guests will never forget. From themed parties to elegant soirees, we can make it happen.</p>
    </div>
    <div className="service-image">
      <img src='images/watteventsseating.jpg' alt="Parties" />
    </div>
  </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Services;