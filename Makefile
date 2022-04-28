# Docker
up:
	sh -c "docker compose --file docker-compose.yml up -d"

down:
	sh -c "docker compose --file docker-compose.yml down --volumes"

build:
	sh -c "docker compose --file docker-compose.yml build"

restart:
	sh -c "docker compose --file docker-compose.yml restart ${service}"

# backend server
migrate:
	sh -c "docker exec -it app sh -c 'yarn db:migrate'"

migrate-undo:
	sh -c "docker exec -it app sh -c 'yarn db:migrate:undo'"

seed:
	sh -c "docker exec -it app sh -c 'yarn db:seed'"

seed-undo:
	sh -c "docker exec -it app sh -c 'yarn db:seed:undo'"

db-reset:
	sh -c "docker exec -it app sh -c 'yarn db:reset'"

yarn:
	sh -c "docker exec -it app sh -c 'yarn ${cmd}'"

add:
	sh -c "docker exec -it app sh -c 'yarn add ${cmd}'"

remove:
	sh -c "docker exec -it app sh -c 'yarn remove ${cmd}'"

logs:
	sh -c "docker logs -f app"

# Frontend
add-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn add ${cmd}'"

# Logs
logs-frontend:
	sh -c "docker logs -f frontend"

add:
	sh -c "docker exec -it frontend sh -c 'yarn add ${cmd}'"

# Database
psql:
	sh -c "docker exec -it postgres psql -U postgres app"

# Consoles
bash:
	sh -c "docker exec -it app bash"
