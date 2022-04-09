psql:
	sh -c "docker exec -it postgres psql -U postgres app"

bash:
	sh -c "docker exec -it app bash"

up:
	sh -c "docker compose --file docker-compose.yml up -d --scale app=2"

down:
	sh -c "docker compose --file docker-compose.yml down --volumes"

logs-app:
	sh -c "docker logs -f app"

seed:
	sh -c "docker exec -it app sh -c 'yarn db:seed'"