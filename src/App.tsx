import persiaJSLogo from "./assets/logo.png";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <img src={persiaJSLogo} className="logo" alt="PersiaJS Logo" />
          <h3>گروه برنامه‌نویسی پرشیا‌جی‌اس</h3>
        </div>
        <div className="hide">
          <div className="app_looking">
            <p>۱۰ خرداد ۱۴۰۳</p>
            <a target="_blank" href="https://lu.ma/felnf9sv">
              <button>عضو شوید</button>
            </a>
          </div>
        </div>
        <div className="app_looking app_links">
          <ul>
            <li>
              <a
                target="_blank"
                className="link"
                href=" https://t.me/joinchat/BcZHTxkf2MoIC1pHxJ_xSw"
              >
                تلگرام
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href=" https://www.youtube.com/@PersiaJS"
              >
                یوتیوب
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.instagram.com/persiajs.dev/"
              >
                اینستاگرام
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.linkedin.com/company/persiajs?trk=ppro_cprof&originalSubdomain=uk"
              >
                لینکداین
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://discord.gg/TSRBq66w"
              >
                دیسکورد
              </a>
            </li>
          </ul>
        </div>
        <div className="app_looking app_content">
          <p>
            اگر می‌خواهید با ما در ارتباط باشید ایمیلی به
            <a
              target="_blank"
              className="link english"
              href="mailto:info@persiajs.dev"
            >
              info@persiajs.dev
            </a>{" "}
            ایمیلی بفرستید.
          </p>
        </div>
        <div className="app_looking app_events">
          <h3>آخرین رویداد‌ها:</h3>
          <ul>
            <li>
              <a
                target="_blank"
                className="link"
                href=" https://lu.ma/felnf9sv"
              >
                ایونت ۱۰ خرداد ۱۴۰۳ - دوره‌همی بررسی رویداد‌های اخیر
                برنامه‌نویسی
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href=" https://www.youtube.com/watch?v=4ANh_7svMZA"
              >
                اپیزود چهارم: بررسی شرکت‌های ایرانی و ویژگی‌های NextJS 13
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href=" https://www.youtube.com/watch?v=N54O8afeReo"
              >
                اپیزود سوم: بررسی epic stack که هفته‌ی پیش توسط Kent C منتشر شد
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=Q9UBdk5kkGU"
              >
                اپیزود دوم: معرفی و سوالات کاری و برنامه‌نویسی
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=61AwXek_pQQ"
              >
                PersiaJS 3rd Event: 14 June - How to Learn and SEO
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=s7XK8Kod1Kg"
              >
                رویداد ۲ پرشیا جی اس ۳۰ اردیبهشت ۱۴۰۱ – آموزش ویژگی‌های جدید
                React 18
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=G9Lzf9tSy9s"
              >
                مصاحبه با مصطفی پایدارصفت - مدیر فنی یا مدیر محصول استارتاپ
                salamati24.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=XFj9OF_qteU"
              >
                گفتگو با علیرضا بشیری - برنامه‌نویس و کارآفرین در تایلند
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=sKw88ftkaZU"
              >
                مصاحبه با حسین جدیدی ۰ برنامه‌نویس Full Stack شرکت SEB در Kuala
                Lumpur, Malaysia
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=9FJc-fsnUzs"
              >
                گفتگو با مجتبی چنانی - برنامه‌نویس شرکت cubic در هامبورگ آلمان
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=yCBWUuXNWWw"
              >
                مصاحبه با سینا شرف‌زاده - Technical Lead Alibaba Co
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="link"
                href="https://www.youtube.com/watch?v=wLSFhfRgGzo"
              >
                مصاحبه با مهدی صفری
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
