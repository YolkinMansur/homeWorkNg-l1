import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  title:string = 'Bill Gates quote'
  quote:string = 'If you think your teacher is tough, wait till you get a boss'
  quote1:string = 'Life is not fair — get used to it!'
  quote2:string = 'Success is a lousy teacher. It seduces smart people into\n' +
    ' thinking they can’t lose'
  quote3:string = 'Be nice to nerds. Chances are you’ll end up working for one'

  biography:string = 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.'

  imgUrl:string = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg?uselang=ru'

  ssilka:string = 'https://en.wikipedia.org/wiki/Bill_Gates'
  ssilkaRu:string = 'https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%B9%D1%82%D1%81,_%D0%91%D0%B8%D0%BB%D0%BB'

  russian:string = 'Russian'
  english:string = 'English'
  ngOnInit() {

  }

  changeQuote() {
    this.title = 'Цитаты Билла Гейтса'
    this.quote = '\n' +
      'Если вы считаете своего учителя крутым, подождите, пока у вас не появится босс'
    this.quote1 = 'Жизнь несправедлива — привыкай!'
    this.quote2 = '\n' +
      'Успех — плохой учитель. Он соблазняет умных людей, заставляя их думать, что они не могут проиграть.'
  this.quote3 = 'Будьте добры к ботаникам. Скорее всего, вы в конечном итоге будете работать на одного из них'

  }
  changeBack(){
    this.title = 'Bill Gates quote'
    this.quote = 'If you think your teacher is tough, wait till you get a boss'
    this.quote1 = 'Life is not fair — get used to it!'
    this.quote2 ='Success is a lousy teacher. It seduces smart people into'
    this.quote3 ='Be nice to nerds. Chances are you’ll end up working for one'

  }
  changeBio(){
    this.imgUrl ='https://i.pinimg.com/originals/63/af/c0/63afc01f1e3874d62a477a4a9079766a.jpg'
    this.biography ='Уильям Генри Гейтс III (родился 28 октября 1955 г.) - американский бизнес-магнат, разработчик программного обеспечения, инвестор, писатель и филантроп. Он является соучредителем Microsoft вместе со своим покойным другом детства Полом Алленом. За время своей карьеры в Microsoft Гейтс занимал должности председателя, главного исполнительного директора (CEO), президента и главного архитектора программного обеспечения, а также был крупнейшим индивидуальным акционером до мая 2014 года. Он был крупным предпринимателем микрокомпьютерной революции 1970-х и 1980-х годов.'
  }
  changeBiography(){
    this.imgUrl ='https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg?uselang=ru'
  this.biography = 'William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s.'

  }

}
