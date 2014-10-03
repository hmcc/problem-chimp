# problem-chimp

My personal website at [www.problemchimp.org](www.problemchimp.org), using [Hyde][hyde] and [Bootstrap][bootstrap].

## Bootstrap settings
The customized Bootstrap CSS is available from http://getbootstrap.com/customize/?id=02f54ab22136b1a190db


## Build and run
The site is currently deployed to [Google App Engine](https://appengine.google.com/) using the ```app.yaml``` inside the "deploy" directory.

If you don't need to use Google App Engine:
  1. Grab the source with Git or by downloading the [latest zip archive](https://github.com/hmcc/problem-chimp/zipball/master)
  2. From the terminal run `hyde gen`
  3. Run with `hyde serve`

To use Google App Engine:
  1. Grab the source as above
  2. From the terminal run `hyde gen -d deploy/static`. 
  3. Run with
```bash
  <path to google_appengine>/dev_appserver.py --port 5000 deploy/app.yaml
```


