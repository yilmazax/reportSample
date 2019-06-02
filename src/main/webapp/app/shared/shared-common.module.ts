import { NgModule } from '@angular/core';

import { ReportSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ReportSampleSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ReportSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ReportSampleSharedCommonModule {}
