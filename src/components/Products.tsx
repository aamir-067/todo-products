import { useSelector } from "react-redux"
import { store, Store } from "../store/store"
import { addProduct, incrementQuantity, decrementQuantity, Product } from "../features/products.reducer";
import { useState } from "react";

const Products = () => {
    const allProducts: Product[] = useSelector((state: Store) => state.products.allProducts);
    const [productText, setProductText] = useState("");


    const registerNewProduct = (e: React.FormEvent<HTMLFormElement> | undefined = undefined) => {
        e?.preventDefault();
        if (productText && productText.trim()) {

            const newProduct: Product = {
                title: productText.trim(),
                quantity: 1
            };

            console.log(newProduct);

            try {
                store.dispatch(addProduct({ product: newProduct }));
                setProductText("");
            } catch (error) {
                console.error('Failed to add product:', error);
            }
        }
    }


    return (
        <div className="w-full mx-auto max-w-2xl bg-white shadow-md p-10">
            <h1 className="mt-6 font-semibold text-[#0e0e11] text-3xl">Add Products</h1>

            {/* input field */}
            <div className="mt-8">
                <label htmlFor="productText" className="block text-sm font-normal text-[#676565]">Product</label>
                <form onSubmit={(e) => registerNewProduct(e)} className="flex">
                    <input
                        type="text"
                        id="productText"
                        value={productText}
                        onChange={(e) => setProductText(e.target.value)}
                        placeholder="e.g. Product ABC"
                        className="mt-1 w-full p-2 mr-3 rounded-md border-[#676565] border-[1px] outline-none placeholder:text-[#676565]"
                    />
                    <button onClick={() => registerNewProduct(undefined)} className={`${productText.trim().length ? "bg-[#1061C4] text-white" : "bg-[#F4F4F4] text-[#676565]"} font-medium px-4 text-sm rounded-md`}>Add</button>
                </form>
            </div>


            <div className="w-full mt-6 min-h-96">

                <ul className="flex flex-col gap-y-1">
                    {
                        allProducts?.map((product: Product, index: number) => (
                            <li className="w-full h-[72px] border-[#F4F4F4] border-[1.5px]  flex justify-between items-center">
                                <p className="px-4 text-[#141312] text-sm">{product.title}</p>
                                <div className="flex w-4/12 h-full items-center justify-between">
                                    <button onClick={() => store.dispatch(decrementQuantity({ index }))} className=" aspect-square h-full">
                                        <img className="w-[14px] mx-auto aspect-square" src="https://www.iconpacks.net/icons/2/free-minus-icon-3108-thumb.png" alt="" />
                                    </button>
                                    <p className="bg-[#F4F4F4] text-[#141312] px-2 py-[2px] font-medium text-center">{product.quantity}</p>
                                    <button onClick={() => store.dispatch(incrementQuantity({ index }))} className="aspect-square  h-full">
                                        <img className="w-[14px] aspect-square mx-auto" src="https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png" alt="" />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>



                {/* empty cart component */}
                {
                    allProducts?.length === 0 &&
                    <div className="w-full min-h-96 flex items-center justify-center">
                        <div className="h-10 w-30 w-fit flex flex-col gap-y-3 justify-center items-center">
                            <img className="w-[60px] aspect-square" src="https://s3-alpha-sig.figma.com/img/47b8/230e/85c3b36b66553d12866d25206db99629?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNbP7aqBjv9l7Rzao~VFD8faa3lwa7ggG6xSvNSGlHCnmxHYMWxdxh2KC~JJ6Frmn4up76caPt5YknknMXHkzx9JDDq-6aiWDOeUyrAVQegzIjKDZjZScaanwwuok9B5fNzqSZG-17Ur9AYHXTb28i37lvqQPa6pEAEBuwfxmzvSGTqsKrMcKmFDOcvABsS9wTX4VqiD4e9bhIYNGKktKnYSp5lP5NL7crDFg17x~JQFoDVdt1cxfN0UuWwnj0q15AnfErFneJE75gblXcG9xL4iSy2-EqPvlc20p5Rd0dRVdUZNuHCsmmuDJAw3K9BIt9TtxY6BQVMt31Frzc3CYg__" alt="" />
                            <h1 className="text-[#141312]">No products have been added.</h1>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Products