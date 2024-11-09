import persiaJSLogo from "./assets/logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import fetchHandler from "./utils/fetchHandler";
interface Post {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchHandler();
    setPosts(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <img src={persiaJSLogo} className="logo" alt="PersiaJS Logo" />
          <h3>گروه برنامه‌نویسی پرشیا‌جی‌اس</h3>
        </div>
        <div>
          <p className="app_looking">
            گروه برنامه‌نویسی پرشیا‌جی‌اس یک گروه برنامه‌نویسی فعال در PersiaJS
            که توسط
            <a target="_blank" href="https://gazar.dev">
              {" "}
              احسان گازار{" "}
            </a>
            تأسیس شده است، با هدف رفع نیازهای جامعه‌ی توسعه‌دهندگان فارسی‌زبان و
            ارائه‌ی منابع آموزشی به‌روز و کاربردی در زمینه‌ی جاوااسکریپت و
            فناوری‌های وابسته ایجاد شده است. این سایت با تمرکز بر آموزش‌های جامع
            و پروژه‌محور تلاش می‌کند تا راهی ساده و مؤثر برای یادگیری
            تکنولوژی‌های وب فراهم کند و افراد با هر سطحی از دانش برنامه‌نویسی
            بتوانند از آن بهره‌مند شوند.
          </p>
          <p className="app_looking">
            هدف ما در PersiaJS، ایجاد بستری است که از طریق آن توسعه‌دهندگان و
            برنامه‌نویسان بتوانند با جدیدترین متدها، فریم‌ورک‌ها و ابزارهای
            جاوااسکریپت آشنا شوند و به راحتی مهارت‌های خود را ارتقا دهند. در این
            پلتفرم، مقالات تخصصی، ویدیوهای آموزشی، پروژه‌های عملی و کتابخانه‌های
            متن‌باز در دسترس کاربران قرار می‌گیرد.
          </p>
          <p className="app_looking">
            PersiaJS یک جامعه‌ی پویا و فعال را نیز به وجود آورده که در آن اعضا
            می‌توانند تجربیات خود را به اشتراک بگذارند و با دیگر توسعه‌دهندگان
            همکاری کنند. از افراد مبتدی تا حرفه‌ای، همگی می‌توانند با استفاده از
            منابع و مستندات سایت در پروژه‌های متن‌باز مشارکت کنند و با بهره‌گیری
            از آموزش‌های پروژه‌محور، مهارت‌های خود را در فناوری‌هایی نظیر React،
            Vue، Node.js و دیگر ابزارهای مدرن توسعه‌ی وب گسترش دهند.
          </p>
          <p className="app_looking">
            همراه با PersiaJS، آینده‌ای بهتر برای دنیای وب فارسی رقم بزنید و به
            جمع توسعه‌دهندگان متعهدی بپیوندید که با دانش و تجربه خود به رشد و
            توسعه‌ی جامعه‌ی فارسی‌زبان کمک می‌کنند.
          </p>
        </div>
        <div className="app_looking app_links">
          <a
            target="_blank"
            className="telegram"
            href=" https://t.me/joinchat/BcZHTxkf2MoIC1pHxJ_xSw"
          >
            تلگرام
          </a>
        </div>
        <div className="app_looking app_events">
          <h3>آخرین مطالب گروه برنامه‌نویسی پرشیا‌جی‌اس:</h3>

          {!loading && posts.length === 0 && <p>No data found</p>}
          {!loading && posts.length > 0 && (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <a
                    target="_blank"
                    className="link"
                    href={`https://gazar.dev/fa/${post.slug}`}
                  >
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                    </span>{" "}
                    -{post.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {loading && <p>در حال بارگذاری...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
