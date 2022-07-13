import classNames from "classnames/bind"
import Tippy from "@tippyjs/react/headless"
import {useEffect, useState, useRef} from "react"

import {Wrapper as PopperWrapper} from "../../Popper"
import AccountItem from "../../AccountItem"
import {ClearIcon, LoadingIcon, SearchIcon} from "../../Icon"
import styles from "./SearchBar.module.scss"

const cx = classNames.bind(styles)

function SearchBar() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1])
        }, 0)
    }, [])

    const handleClearValue = () => {
        setSearchValue("")
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <Tippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Tác giả</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >

            <div className={cx("search-bar")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder={"Tìm truyện, tác giả, nhóm dịch..."}
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx("clear-btn")} onClick={handleClearValue}>
                        <ClearIcon />
                    </button>
                )}
                {/*<LoadingIcon className={cx("loading")} />*/}
                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    )
}

export default SearchBar