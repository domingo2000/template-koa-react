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

lint:
	sh -c "docker exec -it app sh -c 'yarn lint'"

lint-fix:
	sh -c "docker exec -it app sh -c 'yarn lint-fix'"

add:
	sh -c "docker exec -it app sh -c 'yarn add ${cmd}'"

remove:
	sh -c "docker exec -it app sh -c 'yarn remove ${cmd}'"

logs:
	sh -c "docker logs -f app"

bash:
	sh -c "docker exec -it app bash"

# Frontend
add-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn add ${cmd}'"

remove-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn remove ${cmd}'"

yarn-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn ${cmd}'"

lint-frontend:
	sh -c "docker exec -it frontend sh -c 'yarn lint'"

logs-frontend:
	sh -c "docker logs -f frontend"

bash-frontend:
	sh -c "docker exec -it frontend bash"

# Database
psql:
	sh -c "docker exec -it postgres psql -U postgres app"
