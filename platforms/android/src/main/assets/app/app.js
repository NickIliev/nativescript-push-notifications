"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
require("./bundle-config");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    onMessageReceivedCallback: function (message) {
        console.log("Title: " + message.title);
        console.log("Body: " + message.body);
        // if your server passed a custom property called 'foo', then do this:
        console.log("Value of 'foo': " + message.data.foo);
    }
});
app.start({ moduleName: 'main-page' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLDJCQUF5QjtBQUN6QixpQ0FBbUM7QUFHbkMsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDVix5QkFBeUIsRUFBRSxVQUFDLE9BQXlCO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxPQUFPLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUNyQyxzRUFBc0U7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRXZDOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5pbXBvcnQgXCIuL2J1bmRsZS1jb25maWdcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbmZpcmViYXNlLmluaXQoe1xuICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBmaXJlYmFzZS5NZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUaXRsZTogJHttZXNzYWdlLnRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XG4gICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcbiAgICAgICAgY29uc29sZS5sb2coYFZhbHVlIG9mICdmb28nOiAke21lc3NhZ2UuZGF0YS5mb299YCk7XG4gICAgfVxufSk7XG5hcHAuc3RhcnQoeyBtb2R1bGVOYW1lOiAnbWFpbi1wYWdlJyB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiJdfQ==