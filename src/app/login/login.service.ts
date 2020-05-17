import { Injectable } from '@angular/core';
import { IUserType } from './model';

@Injectable({providedIn: 'platform'})
export class LoginService {

    public fetchUserType(): IUserType[] {
        const list: IUserType[] = [];
        list.push({id: null, name: ''});
        list.push({id: 1, name: 'Admin'});
        list.push({id: 2, name: 'User'});
        return list;
    }
}
