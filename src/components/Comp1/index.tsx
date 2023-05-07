import { Button } from "antd"
import styles from "./index.module.scss"
import {CaretUpOutlined} from "@ant-design/icons"
// import "antd/dist/antd.css"
export default function Comp(){
    return (
        <div className={styles.oop}>
            <span><CaretUpOutlined style={{color: '#000'}}/></span> 
            <Button type="primary">按钮</Button>
            <div>123</div>
            <p className={styles.p}>dsadsa</p>
        </div>
    )
}