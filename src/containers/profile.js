import React from 'react';
import { Field, reduxForm } from 'redux-form'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/profileActions';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  }

  if (!values.addressline1) {
    errors.addressline1 = "Please enter the first line of your address.";
  }

  if (!values.postalcode) {
    errors.postalcode = "Please enter your post code.";
  }

  return errors;
};

class Profile extends React.Component {

  componentDidMount() {
    this.props.actions.loadProfile();
  }

  handleFormSubmit = (values) => {
    this.props.actions.updateProfile(values, '/about');
  };

  renderError() {
    if (this.props.profileError && this.props.profileError !== null) {
      return <div className="alert alert-danger">{ this.props.profileError }</div>;
    }
    return <div></div>;
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Profile</h2>
          { this.renderError() }
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="name"
              type="text"
              component={this.renderField}
              label="Name" />
              <Field name="addressline1"
                type="text"
                component={this.renderField}
                label="Address" />
              <Field name="postalcode"
                  type="text"
                  component={this.renderField}
                  label="Post Code" />

            <button action="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileError: (state.profile !== null) ? state.profile.error : null,
    initialValues: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'profile',
  validate
})(Profile));
