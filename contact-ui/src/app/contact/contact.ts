import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Contact {
  private apiUrl = 'https://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact):Observable<String>{
    return this.httpClient.post(this.apiUrl+'/contact', contact, {responseType: 'text'});
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.apiUrl+'/contacts');
  }

  findContactById(contactId:number):Observable<Contact>{
    return this.httpClient.get<Contact>(this.apiUrl+'/contact/'+contactId);
  }

}
