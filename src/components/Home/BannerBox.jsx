import React from 'react'
import BannerBoxItem from './BannerBoxItem'

const BannerBox = () => {
  return (
    <section className='pt-10'>
        <div className="container">
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-7">
              
                <BannerBoxItem icon="/bannerbox1.png" h4="Best prices & offers">Orders $50 or more</BannerBoxItem>
                <BannerBoxItem icon="/bannerbox2.png" h4="Free deliverys">24/7 amazing services</BannerBoxItem>
                
                <BannerBoxItem icon="/bannerbox3.png" h4="Great daily deal">When you sign up</BannerBoxItem>
                
                <BannerBoxItem icon="/bannerbox4.png" h4="Wide assortment">Mega Discounts</BannerBoxItem>
                <BannerBoxItem icon="/bannerbox5.png" h4="Easy returns">Within 30 days</BannerBoxItem>
               

                {/* <BannerBoxItem icon="/bannerbox4.png" h4="Wide assortment" children="Within 30 days"></BannerBoxItem> */}
              
           </div>
        </div>
    </section>
  )
}

export default BannerBox