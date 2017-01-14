# BackerTracker extension
Shows the stats from your favorite crowdfunding projects

## Supported Browsers

* [Chrome](https://chrome.google.com/webstore/detail/likeastore/einhadilfmpdfmmjnnppomcccmlohjad)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/likeastore-social-bookmarking-/)
* [Safari](http://addons.likeastore.com/files/safari/likeastore.safariextz)

## Development

# To check your work locally in chrome: 

Go to the extensions page and enable developer mode. Disable the chrome store version from the list and enable the local version. You'll need to remember to `gulp` every time you make changes to the code. 

All changes have to be applied into `/js`, `/css`, `/img` folders. To build the sources into corresponding packages run,

Make sure you have installed gulp via NPM
```bash
$ gulp
```

The `/build` folder is created. It's recommened to use Chome for development, since it's very easy to create extension from folder with sources.

## Distribution

# To Update the version on the Chrome store: 
Need to login to the Google Developer Platform as greetings@backerkit.com and upload the new zipped version from dist/


Once the changes are in-place and ready for distribution:

1. Update all `/vendor` package file with new version (`manifest.json`, `package.json`, `Settings.plist`).
2. Update `/vendor` browser file if necessary.
3. Run `dist`.

```bash
$ gulp dist
```

The `/dist` folder will contain ready to dist packages (except of Safari, that require manual build).


When developing extensions, remember to serve your assets over https
# License

Based on the Likeastore Browser extension
https://github.com/likeastore/browser-extension
MIT info@likeastore.com
