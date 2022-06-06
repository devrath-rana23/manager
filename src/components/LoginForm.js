import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common/index';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange()}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange()}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {email, password} = state.auth;
  return {
    email: email,
    password: password,
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged})(
  LoginForm,
);
