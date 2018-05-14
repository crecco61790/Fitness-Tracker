# Fitness-Tracker

Some tested browsers had issues with CORS - the following run command
generates a Chrome window that works 100% of the time

chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

Model includes a user and two arrays, one for all logged entries
one for shared entries

logged entries return entries where user name matches current user

shared entries returns all shared entries

http get required a binding function that needed a time delay
