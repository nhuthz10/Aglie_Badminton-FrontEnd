import React, { useEffect, useState, useRef } from "react";
import Tippy from "@tippyjs/react/headless";
import {
  faSpinner,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleGetAllProductService } from "../../services/productService";
import "./Search.scss";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        setIsShowNoResult(false);
    };

    const handleClickSearch = () => {
        if (!searchTextDebounce.trim()) {
          setSearchResult([]);
          return;
        }
        if (searchResult.length === 0) return;
    
        setIsShowSearch(false);
        navigate("/product/search");
    };

    let getAllProduct = async (name) => {
        try {
          setIsLoading(true);
          let res = await handleGetAllProductService(5, 1, name);
          if (res && res.errCode === 0) {
            setSearchResult(res?.data);
            res?.data?.length > 0
              ? setIsShowNoResult(false)
              : setIsShowNoResult(true);
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      useEffect(() => {
        if (!searchTextDebounce.trim()) {
          setSearchResult([]);
          return;
        }
        getAllProduct(searchTextDebounce.trim());
        dispatch(handleChangSearchText(searchTextDebounce.trim()));
      }, [dispatch, searchTextDebounce]);
    
    return (
        <Tippy 
            interactive
            visible={isShowSearch}
            onClickOutside={() => {
            setIsShowSearch(false);
            }}

        >
            <div className="search">
                <input
                ref={inputRef}
                className="searchInput"
                onClick={() => setIsShowSearch(true)}
                type="text"
                onChange={handleSearchText}
                value={searchText}
                placeholder="Tìm kiếm..."
                ></input>

                {isLoading && (
                <button className="searchLoading">
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
                )}

                {searchText.length > 0 && !isLoading && (
                <button className="searchClear" onClick={handleSearchClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                )}

                <span style={{ border: "1px solid #ddd9d9", height: "65%" }}></span>
                <div className="searchBtn" onClick={handleClickSearch}>
                <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
                </div>
            </div>

        </Tippy>
    )

};
export default Search;