import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleMenu(){
        this.isOpen = !this.isOpen
    }
}