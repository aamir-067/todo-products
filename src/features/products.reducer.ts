import { createSlice } from "@reduxjs/toolkit";

export interface Product {
	title: string;
	quantity: number;
}

export interface ProductInitialStatus {
	allProducts: Array<Product>;
}

const initialState: ProductInitialStatus = {
	allProducts: [
		{
			title: "dummy todo 01",
			quantity: 2,
		},
		{
			title: "dummy todo 02",
			quantity: 3,
		},
	],
};

const productsReducer = createSlice({
	name: "productsReducer",
	initialState,
	reducers: {
		addProduct: (state: ProductInitialStatus, action) => {
			state.allProducts.push(action.payload.product);
		},
		incrementQuantity: (state: ProductInitialStatus, action) => {
			state.allProducts[action.payload.index].quantity += 1;
		},
		decrementQuantity: (state: ProductInitialStatus, action) => {
			state.allProducts[action.payload.index].quantity -= 1;
		},
	},
});
export const { addProduct, incrementQuantity, decrementQuantity } =
	productsReducer.actions;
export default productsReducer.reducer;
