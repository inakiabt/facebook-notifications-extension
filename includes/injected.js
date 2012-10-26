// ==UserScript==
// @name          Facebook Notifications
// @namespace     http://www.facebook.com/
// @include       http://facebook.*/*
// @include       http://*.facebook.*/*
// @include       https://facebook.*/*
// @include       https://*.facebook.*/*
// ==/UserScript==


opera.extension.onmessage = function(event) {
        var message = event.data;
        // Check this is the correct message and path from the background script.
        if (message.topic == 'FBIconUpdate' & (widget.preferences.faviconUse == "1")) {
			var nb = message.data;
		} else { var nb = 0;}
			switch (parseInt(nb))
    {
      case 0:
        favicon.change(icons[0]);
      break;
      case 1:
        favicon.change(icons[1]);
      break;
      case 2:
        favicon.change(icons[2]);
      break;
      case 3:
        favicon.change(icons[3]);
      break;
      case 4:
        favicon.change(icons[4]);
      break;
      case 5:
        favicon.change(icons[5]);
      break;
      case 6:
        favicon.change(icons[6]);
      break;
      case 7:
        favicon.change(icons[7]);
      break;
      case 8:
        favicon.change(icons[8]);
      break;
      case 9:
        favicon.change(icons[9]);
      break;
      default:
        favicon.change(icons[10]);
      break;
    }
    }


var icons = new Array();
icons[0]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJtJREFUeNpi/P//PwMlgAVE2ETNPAOkjEnUe/bIsnQTJijHmAzLjeEuIARU5YUZuss8GUQEuRmgLobLMRFjALJmrGFACGCzmSQXEIwFXAAYylj5yC7Ba8Cb919RvADjE+2CgOwlKDbD+FQNA+oEIhcnG4OGkhhBxUbaMnD2jXuvqOiCb99/nT139QnO/IAtAYEyE4hgpDQ7AwQYAGOPLJSIeY5SAAAAAElFTkSuQmCC";
icons[1]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAATklEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIqIM+A8F2CzBawBMI9kGwGwcNcANHpYkxwJ9A3Gea8D/LbllJGGQHnhCotgAijMTJTkaABipy6zUiFYvAAAAAElFTkSuQmCC";
icons[2]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAYUlEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIrwG/EcD2CzBaQBML0wTOh8mTrQXBtYAXLaDvEHQC/g0EzSAkGa8BhCjmSgDCKUFeBjMcw34vyW3jCQM0kM9AyjOTJTkaAAcsNcEx4JYYgAAAABJRU5ErkJggg==";
icons[3]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAWUlEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIrwG/EcD2CzBaQBML0wTOh8mTrQXBs4A5GAgKQzQFdPfC1SJBZLSwTzXgP9bcstIwiA98HRAsQEUZyZKcjQAwc7Y6I3H2FkAAAAASUVORK5CYII=";
icons[4]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAYElEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIqIM+A8F2CwhaABMM4imvwHItpPlAooMQA44sgIR3XZchhCMBVDIk+UC5CgjyoB5rgH/t+SWkYRBeuBeoNgAijMTJTkaAODF3pQaM8yxAAAAAElFTkSuQmCC";
icons[5]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAXElEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIpwG/McB0C0iaAAhl9HeAGSfYHMN0S6AGUR0GKArpL8B6DaS5QL0pIA3EOe5BvzfkltGEgbpgccCxQZQnJkoydEAFXbgeLZambwAAAAASUVORK5CYII=";
icons[6]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAW0lEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIrwG/EcD2CzBaQBML0wTOh8mTrQBuLxIewOQg2Fgw4DiQCTZAJB/SUoH81wD/m/JLSMJg/TAo5FiAyjOTJTkaAA0u+RAKJxHfwAAAABJRU5ErkJggg==";
icons[7]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAWUlEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIpwG/McB0C0i2gUw88gyAJdmkGFEuYAiA/BpJsoFFBlASDNBF9DXgHmuAf+35JaRhEF64NFIsQEUZyZKcjQAepjPdB+Gc/MAAAAASUVORK5CYII=";
icons[8]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAATklEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIrwG/EcD2CzBaQBML0wTOh8mPogNADlxNAxIDIN5rgH/t+SWkYRBeuDpgGIDKM5MlORoAAci6ez//C0/AAAAAElFTkSuQmCC";
icons[9]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAX0lEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIrwG/EcD2CzBaQBML0wTOh8mPogNADkRG0APB6JjgeQwQLeJZAMojgVsYYA3HcxzDfi/JbeMJAzSAw9Eig2gODNRkqMBWObkQJWBd1YAAAAASUVORK5CYII=";
icons[10]="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAAaUlEQVQ4T2NgoAaYYe12Boj/k4jPwO0mUSPcIgwD/qMBQgajGADTC9OEzsdmGP0NQHcVwTAAaUB2OkEDcClGD1wYH280YgtEvC4gJhYIeoHsdDDPNeD/ltwykjBIDzwMKDaA4sxESY4GABFm/riaorzUAAAAAElFTkSuQmCC";

var favicon = {

change: function(iconURL) {
  if (arguments.length==2) {
    document.title = optionalDocTitle;
  }
  this.addLink(iconURL, "icon");
  this.addLink(iconURL, "shortcut icon");
},

addLink: function(iconURL, relValue) {
  var link = document.createElement("link");
  link.type = "image/x-icon";
  link.rel = relValue;
  link.href = iconURL;
  this.removeLinkIfExists(relValue);
  this.docHead.appendChild(link);
},

removeLinkIfExists: function(relValue) {
  var links = this.docHead.getElementsByTagName("link");
  for (var i=0; i<links.length; i++) {
    var link = links[i];
    if (link.type=="image/x-icon" && link.rel==relValue) {
      this.docHead.removeChild(link);
      return; // Assuming only one match at most.
    }
  }
},

docHead:document.getElementsByTagName("head")[0]
}

