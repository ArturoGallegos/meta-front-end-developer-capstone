import aboutImg from 'src/assets/images/about-us.jpg'
import styles from './About.module.sass'

const About = () => <section className={styles.about}>
  <div>
    <div className={styles.content}>
      <h3>Little Lemon</h3>
      <span>Chicago</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, impedit? Iusto veniam minus necessitatibus odit sequi provident dolorum est vero.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi unde quam dolores maxime illo, quibusdam cumque ipsam eos dolore provident enim odit officiis aut repellendus doloribus reiciendis voluptas recusandae. Asperiores quisquam similique sed dolorum, impedit voluptate deleniti mollitia tenetur debitis dignissimos earum commodi ratione, sint necessitatibus eum est! Non iste, aliquam eligendi laboriosam accusamus natus in. Quas, veritatis? Laudantium.</p>
    </div>
    <div className={styles.image}>
      <img src={aboutImg} alt="about us"/>
    </div>
  </div>
</section>

export default About
