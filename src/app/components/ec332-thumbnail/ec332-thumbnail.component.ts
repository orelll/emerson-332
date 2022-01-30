import { AfterContentChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PagesName } from 'src/app/pages-name.enum';
import { HttpCallerService } from 'src/app/services/http-caller.service';

@Component({
  selector: 'app-ec332-thumbnail',
  templateUrl: './ec332-thumbnail.component.html',
  styleUrls: ['./ec332-thumbnail.component.css']
})
export class Ec332ThumbnailComponent implements OnInit, AfterViewInit {

  @Input() address = '';

  private dataContainer: HTMLElement = undefined;

  constructor(private httpCaller: HttpCallerService) {

  }
  ngAfterViewInit(): void {
    this.dataContainer = document.getElementById('hujsko');
    this.refreshCOmponentData();
  }

  ngOnInit(): void {
  }

refreshCOmponentData():void{
  this.httpCaller.loadPage(this.address, PagesName.tcp_ip).subscribe(body => {
    this.dataContainer.innerHTML = body;
    this.check();
});
}

  check():void{
    var doc = document.getElementsByName('ncitc03');
    var tag = doc[0] as HTMLInputElement;
    var tagValue = tag.value;
  }
}
