import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import Baptism from '../images/sacramentum/baptism.jpg';
import Marriage from '../images/sacramentum/marriage.jpg';
import Christmation from '../images/sacramentum/сhrismation.jpg';
import Anointing from '../images/sacramentum/anointing.jpg';
import Confession from '../images/sacramentum/confession.jpg';
import Eucharist from '../images/sacramentum/eucharist.jpg';
import Priesthood from '../images/sacramentum/priesthood.jpg';


class Sacramentum extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <h1>Таинства Нового Завета</h1>
        <div className="ordinary-page">
          <p className='header-message'>
            <i>Семь таинств касаются всех этапов, всех важных моментов жизни христианина: они дают рождение и возрастание, исцеление и миссию христианской жизни в вере. </i>
          </p>
          <br/>

          <section className="text-section">
            <h2>Крещение</h2>
            <img className="vertical-img" src={Baptism} alt="baptism"/>
            <p className="text-wrapper">
              Святое Крещение есть основа всей христианской жизни, врата жизни в Духе и дверь, открывающая доступ к другим таинствам. Крещением мы освобождаемся от греха и возрождаемся как сыны Божии, мы становимся членами Христа, воплощенными в Церковь, и участниками ее миссии. Это таинство называется Крещением, в связи с основным обрядом, посредством которого совершается таинство: «крестить» (по-гречески βαπτίξειν) означает «погрузить в воду», «опустить в воду».
            </p>
            <p className="text-wrapper">
              Если вы хотите крестить ребенка, просим вас обращаться к <b>о. Настоятелю</b>, который назначит ответственного священника за беседу для родителей и крёстных. После беседы назначается дата крещения.

              Телефонные номера для связи:  <a href="tel:+74992523911">+7(499)252-39-11</a>&nbsp;&nbsp;<a href="tel:+74002523911">+7(968) 651-34-30</a>.
            </p>

            <p className="text-wrapp">
              Подготовка Крещению проходит по субботам (за 2 недели до крещения).
            </p>
            <br/>
            <p >
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Что нужно для крещения ребенка:</b>
              <br/>
            </p>

            <ul className="text-wrapp">
              <li>обязательно нужно пройти подготовку для родителей и восприемников </li>
              <li>договориться о дне Крещения.</li>
              <li>желателен церковный брак (венчание) родителей и воцерковленные крестные родители.</li>
              <li>перед крещением родителям и крестным требуется приступить к исповеди и Причастию.</li>
              <li>для крещения нужны крещальная свеча и белая одежда (или платок) для ребенка ( все это можно найти в церковной лавке).</li>
              <li>в день крещения необходимо прийти за 15 минут до назначенного времени для заполнения церковных документов (церковной книги). При себе нужно иметь свидетельство о рождении ребенка и документы, удостоверяющие личность ребёнка, родителей и крестных.</li>
              <li>фотосъемка разрешается, при условии, что она не будет мешать проведению крещения.</li>
              <li>Таинство совершается за пожертвование в любом размере.</li>
              <li>Если крещение желает принять взрослый, необходимо сначала прослушать курс катехизации. При опасности смерти Крещение уделяется безусловно. Подробнее о курсах <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/catechesis'>
                катехизации...
              </NavLink></li>
            </ul>
          </section>

          <section className="text-section">
            <h2>Брак</h2>
            <img src={Marriage} alt="wedding" className='horisontal-img' />
            <p className='text-wrapper'>
              Брачный союз, посредством которого мужчина и женщина устанавливают между собой общность всей жизни, по самой природе своей направлен ко благу супругов и к порождению и воспитанию потомства; этот союз, если он заключается между крещеными, был возведен Господом Иисусом Христом в достоинство таинства.
            </p>

            <p className='text-wrapper'>
              Желающих вступить в церковный брак просим обращаться
              к <b>о. Владимиру</b> за три месяца до предполагаемой даты бракосочетания.
            </p>

            <p className='text-wrapper'>
              Занятия по подготовке проводятся:
              по средам в 20:00
              воскресеньям в 19:00
              в зале Марии Помощницы Христиан.
              <br/>
              <br/>
              Телефонный номер:&nbsp; &nbsp;<a href="tel:+74992523911">+7(499)252-39-11</a>
              <br/>
              <a href="mailto:catedra.moscow@gmail.com">catedra.moscow@gmail.com</a>
            </p>
          </section>

          <section className="text-section">
            <h2>Миропомазание</h2>
            <img src={Christmation} alt="christmation" className="horisontal-img-left"/>
            <p className="text-wrapper">
              Принятие этого таинства необходимо для довершения крещальной благодати. В таинстве Миропомазания крещеные получают особый дар Духа Святого. Так совершенствуется их связь с Церковью, они обогащаются силой Духа Святого и поэтому более четко обязаны распространять и защищать веру словом и делом, как истинные свидетели Христовы.
            </p>
            <br/>
            <p className="text-wrapper">
              Следующий набор в группы по подготовке детей к Миропомазанию и первому причастию пройдет в декабре.
              Миропомазание новокрещеных взрослых совершает епископ после Крещения.
            </p>
          </section>

          <section className="text-section">
            <h2>Елеопомазание&nbsp;(Помазание больных)</h2>
            <img src={Anointing} alt="christmation" className="horisontal-img"/>
            <p className="text-wrapper">
              Через священное Елеопомазание и молитву пресвитеров вся Церковь препоручает болящих Господу, страждущему и прославленному, чтобы Он облегчил их немощи и спас их; более того, она напутствует их, чтобы через свободное приобщение к Страстям и смерти Христа, они содействовали благу народа Божия.
            </p>

            <p className="text-wrapper">
              Для информации по получению этого Таинства обращайтесь к дежурному священнику в ризницу &nbsp; <a href="tel:+74992523911">+7(499)252-39-11</a>
            </p>
          </section>

          <section className="text-section">
            <h2>Примирение &nbsp;(Исповедь)</h2>
            <img src={Confession} alt="christmation" className="vertical-img"/>
            <p className="text-wrapper">
              Христос установил таинство Примирения для всех грешников - членов Его Церкви, и прежде всего для тех, кто после Крещения впал в грех и таким образом потерял благодать Крещения и повредил церковное общение. Таинство Примирения дает им возможность обратиться, получить прощение грехов и снова обрести благодать оправдания.
            </p>
            <br/>
            <p className="text-wrapper">
              Возможность исповедоваться есть на каждой Святой Мессе. Если Вы нуждаетесь в исповеди в иное время — обратитесь к дежурному священнику в ризнице храма.
            </p>
          </section>

          <br/>
          <section className="text-section">
            <h2>Евхаристия</h2>
            <img src={Eucharist} alt="christmation" className="vertical-img-right"/>
            <p className="text-wrapper">
              Евхаристия - источник и вершина всей христианской жизни. В самом сердце совершения Евхаристии находятся хлеб и вино, которые через слова Христа и через призывание Духа Святого становятся Телом и Кровью Христа. Верная повелению Господа, Церковь продолжает в память о Нем, до Его возвращения во славе, совершать то, что Он совершил накануне Страстей на Тайной вечери.
            </p>
            <br/>
            <p className="text-wrapper">
              Евхаристия совершается на каждой Святой Мессе. Приступать к этому Таинству могут только крещеные католики, недавно бывшие у исповеди и не имеющие на совести тяжкого греха.
            </p>
          </section>

          <section className="text-section">
            <h2>Священство</h2>
            <img src={Priesthood} alt="christmation" className="vertical-img"/>
            <p className="text-wrapper">
              Катехизис Католической Церкви
            </p>
            <p className="text-wrapper">
              <b>1536</b>  Священство есть таинство, благодаря которому миссия, доверенная Христом апостолам, продолжает осуществляться в Церкви до скончания века: оно, таким образом, есть таинство апостольского служения. Апостольское служение имеет три уровня: епископский, пресвитерский и диаконский.
            </p>
            <p className="text-wrapper">
              <b>1534</b>  Таинство Священства - направлено на спасение других. Через служение другим они способствуют также и личному спасению. В лоне Церкви оно даёт особую миссию и служит созиданию Народа Божия.
            </p>

            <p className="text-wrapper">
              <b>1535</b>  Этим таинством те, кто уже был посвящен Крещением и Миропомазанием на общее священство всех верных, могут получить особые посвящения. Принимающие таинство Священства посвящаются, чтобы во имя Христа "словом и благодатью Божией пасти Церковь".
            </p>

            <p className="text-wrapper">
              Желающий посвятиться такому служению должен связаться со своим Настоятелем чтобы обсудить смысл такова выбора и узнать как поступать дальше.
            </p>
            <p className="back-forvard-links">
              <NavLink exact activeClassName='active' to='/parish'>
                -- Приход &nbsp; &nbsp;
              </NavLink>

              <NavLink exact activeClassName='active' to='/catechesis'>
                 Катехизация --
              </NavLink>
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default Sacramentum;
