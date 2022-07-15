import classNames from "classnames/bind"
import Tippy from "@tippyjs/react/headless"
import { useEffect, useState, useRef } from "react"

import * as searchService from "../../../services/searchService"
import {useDebounce} from "../../../hooks"
import {Wrapper as PopperWrapper} from "../../../components/Popper"
import AccountItem from "../../../components/AccountItem"
import { ClearIcon, LoadingIcon, SearchIcon } from "../../../components/Icon"
import styles from "./SearchBar.module.scss"

const cx = classNames.bind(styles)

function SearchBar() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    const debouncedValue = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debouncedValue)
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()
    }, [debouncedValue])

    const handleChangeValue = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(` `)) {
            setSearchValue(searchValue)
        }
    }

    const handleClearValue = () => {
        setSearchValue("")
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleSubmit = () => {}

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <div>
            <Tippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx("search-result")} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Tác giả</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result}/>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}>

                <div className={cx("search-bar")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder={"Tìm truyện, tác giả, nhóm dịch..."}
                        spellCheck={false}
                        onChange={handleChangeValue}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx("clear-btn")} onClick={handleClearValue}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <LoadingIcon className={cx("loading")} />}
                    <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()} onClick={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    )
}

export default SearchBar