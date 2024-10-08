export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return <div>Products</div>
}
