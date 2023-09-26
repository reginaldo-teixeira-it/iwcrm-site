import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToolsListComponent } from './tools-list/tools-list.component';

@NgModule({
    imports: [
        CommonModule,
        ToolsRoutingModule,
        SharedModule
    ],
    declarations: [
      ToolsListComponent
    ]
})
export class ToolsModule { }
