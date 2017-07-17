import React from 'react';
import Organ from '../images/enlightenment/organ-2.jpg';

class Enlightenment extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="ordinary-page">
        <h1>Культура и образование</h1>

        <section className="text-section">
          <h2>Музыка</h2>
          <p className="text-wrapper">
            <b>Литургическая музыка.</b> При соборе действует литургический приходской хор (занятия проходят по средам в 19.00 в хоровом классе в цокольном этаже), а также молодежная вокально-инструментальная группа.
            Приглашаем всех желающих.
          </p>

          <div className="image-wrapper">
            <img className="img" src={Organ} alt="Organ"/>
            <span className="sign"><i>Haarlem cathedral organ by muller. 1738 г.</i></span>
          </div>

          <p className="text-wrapper">
            <b>Концерты духовной музыки.</b> Дорогие прихожане!
            При соборе действует литургический приходской хор (занятия проходят по средам в 19.00 в хоровом классе в цокольном этаже), а также молодежная вокально-инструментальная группа.
            Приглашаем всех желающих.
            <br/>
            <br/>
            Мы часто слышим и размышляем над тем, что мы - христиане, мы - католики, мы – прихожане, мы  дети  Бога-Отца, мы являемся одной семьей. Все это значит, что мы ответственны за свое личное спасение и спасение людей, которых Бог поставил на нашем жизненном пути.
            <br/>
            <br/>
            Еще в  1999 году, во время освящения нашего собора,  архиепископ  Тадеуш  Кондрусевич сказал: «Этот храм станет  домом  молитвы,  и местом, где будет звучать прекрасная музыка для всех людей, ищущих Бога». И с тех пор здесь  проходят концерты духовной музыки, которые дали возможность очень многим людям узнать из официальных источников  о существовании нашего храма  в нашем  огромном городе. Даже  для многих из вас, концерты духовной музыки были тем  импульсом, который пробудил в сердце тоску по Богу, по  настоящей жизни во Христе. Кроме того, концерты приносят существенную и основную финансовую поддержку, направленную на поддержание жизнедеятельности нашего храма. Вместе со священниками мы должны заботиться о нашем прекрасном храме, куда мы приходим  каждое воскресенье.
            <br/>
            <br/>
            Концерты духовной музыки - это  прекрасная возможность  пригласить  ваших друзей, знакомых, сослуживцев посетить  наш собор. Пусть это станет вашей заботой,   чтобы храм наполнялся  новыми  людьми, которых Господь ждет в Святых Дарах. На протяжении более 10 лет, концерты духовной музыки, совместно с приходом  организует фонд  «Искусство добра», который возглавляет с. Валентина.  В фонде работает команда профессионалов, которые составляют программы духовной музыки, приглашают известных исполнителей, ведут образовательную и благотворительную работу, осуществляют   духовно-просветительскую миссию.
            <br/>
            <br/>
            Вы имеете возможность включиться в эту просветительскую, апостольскую миссию, приняв участие в распространении информации о нашем соборе, о нашем органе, о наших концертах. Вы можете получить информацию, материалы, узнать в каких проектах фонда вы можете поучаствовать.
            <br/>
            <br/>
            С вопросами и предложениями можно обращаться в офис фонда "Искусство добра" в Соборе. Из притвора - направо по лестнице на второй этаж.
            <br/>
            <br/>
            <b><a href="https://artbene.ru/">Афиша концертов</a></b>
          </p>
        </section>

        <section className="text-section">
          <h2>Образование</h2>
          <span><b>Английский язык с носителем!</b><br/></span>
          <span>Открыт набор в группу занятий английским языком с носителем<br/>
          Набираются дети от 3-х лет. </span>
            <br/>
            <ul>
              <li>Игровая форма</li>
              <li>Непринужденная атмосфера</li>
              <li>Естественный путь освоения языка</li>
              <li>Профессиональный преподаватель с опытом работы с детьми от 3-х лет</li>
            </ul>

            Контакты: <br/>
            Мария Логинова <br/>

            <a href="tel:+79296267880">+7(929)626-78-80</a><br/>
            <a href="mailto:">maria.loginova@mail.ru</a>
        </section>

        <section className="text-section">
          <h2>Экскурсии</h2>
          <p><b>Бесплатные </b>экскурсии по кафедральному собору проводятся по предварительной записи по вторникам, средам и пятницам во время, свободное от богослужений. Организацию экскурсий осуществляет фонд <a href="http://deboniarte.org/">Искусство добра</a>.
          </p>

          <p>
            Посещение собора посторонними экскурсионными группами также осуществляется только по предварительному согласованию.
          </p>

          Контакты: <br/>
          с. Наталия Кабишева <br/>

          <a href="tel:+74992524051">+7(499)252-40-51</a><br/>
          <a href="mailto:">angelus@deboniarte.org</a>
        </section>
      </div>
    )
  }
}

export default Enlightenment;
