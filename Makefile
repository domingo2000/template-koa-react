psql:
	sh -c "docker exec -it postgres psql -U postgres app"

bash:
	sh -c "docker exec -it app bash"

up:
	sh -c "docker compose --file docker-compose.yml up -d"

down:
	sh -c "docker compose --file docker-compose.yml down --volumes"

logs-app:
	sh -c "docker logs -f app"

migrate:
	sh -c "docker exec -it app sh -c 'yarn db:migrate'"

seed:
	sh -c "docker exec -it app sh -c 'yarn db:seed'"

db-reset:
	sh -c "docker exec -it app sh -c 'yarn db:reset'"

yarn:
	sh -c "docker exec -it app sh -c 'yarn ${cmd}'"

logs:
	sh -c "docker logs -f app"

add:
	sh -c "docker exec -it app sh -c 'yarn add ${cmd}'"