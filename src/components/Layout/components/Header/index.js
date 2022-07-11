import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical, faMagnifyingGlass, faSpinner, faSquareXmark} from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";

import Button from "../../../Button"
import {Wrapper as PopperWrapper} from "../../../Popper"
import styles from "./Header.module.scss";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
            }, 0)
    }, []);

    return <header className={styles["wrapper"]}>
        <div className={styles["inner"]}>
            <div className={styles["logo"]}>
                <a target="_top" href="https://flamingtext.com/" ><img src="https://blog.flamingtext.com/blog/2022/07/11/flamingtext_com_1657505368_1068342332.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/></a>
            </div>
            <Tippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={styles["search-result"]} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={styles["search-title"]}>Tác giả</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}>

                <div className={styles["search-bar"]}>
                    <input placeholder={"Tìm truyện hoặc tác giả..."} spellCheck={false}/>
                    <button className={styles["clear-btn"]}>
                        <FontAwesomeIcon icon={faSquareXmark} />
                    </button>
                    <FontAwesomeIcon className={styles["loading"]} icon={faSpinner} />
                    <button className={styles["search-btn"]}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={"action-btn"}>
                <Button outline>Đăng ký</Button>
                <Button primary rounded>Đăng nhập</Button>
                <button className={cx("rsidebar-btn")}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
        </div>
    </header>
}

export default Header;