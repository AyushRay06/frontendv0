import { Banner } from "@/components/banner"
import { Cards2 } from "@/components/cards2"
import { Catagories } from "@/components/catagories"
import { Footer } from "@/components/footer"

export default function Hero() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="mt-40">
        <Catagories />
      </div>
      <div className="pt-20 my-20 mx-20 lg:mx-10 xl:mx-60">
        <Cards2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
