import { Component } from "react";
import DestinationItem from "./DestinationItem";
import "./index.css";

const destinationList = [
  {
    name: "New York",
    id: "id1",
    imageUrl:
      "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg",
  },
  {
    name: "Westminster Abbey",
    id: "id2",
    imageUrl:
      "https://7ll9o237ws144rd6d2bi0xk1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/westminster-abbey-guide-1000x508.jpg",
  },
  {
    name: "Tower Bridge",
    id: "id3",
    imageUrl:
      "https://cdn.britannica.com/35/156335-050-62245FCA/Tower-Bridge-River-Thames-London.jpg",
  },
  {
    name: "Shrubland",
    id: "id4",
    imageUrl:
      "https://www.worldatlas.com/r/w1200/upload/12/fb/79/shutterstock-51457897.jpg",
  },
  {
    name: "National Historic site",
    id: "id5",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Salem_Customs_House.jpg",
  },
  {
    name: "Escarpment",
    id: "id6",
    imageUrl:
      "https://res.cloudinary.com/dtpgi0zck/image/upload/s--RYmkQZzo--/c_fit,h_580,w_860/v1/EducationHub/photos/bandiagara-escarpment-mali.jpg",
  },
  {
    name: "Steeple",
    id: "id7",
    imageUrl:
      "https://cdn.britannica.com/55/143255-050-332C849B/Steeple-Townshend-United-Church-of-Christ-Vermont.jpg",
  },
  {
    name: "Taj Mahal",
    id: "id8",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/640px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
  },
];

class DestinationSearch extends Component {
  state = { searchValue: "" };
  destinationLists = destinationList;

  onChangeInput = (event) => {
    this.setState({ searchValue: event.target.value });
    this.destinationLists = destinationList.filter((item) =>
      item.name.toLocaleLowerCase().includes(event.target.value)
    );
  };

  render() {
    return (
      <div className="destination-page">
        <h1 className="destination-header">Destination Search</h1>
        <div className="destination-input-field">
          <input
            className="destination-input"
            placeholder="Search"
            onChange={this.onChangeInput}
            type="text"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search logo"
          />
        </div>
        <div className="destinantion-container">
          {this.destinationLists.map((item) => (
            <DestinationItem
              name={item.name}
              imageUrl={item.imageUrl}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default DestinationSearch;
