import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>住民投票Mapとは？</h2>
      <p>
        このサイトでは、日本全国の住民投票の事例を地図上に表示しています。<br></br>
        このサイトのソースコードは<a href="https://github.com/yuneko1127/jumintohyoMap" target="_blank" without rel="noreferrer">GitHub</a>で公開されています。<br></br>
        地方自治は、<strong>「民主主義の学校」</strong>とも言われています。
        その中でも住民投票は、市民が直接決めることのできる重要な制度です。
        日本国内では、たくさんの住民投票が行われ、市民が直接政治に参加しています。
        このような直接民主主義の事例を地図を使って知ることによって、
        他の自治体での住民投票の実施や制度の準備、ひいては国単位での国民投票制度の導入について考える機会になればと思っています。
      </p>
      <h2>データについて</h2>
      <p>
        このサイトのデータは、様々な情報源から収集しています。
        ピンをクリックすると、その住民投票に関する情報をどこから得ているかという情報も表示されます。
        また、データの正確性については、できる限り確認を行っていますが、誤っている可能性もありますので、その際はご連絡ください。修正します。
        <br></br>
        データ収集、及び整理が進行中ですので、加えられていない事例を知っている方、今トリビュートしたいという方はご連絡ください。
      </p>
      <h3>位置について</h3>
      <p>
        ピンは、基本的に住民投票の行われた自治体の市町村役所及び都道府県庁にしてしている。
        ただし、現在統合等によりなくなってしまった自治体については、統合後の自治体の役所の位置にピンを設定している。
      </p>
      <h3>データの出典について</h3>
      <ul>
        <li>
          一般財団法人地方自治研究機構：同組織HPの
          <a href="http://www.rilg.or.jp/htdocs/img/reiki/046_referendum.htm"
            rel="noopener noreferrer"
            target="_blank">
            住民投票に関する条例
            </a>
          より
        </li>
      </ul>
      <h2>製作者 and コントリビューター</h2>
      <p>
        <ul>
          <li>
            <a href="https://github.com/yuneko1127"
              rel="noopener noreferrer"
              target="_blank">
              <strong>ゆう猫</strong>
            </a>
            ：プロジェクト始動者、コーディング、データの収集
          </li>
        </ul>
        <strong>
          このプロジェクトでは、コントリビューターを募集しています。
          <Link to="/contact">Contact</Link>などから連絡ください。
        </strong>
      </p>
    </div>
  );
};

export default About;
