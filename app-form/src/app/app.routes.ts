import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RigisterComponent } from './rigister/rigister.component';

export const routes: Routes = [
        {
        path : '' , 
        component : LoginComponent
    } ,
        {
        path : 'rigister' , 
        component : RigisterComponent
    } ,
];
