container_php       = app
container_db        = db
container_server    = webserver

#############################################
###                                       ###
###   MakeFile for Laravel Crash Course   ###
###                                       ###
#############################################

composer_dep: #install composer dependency >> ./vendors
	docker run --rm -v $(CURDIR):/app composer install

laravel_install: #Create new Laravel project
	winpty docker-compose exec $(container_php) composer create-project --prefer-dist laravel/laravel=5.8.* .

key: #generate APP key
	winpty docker-compose exec $(container_php) php artisan key:generate

ownership: #Set ownership
	@sudo chown $(USER):$(USER) . -R

#####################################
###                               ###
###       Work in containers      ###
###                               ###
#####################################

up: #start docker containers  winpty docker-compose up -d
	winpty docker-compose up -d

down: #down docker containers
	winpty docker-compose down

down-volume: #  WARNING: stop and destroy containers with volumes
	winpty docker-compose down -v

start: # start already created containers
	winpty docker-compose start

stop: # stop already created containers
	winpty docker-compose stop

build: # build all dockerfile, if not built yet
	winpty docker-compose build

show: #show docker's containers
	docker ps

connect_app: #Connect to APP container
	winpty docker-compose exec $(container_php) bash

connect_db: #Connect to DB container
	winpty docker-compose exec $(container_db) bash

connect_server: #Connect to container_server container
	winpty docker-compose exec $(container_server) /bin/sh