import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from "./AccountItem.module.scss";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
    return (
        <div className={styles["wrapper"]}>
            <img className={styles["avatar"]} src={"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1657717200&x-signature=Or6mh%2BSdpXY9dOJ%2Fi8i9C33wnpk%3D"} alt={"avt-1"} />
            <div className={styles["info"]}>
                <h4 className={styles["name"]}>
                    <span>Phùng Thanh Độ</span>
                    <FontAwesomeIcon className={styles["check"]} icon={faCheckCircle} />
                </h4>
                <span className={styles["username"]}>dophung</span>
            </div>
        </div>
    );
}

export default AccountItem;