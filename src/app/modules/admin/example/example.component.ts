import { Component, ViewEncapsulation } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
    selector     : 'example',
    standalone   : true,
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
