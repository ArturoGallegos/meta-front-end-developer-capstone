import aboutImg from '../../assets/mario-adrian-a.jpg'
import styles from './About.module.sass'

const About = () => <section className={styles.about}>
  <div>
    <div className={styles.content}>
      <h3>Little Lemon</h3>
      <span>Chicago</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad dolor odio quam laudantium nesciunt eaque qui ipsa id pariatur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga illum minima mollitia, possimus id.</p>
      <p>Explicabo similique velit voluptatibus vel sapiente voluptatem error beatae possimus molestias eos, minima quidem labore.</p>
      <p>A facilis voluptas natus fugiat magni sunt maxime, rerum voluptates officiis quas non, sequi iure.</p>
    </div>
    <img src={aboutImg} alt="about us"/>
  </div>
</section>

export default About
