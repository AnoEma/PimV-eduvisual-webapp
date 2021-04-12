import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Authentication} from '../../core/services/model/Authentication.model';
import {LoaderSevice} from '../../core/loader/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{

  user: Authentication = new Authentication();
  loginForm: FormGroup;
  public show:boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loaderService: LoaderSevice
  ) {
     this.createForm();
    }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if ((<any>this.route.queryParams).value.logout) {
      this.router.navigate([`login`]);
    }

  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit(){
    this.show = true;
    const formUser = this.loginForm.getRawValue();
    this.user = new Authentication(formUser.email, formUser.password);
  }

}