import classNames from "classnames/bind"
import Tippy from '@tippyjs/react'
import hTippy from '@tippyjs/react/headless'
import "tippy.js/dist/tippy.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faArrowRightFromBracket, faCircleUser,
    faEllipsisVertical,
    faIdBadge, faLightbulb,
    faMagnifyingGlass,
    faSpinner,
    faSquareXmark
} from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react"

import Button from "../../../Button"
import {Wrapper as PopperWrapper} from "../../../Popper"
import styles from "./Header.module.scss"
import AccountItem from "../../../AccountItem"
import Menu from "../../../Popper/Menu"

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faIdBadge} />,
        title: "Xem hồ sơ",
        children: {
            title: "Loại hồ sơ",
            data: [
                {
                    type: "Loại hồ sơ",
                    code: "1",
                    title: "Loại 1"
                },
                {
                    type: "Loại hồ sơ",
                    code: "2",
                    title: "Loại 2"
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: "Đăng xuất"
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
            }, 0)
    }, [])

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "Loại hồ sơ":
                break;
            default:
        }
    }

    const currentUser = true

    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <a target="_top" href="https://flamingtext.com/" ><img src="https://blog.flamingtext.com/blog/2022/07/11/flamingtext_com_1657505368_1068342332.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/></a>
            </div>
            <hTippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Tác giả</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}>

                <div className={cx("search-bar")}>
                    <input placeholder={"Tìm truyện, tác giả, nhóm dịch..."} spellCheck={false}/>
                    <button className={cx("clear-btn")}>
                        <FontAwesomeIcon icon={faSquareXmark} />
                    </button>
                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </hTippy>

            <div className={cx("action-bar")}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content={"Sáng/tối"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faLightbulb} />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content={"Tìm kiếm"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button>
                                <img src={"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1657717200&x-signature=Or6mh%2BSdpXY9dOJ%2Fi8i9C33wnpk%3D"}
                                     className={cx("user-avatar")}
                                     alt={"Phùng Thanh Độ"} />
                            </button>
                        </Menu>
                        <Tippy delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button outline>Đăng ký</Button>
                        <Button primary>Đăng nhập</Button>
                        <Tippy delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Tippy>
                    </>
                )}
            </div>
        </div>
    </header>
}

export default Header;