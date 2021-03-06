import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Navbar from './Navbar';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Payment = ({ paymentStatus }) => {
  if (paymentStatus === 'success') {
    return <Redirect to="/order" />;
  }

  return (
    <Elements stripe={stripePromise}>
      <Navbar></Navbar>
      <CheckoutForm />
    </Elements>
  );
};

const mapStateToProps = (state) => ({
  paymentStatus: state.payment.paymentStatus,
});

export default connect(mapStateToProps, null)(Payment);
