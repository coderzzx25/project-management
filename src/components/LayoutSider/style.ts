import styled from 'styled-components';

const LayoutSiderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    span {
      font-weight: 600;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .sider-buttom {
    padding: 20px;

    .login-out {
      margin-top: 10px;
    }
  }
`;

export default LayoutSiderWrapper;
