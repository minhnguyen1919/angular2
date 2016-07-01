import { Injectable } from '@angular/core'

@Injectable()

export class UUIDService {
   private length = 8;
   private timestamp = +new Date;

   private _getRandomInt = function( min: number, max: number ) {
     return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
   }

   generate = function() {
     var ts = this.timestamp.toString();
     var parts = ts.split( "" ).reverse();
     var id = "";

     for( var i = 0; i < this.length; ++i ) {
      var index = this._getRandomInt( 0, parts.length - 1 );
      id += parts[index];
     }

     return id;
   }


}
