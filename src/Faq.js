import React from 'react'
import { Observable } from 'rxjs';
import db from './db.json';


export default function Faq(){
  let questions = [];
  const subscribe = (subscriber) => {
    
    for (let q of db) {
        subscriber.next(q);
    }
}

let questions$ = new Observable(subscribe);
questions$.subscribe(q => questions.push(q));
  
console.log(questions)
    return(
        <div>
            <h1>Frequently asked questions</h1>
            <div>
            {questions.map((e, index) => {
              return(
                <div>
                  <h3>{index+1}. {e.question}</h3>
                  <h6>{e.answer}</h6>
                </div>
              )
            })}
            </div>
        </div>
    )
}