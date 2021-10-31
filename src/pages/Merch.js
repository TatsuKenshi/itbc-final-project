import { useState, useEffect } from "react";
import StyledSelect from "../style/StyledSelect";
import Pagination from "../components/Pagination";
import StyledMerch from "../style/StyledMerch";
import MerchItem from "../components/MerchItem";
import StyledProductForm from "../style/StyledProductForm";
import { getAllMerch, newMerchItem } from "../Service";
import { Link } from "react-router-dom";

const Merch = ({ allMerchArray, setAllMerchArray, user, purchase, setPurchase }) => {
  // states for select, input, and merch which will be displayed
  const [selectValue, setSelectValue] = useState([]);
  const [selectValue2, setSelectValue2] = useState([]);
  const [displayMerch, setDisplayMerch] = useState([]);

  // pagination states
  const [displayed, setDisplayed] = useState(10);
  const [onPage, setOnPage] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  // states for adding new items
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // useEffects for game selection
  // // // useEffect for the select menu
  useEffect(() => {
    if (selectValue === "all" || selectValue === "") {
      setDisplayMerch(allMerchArray);
    } else {
      setDisplayMerch(
        allMerchArray.filter(function (merchItem) {
          return merchItem.category === selectValue;
        })
      );
    }
  }, [allMerchArray, selectValue]);

  // // // useEffect for the input search
  useEffect(() => {
    setDisplayMerch(
      allMerchArray.filter(function (merchItem) {
        return merchItem?.itemName?.toLowerCase().includes(selectValue2);
      })
    );
  }, [allMerchArray, selectValue2]);

  // // // pagination useEffect
  useEffect(() => {
    setOnPage(displayMerch.slice(0, displayed));
  }, [displayMerch, displayed]);

  // game genres for the select menu
  let categories = [];
  allMerchArray.forEach(function (merchItem) {
    categories.push(merchItem.category);
  });
  let myCategories = [...new Set(categories)];

  return (
    <>
      {user && user.userCategory === "admin" ? (
        <div className="productForm">
          <StyledProductForm>
            <h2>New Product</h2>
            <hr />

            <label htmlFor="itemName">item name:</label>
            <br />
            <input
              type="text"
              name="itemName"
              id="itemName"
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
            <br />

            <label htmlFor="category">category:</label>
            <br />
            <input
              type="text"
              name="category"
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <br />

            <label htmlFor="quantity">quantity:</label>
            <br />
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <br />

            <label htmlFor="price">price:</label>
            <br />
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <br />

            <label htmlFor="shortDesc">short description:</label>
            <br />
            <input
              type="text"
              name="shortDesc"
              id="shortDesc"
              value={shortDesc}
              onChange={(e) => {
                setShortDesc(e.target.value);
              }}
            />
            <br />

            <label htmlFor="description">full description:</label>
            <br />
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <br />
            <br />

            <button
              onClick={() => {
                if (itemName !== "" && price > 0 && description !== "") {
                  setErrorMsg("");
                  newMerchItem(
                    itemName,
                    category,
                    Number (quantity),
                    Number (price),
                    shortDesc,
                    description
                  ).then((res) => {
                    setAllMerchArray((prev) => [...prev, res.data]);
                  });

                  getAllMerch().then((res) => {
                    setDisplayMerch(res.data);
                  });

                  getAllMerch().then((res) => {
                    setOnPage(res.data);
                  });
                } else {
                  setErrorMsg("Invalid entry. No field can remain empty.");
                }
              }}
            >
              add item
            </button>
            <br />
            <br />
            <p>{errorMsg}</p>
          </StyledProductForm>
        </div>
      ) : (
        ""
      )}

      <StyledSelect>
        <div className="title">
          <h1>Browse our original merch</h1>
        </div>

        <div className="browseMerch">
          {/* select - search merch by category */}
          <div className="selectMenu">
            <select
              name="select"
              id="select"
              onChange={(e) => {
                setSelectValue(e.target.value);
                setCurrPage(1);
              }}
            >
              <option id="choose" value="choose">
                choose a category
              </option>
              {myCategories.map(function (category) {
                return (
                  <option key={category} id={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of select */}

          {/* input - search games by name */}
          <div className="inputSearch">
            <input
              type="text"
              placeholder="or search items by name..."
              onChange={(e) => {
                setSelectValue2(e.target.value);
                setCurrPage(1);
              }}
            />
          </div>
          {/* end of input - search games by name */}
        </div>
      </StyledSelect>

      {/* Pagination select 10, 20, or 30 items per page */}
      <Pagination
        displayArray={displayMerch}
        displayed={displayed}
        setDisplayed={setDisplayed}
        setOnPage={setOnPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      {/* end of Pagination */}

      <StyledMerch>
        {/* merch display */}

        {user && user.userCategory !== "admin" ? (
        <div className="goToCart">
          <Link to="/cart">
            <button>go to cart</button>
          </Link>
        </div>
      ) : (
        ""
      )}

        <div className="selectedMerch">
          {onPage.map(function (merchItem) {
            return (
              <MerchItem
                key={merchItem.itemName}
                merchItem={merchItem}
                user={user}
                allMerchArray={allMerchArray}
                setAllMerchArray={setAllMerchArray}
                setDisplayMerch={setDisplayMerch}
              />
            );
          })}
        </div>
        {/* end of merch display */}
      </StyledMerch>
    </>
  );
};

export default Merch;
