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
	sudo docker-compose exec $(container_php) composer create-project --prefer-dist laravel/laravel=5.8.* .

key: #generate APP key
	sudo docker-compose exec $(container_php) php artisan key:generate

ownership: #Set ownership
	@sudo chown $(USER):$(USER) . -R

#####################################
###                               ###
###       Work in containers      ###
###                               ###
#####################################

up: #start docker containers  sudo docker-compose up -d
	sudo docker-compose up -d

down: #down docker containers
	sudo docker-compose down

down-volume: #  WARNING: stop and destroy containers with volumes
	sudo docker-compose down -v

start: # start already created containers
	sudo docker-compose start

stop: # stop already created containers
	sudo docker-compose stop

build: # build all dockerfile, if not built yet
	sudo docker-compose build

show: #show docker's containers
	docker ps

connect_app: #Connect to APP container
	sudo docker-compose exec $(container_php) bash

connect_db: #Connect to DB container
	sudo docker-compose exec $(container_db) bash

connect_server: #Connect to container_server container
	sudo docker-compose exec $(container_server) /bin/sh

rm: #remove all containers
	docker rm $(docker ps -aq)	