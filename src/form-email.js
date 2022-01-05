import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormEmailComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isvalid: false,
      result: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const email = e.target.value;
    const isEmailValid = this.emailValidation(email);
    this.setState(
      {
        email: email,
        isvalid: isEmailValid,
        result: isEmailValid
          ? "Success"
          : "Error",
      },
      () => this.props.onEmailSubmit(this.state)
    );
  }

  emailValidation(email) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!email || regex.test(email) === false);
  }

  onSubmit = (form) => {
    // Email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="form">
        <div id="loginform">
          <Form  name="nest-messages"
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish = {this.onSubmit}
          >
            <div id="headerTitle">
              <PageHeader subTitle="LOGIN"/>
            </div>

            <Form.Item name={['Email']} rules={[{ required: true, message: "Enter you email" }]}
                {...(this.state.result && {
                  hasFeedback: true,
                  help:
                  this.state.result === "Success" ? "" : 'Is not a valid email!',
                  validateStatus: this.state.result === "Success" ? "Success" : "Warning"
                })}
              >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" name="email" onChange={this.onChange} value={this.state.email}/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
            </Form.Item>
            
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    );
  }
};
export default FormEmailComponent;