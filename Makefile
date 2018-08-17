up:
	docker-compose up -d --build

down:
	docker-compose down

setup:
	docker-compose exec web install-magento
	docker-compose exec web install-sampledata

test-run:
	# docker-compose exec web bin/magento cache:flush
	docker-compose run test bash -c "npx cypress run --browser chrome"