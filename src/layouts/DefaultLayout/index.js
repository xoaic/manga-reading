import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "../components/Header";
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <LSidebar />
                <div className={cx("content")}>
                    {children}
                </div>
                <RSidebar />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default DefaultLayout;