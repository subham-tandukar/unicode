import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import styles from './ok.module.scss';

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className="ok-container">
        <div className="flex flex-wrap">
          <div className={styles["info-col"]}>
            <div className={styles["foot-logo"]}>
              <Link href="https://www.onlinekhabar.com" target="_blank">
                <Image
                  width={240}
                  height={30}
                  src="/img/ok-logo-text-white.svg"
                  alt="Ok Logo"
                />
              </Link>
            </div>
            <div className={styles["director-info"]}>
              <div className={styles["item"]}>
                <label>अध्यक्ष तथा प्रबन्ध निर्देशक:</label>
                <span>धर्मराज भुसाल</span>
              </div>
              <div className={styles["item"]}>
                <label>प्रधान सम्पादक:</label>
                <span>शिव गाउँले</span>
              </div>
              <div className={styles["item"]}>
                <label>सूचना विभाग दर्ता नं.</label>
                <span>२१४ / ०७३–७४</span>
              </div>
            </div>

            <div className={styles["contact-info"]}>
              <span>+977-1-4790176, +977-1-4796489</span>
              <span>news@onlinekhabar.com</span>
            </div>
            <div>
              <div className={styles["social-brands"]}>
                <Link
                  href="https://www.facebook.com/onlinekhabarnews/"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
                <Link href="https://twitter.com/online_khabar" target="_blank">
                  <FaTwitter />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCo4cuctdb-1YdZNgWEVZGwA"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <div className={styles["copyright"]}>
              © २००६-२०२३ Onlinekhabar.com सर्वाधिकार सुरक्षित
            </div>
          </div>
          <div className={styles["foot-list"]}>
            <h4>विजनेस</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/market"
                >
                  बजार
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/tourism"
                >
                  पर्यटन
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/rojgar/"
                >
                  रोजगार
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/bank-main/"
                >
                  बैँक / वित्त
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/auto/"
                >
                  अटो
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/technology/"
                >
                  सूचना-प्रविधि
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["foot-list"]}>
            <h4>मनोरञ्जन</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/modelgallery"
                >
                  ब्लोअप
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/gassip"
                >
                  गसिप
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/bolly-hollywood"
                >
                  बलिउड / हलिउड
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/videos-main"
                >
                  भिडियो
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/ent-news/"
                >
                  ताजा समाचार
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["foot-list"]}>
            <h4>विशेष श्रृंखला</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/segment/cooperative-crisis"
                >
                  सहकारी संकट विशेष{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/segment/laghubitta"
                >
                  लगुबित्त संकट विशेष{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/dissolution-hor"
                >
                  संसद विघटन विशेष{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/trend/%e0%a4%ab%e0%a5%8d%e0%a4%b0%e0%a4%a8%e0%a5%8d%e0%a4%9f%e0%a4%b2%e0%a4%be%e0%a4%87%e0%a4%a8-%e0%a4%b9%e0%a4%bf%e0%a4%b0%e0%a5%8b%e0%a4%9c"
                >
                  फ्रन्टलाइन हिरोज्
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://election-2074.onlinekhabar.com/"
                >
                  निर्वाचन २०७४
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/sports/merokatha"
                >
                  मेरो कथा
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://election-local.onlinekhabar.com/"
                >
                  स्थानीय चुनाव २०७९
                </a>
              </li>
              <li>
                <a target="_blank" href="https://election.onlinekhabar.com/">
                  निर्वाचन २०७९
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/content/umlcd"
                >
                  एमाले महाधिवेशन{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/worldcup2022"
                >
                  विश्वकप २०२२{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["foot-list"]}>
            <h4>अनलाइनखबर</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/about-us/"
                >
                  हाम्रो टीम
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.onlinekhabar.com/">
                  प्रयोगका सर्त
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/advertise-with-us"
                >
                  विज्ञापन
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/privacy-policy/"
                >
                  प्राइभेसी पोलिसी
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.onlinekhabar.com/contact-us/"
                >
                  सम्पर्क
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
