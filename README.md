This function allows you to grab the names of the plugins from adobe.com/addons. I can update it for you and make it so you can grab other names as well from other websites. Here is how it works.

Create a bookmark in your browser with the following url (without the quotes): 
"javascript:(function(){
var s1=document.createElement('script');
s1.type='text/javascript';
s1.src='https://rawgit.com/atinybeardedman/nameGrabber/master/namegrabber.js';
document.getElementsByTagName('head')[0].appendChild(s1);})();"

Add this bookmark to the bookmarks bar for easy access.

Goto adobe.com/addons and queue up the page you are interesting in grabbing names from.

Once the page has loaded, hit the bookmark link. You should see a pop-up with a comma separated list of names. You can now copy and paste these into excel. (I'd recommend opening a text document. Pasting them there are saving as a CSV and importing to excel. This way they will all end up in their own cells.)

