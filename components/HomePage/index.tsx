import Image from "next/image";
import styles from "../../app/page.module.css";
import toy from "../../public/images/pep-toy.png";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div>
        <div>
          <h1>
            We are going through <br />
            all the stress so you <br />
            {`don't `}have to!
          </h1>
          <p>
            Thank you for your patience as we diligently work on <br />
            creating our new website and crafting solutions to <br />
            simplify your {`life's`}journey.
          </p>
          <div className={styles.enter}>
            <input
              placeholder="Enter email address"
              type="email"
              name=""
              id=""
            />
            <button>NOTIFY ME</button>
          </div>
        </div>
        <div>
          <Image
            src={toy}
            alt="Pep toy"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 464px) 100vw, (max-width: 464px) 50vw, 33vw"
          />
        </div>
      </div>
      <div>
        <span>
          <h2>pepnops</h2>
        </span>
        <span>
          <a
            target={`_blank`}
            rel="noopener noreferrer"
            href="https://twitter.com/pepnops"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            target={`_blank`}
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/pepnops/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target={`_blank`}
            rel="noopener noreferrer"
            href="https://instagram.com/pepnops"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
