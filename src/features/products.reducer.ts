import { createSlice } from "@reduxjs/toolkit";

export interface Product {
	title: string;
	quantity: number;
}

export interface ProductInitialStatus {
	allProducts: Array<Product>;
}

const initialState: ProductInitialStatus = {
	allProducts: [],
};

const productsReducer = createSlice({
	name: "productsReducer",
	initialState,
	reducers: {
		addProduct: (state: ProductInitialStatus, action) => {
			state.allProducts.push(action.payload.product);
		},

		// increment the quantity of the product by one.
		incrementQuantity: (state: ProductInitialStatus, action) => {
			state.allProducts[action.payload.index].quantity += 1;
		},

		/* The `decrementQuantity` function in the productsReducer slice is responsible for reducing the
		quantity of a specific product. and removes it if the quantity becomes zero */
		decrementQuantity: (state: ProductInitialStatus, action) => {
			const newQuantity: number =
				state.allProducts[action.payload.index].quantity - 1;
			if (newQuantity > 0) {
				state.allProducts[action.payload.index].quantity = newQuantity;
			} else {
				state.allProducts.splice(action.payload.index, 1);
			}
		},
	},
});
export const { addProduct, incrementQuantity, decrementQuantity } =
	productsReducer.actions;
export default productsReducer.reducer;
