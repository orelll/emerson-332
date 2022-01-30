import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PagesName } from 'src/app/common/pages-name.enum';
import { ThumbnailData } from 'src/app/common/thumbnail-data';
import { HttpCallerService } from 'src/app/services/http-caller.service';
import * as _ from 'lodash';
import { TagReadingService } from 'src/app/services/tag-reading.service';
import { element } from 'protractor';

@Component({
  selector: 'app-ec332-thumbnail',
  templateUrl: './ec332-thumbnail.component.html',
  styleUrls: ['./ec332-thumbnail.component.css']
})
export class Ec332ThumbnailComponent implements OnInit, AfterViewInit {

  @Input() address = '';
  @ViewChild('anlgcfContainer', {static:false}) anlgcfContainer2 : ElementRef;

  private anlgcfContainer: HTMLElement = undefined;
  private dataBackup: ThumbnailData = undefined;
  private currentData: ThumbnailData = undefined;

  constructor(private httpCaller: HttpCallerService,
    private tagReader:TagReadingService) {

  }

  ngAfterViewInit(): void {
    this.anlgcfContainer = document.getElementById('anlgcfContainer');
    this.refreshCOmponentData();

  }

  ngOnInit(): void {
  }

  refreshCOmponentData(): void {
    this.httpCaller.loadPage(this.address, PagesName.anlgcf).subscribe(body => {
      const containerDiv = this.anlgcfContainer2.nativeElement as HTMLDivElement;
      containerDiv.innerHTML = body;
      containerDiv.find
      this.check();
    });
  }

  check(): void {

    //fan ncian23
    const fan = this.tagReader.getTagValue('ncian23');

    //alarm
    const alarm = this.tagReader.getTagValue('ncian20');

    //alarm
    const alsarm = this.tagReader.getTagValue('ncian20');

    this.dataBackup = {
      temperatureSet: 0.2,
      fan: this.toBoolean(fan),
      cooling: false,
      defrosting: true,
      alarm: this.toBoolean(alarm)
    }

    this.currentData = _.cloneDeep(this.dataBackup);
  }

  private toBoolean(value: any): boolean{
    switch(value){
      case "1":
        return true;
      case "0":
          return false;
      default:
        return undefined;
    }
  }
}
