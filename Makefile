clean:
	rm -rf deploy/static/*
	
build: clean
	hyde gen -d deploy/static	

run: build
	hyde serve -d deploy/static

deploy: build
	gcloud app deploy deploy/app.yaml
