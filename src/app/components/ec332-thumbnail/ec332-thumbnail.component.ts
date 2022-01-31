import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PagesName } from 'src/app/common/pages-name.enum';
import { ThumbnailData } from 'src/app/common/thumbnail-data';
import { HttpCallerService } from 'src/app/services/http-caller.service';
import * as _ from 'lodash';
import { TagReadingService } from 'src/app/services/tag-reading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ec332-thumbnail',
  templateUrl: './ec332-thumbnail.component.html',
  styleUrls: ['./ec332-thumbnail.component.css']
})
export class Ec332ThumbnailComponent implements OnInit, AfterViewInit {

  @Input() address = '';
  @ViewChild('anlgcfContainer', { static: false }) anlgcfContainer2: ElementRef;

  private idSet: string = undefined;
  private anlgcfContainer: HTMLElement = undefined;
  private dataBackup: ThumbnailData = undefined;

  private temperatureSetCode: string = 'ncian23';//TODO: to find
  private fanCode: string = 'ncian23';
  private coolingCode: string = 'ncian23';//
  private defrostingCode: string = 'ncian23';//
  private alarmCode: string = 'ncian20';

  dataForm: FormGroup = undefined;
  public get enableSave(): boolean {
    const thisSame = this.dataBackup?.temperatureSet !== this.dataForm.controls['temperatureSet'].value
      || this.dataBackup?.fan !== this.dataForm.controls['fan'].value
      || this.dataBackup?.cooling !== this.dataForm.controls['cooling'].value
      || this.dataBackup?.defrosting !== this.dataForm.controls['defrosting'].value
      || this.dataBackup?.alarm !== this.dataForm.controls['alarm'].value
      ;
    return !thisSame;
  }

  constructor(private httpCaller: HttpCallerService,
    private tagReader: TagReadingService) {
    this.dataForm = new FormGroup({
      temperatureSet: new FormControl(0),
      fan: new FormControl(false),
      cooling: new FormControl(false),
      defrosting: new FormControl(false),
      alarm: new FormControl(false),
    });
  }

  ngAfterViewInit(): void {
    this.anlgcfContainer = document.getElementById('anlgcfContainer');
    this.refreshCOmponentData();
  }

  ngOnInit(): void {
  }

  refreshCOmponentData(): void {
    const containerDiv = this.anlgcfContainer2.nativeElement as HTMLDivElement;
    this.idSet = `x_${this.address.replace(/\./g, '_')}`;
    containerDiv.id = this.idSet;

    this.httpCaller.loadPage(this.address, PagesName.anlgcf).subscribe(body => {
      containerDiv.innerHTML = body;
      this.check();
    });
  }

  check(): void {

    //fan ncian23
    const fan = this.tagReader.getTagValue(this.idSet, this.fanCode);

    //alarm
    const alarm = this.tagReader.getTagValue(this.idSet, this.alarmCode);

    //alarm
    const alarmx = this.tagReader.getTagValue(this.idSet, 'ncian20');

    this.dataBackup = {
      temperatureSet: 0.2,
      fan: this.toBoolean(fan),
      cooling: false,
      defrosting: true,
      alarm: this.toBoolean(alarm)
    }

    this.dataForm.controls['temperatureSet'].setValue(this.dataBackup.temperatureSet);
    this.dataForm.controls['fan'].setValue(this.dataBackup.fan);
    this.dataForm.controls['cooling'].setValue(this.dataBackup.cooling);
    this.dataForm.controls['defrosting'].setValue(this.dataBackup.defrosting);
    this.dataForm.controls['alarm'].setValue(this.dataBackup.alarm);
  }

  onFormSubmit(): void {
    var changes = this.listChangedProperties();
    this.httpCaller.postChange(this.address, PagesName.anlgcf, changes);
  }

  private toBoolean(value: any): boolean {
    switch (value) {
      case "1":
        return true;
      case "0":
        return false;
      default:
        return undefined;
    }
  }

  private listChangedProperties(): [string, any][] {
    const changed: [string, any][] = [];

    if (this.dataForm.controls['temperatureSet'].value !== this.dataBackup.temperatureSet) {
      changed.push([this.temperatureSetCode, this.dataForm.controls['temperatureSet'].value]);
    }
    if (this.dataForm.controls['fan'].value !== this.dataBackup.fan) {
      changed.push([this.fanCode, this.dataForm.controls['fan'].value]);
    }
    if (this.dataForm.controls['cooling'].value !== this.dataBackup.cooling) {
      changed.push([this.coolingCode, this.dataForm.controls['cooling'].value]);
    }
    if (this.dataForm.controls['defrosting'].value !== this.dataBackup.defrosting) {
      changed.push([this.defrostingCode, this.dataForm.controls['defrosting'].value]);
    }
    if (this.dataForm.controls['alarm'].value !== this.dataBackup.alarm) {
      changed.push([this.alarmCode, this.dataForm.controls['alarm'].value]);
    }

    return changed;
  }
}
