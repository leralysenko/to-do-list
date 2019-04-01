import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectManagerService } from 'src/app/services/project-manager.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router : Router,
    private projectManagerSrvc: ProjectManagerService
  ) { }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.projectManagerSrvc.isLoggedIn()) return true;
    // else navigate to login
  }
}
