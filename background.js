var fbURL = "http://www.facebook.com/";
      var facebook = "http://www.facebook.com/terms.php"; //used instead of home page to avoid awkward ajax
      var requestTimeout = 1000 * 10;  // 10 seconds
      var notificationCount;
	  var xhr;
	  var failCount = 2;
	  var wTimeout;
      var notificationText = "";
      var notificationCountChanged = false;

	  var theButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Facebook',
					icon: 'images/icon_18x18.png',
					badge: {
						textContent: '...',
						backgroundColor: '#BEBEBE',
						color: 'white',
						display: 'block'
						},
					onclick: function(){opera.extension.tabs.create({url:"http://www.facebook.com"});},
				}
			theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			if (widget.preferences.buttonUse != "0")
		{opera.contexts.toolbar.addItem(theButton);}
			window.setTimeout(startRequest, 0);

      function scheduleRequest() {
		if (widget.preferences.buttonUse == "0")
		{
			if (opera.contexts.toolbar.length == 1) {opera.contexts.toolbar.removeItem(theButton);}
		} else {
			if (opera.contexts.toolbar.length == 0) {opera.contexts.toolbar.addItem(theButton);}
		}
	  	if (wTimeout) {
		window.clearInterval(wTimeout);
	}
	wTimeout = window.setTimeout(startRequest, 1000 * widget.preferences.updateNb);
      }

      function startRequest() {
        getNotificationCount(
          function(count) {
            updateNotificationCount(count);
            scheduleRequest();
          },
          function() {
            scheduleRequest();
          }
        );
      }

      var frame = null;

	 function getNotificationCount(onSuccess, onError) {
	    if(xhr != null) {
			xhr.onreadystatechange = null;
			xhr = null;
        }
        xhr = new XMLHttpRequest();
        var abortTimerId = window.setTimeout(function() {
          xhr.abort();
          onError();
        }, requestTimeout);

        function handleSuccess(count) {
          window.clearTimeout(abortTimerId);
          onSuccess(count);
        }

        function handleError() {
		  failCount = failCount + 1;
		  if (failCount > 2) {
			  theButton.badge.textContent = "X";
			  window.clearTimeout(abortTimerId);
			  failCount = 0;
		  }
		  onError();
        }

        try
        {
          xhr.onreadystatechange = function()
          {
            if (xhr.readyState == 4)
            {
              var notification_start = xhr.responseText.indexOf('<span id="notificationsCountValue">');
              //window.opera.postError("ResponseText position is " + notification_start)
              if(notification_start > 0)
              {
                var notification_end = xhr.responseText.indexOf('</span>', notification_start);
                var notifications = xhr.responseText.substring(notification_start,notification_end);

                var count = getdigits(notifications);
                if(count == "")
                  count = 0;
		var countnum = parseInt(count);
              }

	      var notification_start = xhr.responseText.indexOf('<span id="messagesCountValue">');
              //window.opera.postError("ResponseText position is " + notification_start)
              if(notification_start > 0)
              {
                notification_end = xhr.responseText.indexOf('</span>', notification_start);
                notifications = xhr.responseText.substring(notification_start,notification_end);

                count = getdigits(notifications);
                if(count == "")
                  count = 0;
		var countnum = countnum + parseInt(count);
              }

	      var notification_start = xhr.responseText.indexOf('<span id="requestsCountValue">');
              //window.opera.postError("ResponseText position is " + notification_start)
              if(notification_start > 0)
              {
                notification_end = xhr.responseText.indexOf('</span>', notification_start);
                notifications = xhr.responseText.substring(notification_start,notification_end);

                count = getdigits(notifications);
                if(count == "")
                  count = 0;
		var countnum = countnum + parseInt(count);
		count = countnum + '';
                handleSuccess(count);
              }
              else
              {
                handleError();
              }
			  xhr.onreadystatechange = null;
               xhr = null;
            }
          }
		  delete notification_start
		  delete notification_end
		  delete notifications
        }
        catch(e)
        {
          window.opera.postError(e);
          handleError();
        }

        xhr.open("GET",facebook,true);
        xhr.send(null);
      }

      function getdigits (s) {
         return s.replace (/[^\d]/g, "");
      }

	  function updateNotificationCount(count) {
	    failCount = 0;
		if (widget.preferences.faviconUse == "1")
		{
		opera.extension.broadcastMessage({
        topic: 'FBIconUpdate',
        data: count
    }); }
	else {
	opera.extension.broadcastMessage({
        topic: 'FBIconUpdate',
        data: 0
    });
	}
		if (widget.preferences.buttonUse != "0")
		{
            if (count == 0 || widget.preferences.buttonUse == "2" ) {
					 theButton.badge.backgroundColor = "rgba(211, 0, 4, 1)";
					 theButton.badge.textContent = "";
					 theButton.badge.display = "none";
                } else {
                    notificationCount = count;
                    theButton.badge.backgroundColor = "rgba(211, 0, 4, 1)";
					 theButton.badge.textContent = notificationCount;
					theButton.badge.display = "block";
                }
				notificationCount = count;
		}
      }
