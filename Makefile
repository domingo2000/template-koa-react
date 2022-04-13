psql:
	sh -c "docker exec -it postgres psql -U postgres app"

bash:
	sh -c "docker exec -it app bash"

up:
	sh -c "docker compose --file docker-compose.yml up -d"

down:
	sh -c "docker compose --file docker-compose.yml down --volumes"

migrate:
	sh -c "docker exec -it app sh -c 'yarn db:migrate'"

seed:
	sh -c "docker exec -it app sh -c 'yarn db:seed'"

db-reset:
	sh -c "docker exec -it app sh -c 'yarn db:reset'"

yarn:
	sh -c "docker exec -it app sh -c 'yarn ${cmd}'"

logs-backend:
	sh -c "docker logs -f app"

logs-frontend:
	sh -c "docker logs -f frontend"

add-backend:
	sh -c "docker exec -it app sh -c 'yarn add ${cmd}'"

add-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn add ${cmd}'"
