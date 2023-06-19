gradle -p ./ctl clean build
java -jar -Dspring.profiles.active=dev ./ctl/build/libs/cors.jar

