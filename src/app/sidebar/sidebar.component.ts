import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  sidebarVisible : boolean=true;
  closeCallback(e:any): void {
    const currentWidth = this.sidebarRef.getWidth();
    const targetWidth = 300;
    if(currentWidth<= targetWidth){
      this.sidebarRef.close(e);
    }
  }

}
