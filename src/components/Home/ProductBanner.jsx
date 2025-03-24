import React from 'react'
import ProductBannerItem from './ProductBannerItem'

const ProductBanner = () => {
    return (
        <section className='pb-12'>
            <div className="container flex gap-6">
                <ProductBannerItem bg="/productbanner1.png"  url="/">Everyday Fresh &
                Clean with Our Products </ProductBannerItem>
                <ProductBannerItem bg="/productbanner1.png"  url="/"> Make your Breakfast
                Healthy and Easy</ProductBannerItem>
                <ProductBannerItem bg="/productbanner1.png"  url="/">The best Organic
                Products Online </ProductBannerItem>
            </div>
        </section>
    )
}

export default ProductBanner