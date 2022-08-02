import { createStore } from "idb-keyval";

const hotelIdb = createStore("hotels-catalogue-database", "hotels");

export default hotelIdb;