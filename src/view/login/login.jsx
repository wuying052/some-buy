const loginPage = () => {
  return (
    <div className="bgImage">
      <div className="loginForm">
        <div>
          <input placeholder="账号" />
          <input placeholder="密码" />
          <div>
            <button>登陆</button>
          </div>
          <a href='#'>注册</a>

        </div>
      </div>
    </div>
  );
};
export default loginPage;
