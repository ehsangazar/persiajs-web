import persiaJSLogo from "./assets/logo.png";
import "./App.css";
import ehsangazar from "./assets/speakers/ehsangazar.jpg";
import maziar from "./assets/speakers/mazyar-parsi.jpeg";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <div>
            <img src={persiaJSLogo} className="logo" alt="PersiaJS Logo" />
            <h2>پرشیا‌جی‌اس</h2>
          </div>
        </div>
        <div className="app_looking">
          <p>۱۰ خرداد ۱۴۰۳</p>
          <a target="_blank" href="https://lu.ma/felnf9sv">
            <button>عضو شوید</button>
          </a>
        </div>
        <div className="app_speakers">
          <ul>
            <li>
              <div>
                <img src={ehsangazar} className="speaker" alt="Ehsan Gazar" />
              </div>
              <div>
                <h2>اشتراک تجارب من در اینترویوها</h2>
                <div>
                  —{" "}
                  <a target="_blank" className="link" href="https://gazar.dev/">
                    احسان گازار
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div>
                <img src={maziar} className="speaker" alt="Maziar" />
              </div>
              <div>
                <h2>کار با NestJS</h2>
                <div>
                  —{" "}
                  <a
                    target="_blank"
                    className="link"
                    href="https://www.linkedin.com/in/maziar-parsi/"
                  >
                    مازیار پارسی
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="app_looking">
          <p>
            اگر می‌خواهید ارائه‌ای داشته باشید یا به دنبال ایده‌ای برای ارائه
            هستید حتما به ما در{" "}
            <a target="_blank" className="link" href="mailto:info@persiajs.dev">
              info@persiajs.dev
            </a>{" "}
            ایمیلی بفرستید. ما همیشه به دنبال سخنرانان هستیم
          </p>
        </div>
        <div className="app_looking">
          <p>
            عضو گروه{" "}
            <a
              target="_blank"
              className="link"
              href=" https://t.me/joinchat/BcZHTxkf2MoIC1pHxJ_xSw"
            >
              تلگرام
            </a>{" "}
            شوید و ما را در آنجا دنبال کنید
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
