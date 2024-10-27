import "../styles/styles.css"
import { Navbar} from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import { Link } from 'react-router-dom'

export const Home = () => {
    return(
        <>
        <Navbar/>
        <main>
        <section className="img-container flex">
        <h1 className="h-1">Bienvenidos a nuestro hotel</h1>
      </section>
      <section>
        <h2 className="title" id="servicios">Servicios</h2>
        <div className="item flex">
          <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus maximus lectus quis venenatis. Cras eu nisi quis arcu
              viverra tincidunt eu a lorem.
          </Card>
          <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus maximus lectus quis venenatis. Cras eu nisi quis arcu
              viverra tincidunt eu a lorem.
          </Card>
          <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus maximus lectus quis venenatis. Cras eu nisi quis arcu
              viverra tincidunt eu a lorem.
          </Card>
          <Card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus maximus lectus quis venenatis. Cras eu nisi quis arcu
              viverra tincidunt eu a lorem.
          </Card>
        </div>
      </section>
      <section className="item flex">
        <h2 className="title" id="habitaciones">Habitaciones</h2>
        <div className="item flex">
          <figure>
            <img
              className="room round"
              src="https://picsum.photos/1080/720/"
              alt="random example img"
            />
            <figcaption className="text">
              Lorem ipsum dolor sit amet, consectetur, microdosing tousled
              waistcoat.
            </figcaption>
          </figure>
          <figure>
            <img
              className="room round"
              src="https://picsum.photos/1080/720/"
              alt="random example img"
            />
            <figcaption className="text">
              Lorem ipsum dolor sit amet, consectetur, microdosing tousled
              waistcoat.
            </figcaption>
          </figure>
          <figure>
            <img
              className="room round"
              src="https://picsum.photos/1080/720/"
              alt="random example img"
            />
            <figcaption className="text">
              Lorem ipsum dolor sit amet, consectetur, microdosing tousled
              waistcoat.
            </figcaption>
          </figure>
          <figure>
            <img
              className="room round"
              src="https://picsum.photos/1080/720/"
              alt="random example img"
            />
            <figcaption className="text">
              Lorem ipsum dolor sit amet, consectetur, microdosing tousled
              waistcoat.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="item flex">
        <h2 className="title" id="precios">Precios</h2>
        <Card>
        <strong>Lorem Ipsum</strong><br/><br/>
        Fusce sed lacus convallis, dapibus odio<br/>
        <br/>
        <em>$9.99</em>
        </Card>
        <Card>
        <strong>Lorem Ipsum</strong><br/><br/>
        Fusce sed lacus convallis, dapibus odio<br/>
        <br/>
        <em>$9.99</em>
        </Card>
        <Card>
        <strong>Lorem Ipsum</strong><br/><br/>
        Fusce sed lacus convallis, dapibus odio<br/>
        <br/>
        <em>$9.99</em>
        </Card>
        <Card>
        <strong>Lorem Ipsum</strong><br/><br/>
        Fusce sed lacus convallis, dapibus odio<br/>
        <br/>
        <em>$9.99</em>
        </Card>
        </section>
        <section className="item flex">
        <Link  id="reservar" to="/reservar">
        <button type="button" id="reservar" className="rsrv-button round">
          Reservar
        </button>
        </Link>
        </section>
        </main>
        <Footer/>
        </>
    )
}