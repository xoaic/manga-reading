import classNames from "classnames/bind"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

import styles from "./AccountItem.module.scss"
import Image from "../Image";
import images from "../../assets/images";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image className={cx("avatar")} src={"https"} alt={"avt-1"} fallback={images.placeholderUser50} />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Phùng Thanh Độ</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>dophung</span>
            </div>
        </div>
    );
}

export default AccountItem;