import { Component, ComponentRef, Inject, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { TOTS_TABLE_DEFAULT_CONFIG, TotsTableDefaultConfig } from '../../entities/tots-table-default-config';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'tots-loading-animation-renderer',
  templateUrl: './loading-animation-renderer.component.html',
  styleUrls: ['./loading-animation-renderer.component.scss']
})
export class LoadingAnimationRendererComponent implements OnDestroy {

	@ViewChild('loadingComponentContainer', { read: ViewContainerRef }) loadingComponentContainer! : ViewContainerRef;
  loadingComponent! : ComponentRef<any>;

  //#region Setup
  constructor(
    @Inject(TOTS_TABLE_DEFAULT_CONFIG) private totsTableDefaultConfig : TotsTableDefaultConfig,
		private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.setLoader();
  }
  ngOnDestroy() {
    this.loadingComponentContainer?.clear();
  }

  private setLoader() {
    if (this.totsTableDefaultConfig.loadingComponent) {
      this.loadingComponent = this.viewContainerRef.createComponent(this.totsTableDefaultConfig.loadingComponent);
    } else {
      this.loadingComponent = this.viewContainerRef.createComponent(MatProgressSpinner);
      this.loadingComponent.instance.diameter = 50;
      this.loadingComponent.instance.mode = "indeterminate";
      this.loadingComponent.instance.color = this.totsTableDefaultConfig.matColor;
    }
  }
  //#endregion
}