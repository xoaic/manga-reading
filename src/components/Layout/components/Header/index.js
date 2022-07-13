import classNames from "classnames/bind"
import Tip from '@tippyjs/react'
import "tippy.js/dist/tippy.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
} from "@fortawesome/free-solid-svg-icons"

import Button from "../../../Button"
import styles from "./Header.module.scss"
import Menu from "../../../Popper/Menu"
import {
    SearchIcon,
    SwitchIcon,
    SidebarIcon,
    ProfileIcon,
    UploadIcon,
    LogoutIcon
} from "../../../Icon"
import Image from "../../../Image"
import images from "../../../../assets/images"
import SearchBar from "../../SearchBar"

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: "Xem hồ sơ",
        to: "/@dophung"
    },
    {
        icon: <UploadIcon />,
        title: "Đăng truyện"
    },
    {
        icon: <LogoutIcon />,
        title: "Đăng xuất",
        separate: true
    },
]

function Header() {
    const currentUser = true

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "Loại hồ sơ":
                break;
            default:
        }
    }

    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <a target="_top" href="https://flamingtext.com/" ><img src={images.logo} border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/></a>
            </div>

            <SearchBar />

            <div className={cx("action-bar")}>
                {currentUser ? (
                    <>
                        <Tip delay={[0, 200]} content={"Sáng/tối"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SwitchIcon />
                            </button>
                        </Tip>
                        <Tip delay={[0, 200]} content={"Tìm kiếm"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SearchIcon />
                            </button>
                        </Tip>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button>
                                <Image src={"https"}
                                     className={cx("user-avatar")}
                                     alt={"Phùng Thanh Độ"}
                                       fallback={images.placeholderUser50}
                                />
                            </button>
                        </Menu>
                        <Tip delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SidebarIcon />
                            </button>
                        </Tip>
                    </>
                ) : (
                    <>
                        <Button outline>Đăng ký</Button>
                        <Button primary>Đăng nhập</Button>
                        <Tip delay={[0, 200]} content={"Thanh bên"} placement={"bottom"}>
                            <button className={cx("action-btn")}>
                                <SidebarIcon />
                            </button>
                        </Tip>
                    </>
                )}
            </div>
        </div>
    </header>
}

export default Header;