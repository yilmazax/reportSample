import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReportSampleSharedLibsModule, ReportSampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ReportSampleSharedLibsModule, ReportSampleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ReportSampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportSampleSharedModule {
  static forRoot() {
    return {
      ngModule: ReportSampleSharedModule
    };
  }
}
