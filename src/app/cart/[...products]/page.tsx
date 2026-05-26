


export default async function Products(props) {
    const {products} = await props.params;
    console.log(products);
    return(
        <div className="fix-height" >
            <h1>Products</h1>
        </div>
    );
}