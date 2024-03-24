import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
        <h2>住民投票Mapとは？</h2>
        <p>
            このサイトでは、日本全国の住民投票の事例を地図上に表示しています。
            地方自治体は、「民主主義の教室」とも言われています。
            その中でも住民投票は、市民が直接決めることのできる重要な制度です。
            日本国内では、たくさんの住民投票が行われ、市民が直接政治に参加しています。
            このような直接民主主義の事例を地図を使って知ることによって、
            他の自治体での住民投票の実施や制度の準備、ひいては国単位での国民投票制度の導入について考える気かけになればと思っています。
        </p>
        <h2>製作者 and コントリビューター</h2>
        <p>
            このサイトは、<a href='https://github.com/yuneko1127' rel="noopener noreferrer" target="_blank">ゆう猫</a>が作成しました。
        </p>

    </div>
  );
};

export default About;
