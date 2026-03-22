import React from "react"
import Hero from "./Hero"
import Leftsection from "./Leftsection"
import Rightsection from "./Righsection"
import Universe from "./Universe"
function ProductPage() {
  return (
    <div>
      <Hero />
      <Leftsection
        imageURL="media/images/kite.png"
        productName="kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightsection />

      <Leftsection
        imageURL="media/images/coin.png"
        productName="coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <Rightsection />

      <Leftsection
        imageURL="media/images/varsity.png"
        productName="versity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightsection />
      <Universe />
    </div>
  )
}

export default ProductPage
