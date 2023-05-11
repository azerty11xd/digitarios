import 'bootstrap/dist/css/bootstrap.min.css'

import Mynavbar from '../comps/Mynavbar'
import Herosection from '../comps/Herosection'
import Cards from '../comps/cards'
import Firstsection from '../comps/Firstsection'
import Secondsection from '../comps/Secondsection'
import Thirdsection from '../comps/Thirdsection'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <Mynavbar />
      <Herosection />
      <Cards />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer />
    </div>
  )
}
