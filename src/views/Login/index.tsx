import { FC } from "react";
import styles from "./login.module.scss"

const Login:FC = () => {
    return (
        <div className={styles["login-container"]}>
            <div className={styles["login-box"]}>
                <h1>纸人科技管理系统</h1>
                <form>
                    <div className={styles["user-box"]}>
                    <input type="text" name="" />
                    <label>帐号</label>
                    </div>
                    <div className={styles["user-box"]}>
                    <input type="password" name="" />
                    <label>密码</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        登录
                    </a>
                    {/* <p>没有帐号？去 <div>注册</div></p> */}
                </form>
            </div>
        </div>
    )
}
export default Login