import styled from 'styled-components';

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;

  .login-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 30px;
        color: #fff;
      }
      .detailed {
        font-size: 40px;
        font-weight: 300;
        margin: 10px 0;
        color: #fff;
      }
    }
  }
  .login-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .right-row {
      .login-title {
        text-align: center;
        font-size: 22px;
        font-weight: 400;
      }
      .ant-form {
        width: 100%;
      }

      .remmeber {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .forget-password {
          cursor: pointer;
          color: #7d8592;
        }
      }
      .account-item {
        text-align: center;
        cursor: pointer;

        .register {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default LoginWrapper;
