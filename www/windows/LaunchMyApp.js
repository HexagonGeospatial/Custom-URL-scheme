 (function() {
     function activatedHandler(e) {
         if (typeof window.handleOpenURL == 'function' && e.detail.uri) {
             window.handleOpenURL(e.detail.uri.rawUri);
         } else if (e.detail.uri) {
             window.customUrl = e.detail.uri.rawUri;
         }
     };

     WinJS.Application.addEventListener("activated", activatedHandler, false);
 }());
