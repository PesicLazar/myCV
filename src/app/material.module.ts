import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar'; //think i dont need
import {MatButtonModule} from '@angular/material/button'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatCardModule} from '@angular/material/card';  
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule ,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule
    ],
})

export class MaterialModule{}