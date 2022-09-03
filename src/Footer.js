import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin2 } from "react-icons-kit/icomoon/linkedin2";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© | 2022 | Prathamesh</p>
      <div>
        <span>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/prathameshsawant20/"
          >
            <Icon icon={linkedin2} />
          </a>
        </span>
        <span>
          <a
            className="link"
            target="_blank"
            href="https://github.com/prathamesh4512"
          >
            <Icon icon={github} />
          </a>
        </span>
      </div>
    </footer>
  );
}
