import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router :Router ) { }

  items: MenuItem[];

  logout() : void{
    console.log("Logout");
    this.router.navigate(["login"]);
  }

  ngOnInit() {
      this.items = [
          {
              label: 'Process Portal', icon: 'fa fa-fw fa-check',
              items: [
                  [
                      {
                          label: 'BCD',
                          items: [{label: 'Add BCD', routerLink: './add-bcd' },{label: 'BCD List', routerLink: './bcd-list'}]
                      },
                      {
                          label: 'CTT',
                          items: [{label: 'Add CTT', routerLink: 'Page1'},{label: 'CTT List', routerLink: 'Page1'}]
                      }
                  ]
              ]
          },
          {
              label: 'Global Admin', icon: 'fa fa-fw fa-soccer-ball-o',
              items: [
                  [
                      {
                          label: 'Workflow Definition',
                          items: [{label: 'Add Workflow', routerLink: 'Page1'},{label: 'Workflow List', routerLink: 'Page1'}]
                      },
                      {
                          label: 'Person',
                          items: [{label: 'Add Person', routerLink: 'Page1'},{label: 'Person List', routerLink: 'Page1'}]
                      },

                  ],
                  [
                      {
                          label: 'Cost Center',
                          items: [{label: 'Add Cost Center', routerLink: 'Page1'},{label: 'Cost Centers', routerLink: 'Page1'}]
                      },
                      {
                          label: 'Upload',
                          items: [{label: 'Upload Cost Centres', routerLink: 'Page1'},{label: 'Upload Documents', routerLink: 'Page1'}]
                      }
                  ]
              ]
          },
          {
              label: 'System Admin', icon: 'fa fa-fw fa-soccer-ball-o',
              items: [
                  [
                      {
                          label: 'Workflow Definition',
                          items: [{label: 'Add Workflow', routerLink: 'Page1'},{label: 'Workflow List', routerLink: 'Page1'}]
                      },
                      {
                          label: 'Person',
                          items: [{label: 'Add Person', routerLink: 'Page1'},{label: 'Person List', routerLink: 'Page1'}]
                      },

                  ],
                  [
                      {
                          label: 'Cost Center',
                          items: [{label: 'Add Cost Center', routerLink: 'Page1'},{label: 'Cost Centers', routerLink: 'Page1'}]
                      },
                      {
                          label: 'Upload',
                          items: [{label: 'Upload Cost Centres', routerLink: 'Page1'},{label: 'Upload Documents', routerLink: 'Page1'}]
                      }
                  ]
              ]
          }
      ];
  }

}
