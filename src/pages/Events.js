import React, { useEffect, useState } from "react";
import { items } from "./items";
import "../styles.css";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    visitorQuantity: 1,
  });

  let filters = [
    "Music",
    "Performing & visual Arts",
    "Holiday",
    "Health",
    "Hobbies",
    "Business",
    "Food & Drinks",
    "Sports & Fitness",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any actions with the submitted data
    console.log("Submitted data:", formData);

    const selectedItemWithDefaultPrice = {
      ...selectedItem,
      price: items.find((item) => item.name === selectedItem.name)?.price || 0,
    };

    // Clear the form and go back
    setFormData({
      description: "",
      visitorQuantity: 1,
    });
    setSelectedItem(selectedItemWithDefaultPrice);

    // Show confirmation dialog box
    if (window.confirm("Booking confirmed!")) {
      // Perform any further actions here
    }
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1>Check out trending categories</h1>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div
            key={`items-${idx}`}
            className="item"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.image} alt="" width="300" height="200" />
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="item-details-overlay">
          <div className="item-details-container">
            <h2>Item Details</h2>
            <img src={selectedItem.image} alt="" width="300" height="200" />
            <p>{selectedItem.name}</p>
            <p className="category">{selectedItem.category}</p>
            <p>
              Price: <span className="price">{selectedItem.price}</span>
            </p>

            <form onSubmit={handleSubmit}>
              <label>
                Comments:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Visitor Quantity (1-30):
                <input
                  type="number"
                  name="visitorQuantity"
                  min="1"
                  max="30"
                  value={formData.visitorQuantity}
                  onChange={handleFormChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>

            <button onClick={handleBackClick}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
