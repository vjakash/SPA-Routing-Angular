import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
arr=[{
    title:"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",
    abstract:"Labore irure irure laborum quis tempor aliqua. Dude",
    date:"February 19, 2020",
    content:[{
      title:"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",
      abstract:"Labore irure irure laborum quis tempor aliqua."
    },{
      title:"Occaecat tempor sint cillum quis sit magna sit incididunt in ut labore eiusmod veniam non.",
      abstract:"Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat."
    }]
  },{
    title:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",
    abstract:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",
    date:"February 17, 2020",
    content:[{
      title:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",
      abstract:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit."
    },{
      title:"Incididunt cillum do dolor occaecat.",
      abstract:"Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla."
    }]
  },{
    title:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",
    abstract:"Adipisicing sit minim occaecat nulla proident exercitation do laboris.",
    date:"February 15, 2020",
    content:[{
      title:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",
      abstract:"Adipisicing sit minim occaecat nulla proident exercitation do laboris."
    },{
      title:"Mollit magna sunt ipsum eiusmod magna non officia officia id nostrud cillum.",
      abstract:"Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis."
    }]
  }]
  index;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.index=this.activeRoute.snapshot.params.id;
  }

}
