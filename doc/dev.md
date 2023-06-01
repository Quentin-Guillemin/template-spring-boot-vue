# mvn commands

## To add NOTICE

`./mvnw notice:check` Checks that a NOTICE file exists and that its content match what would be generated.
`./mvnw notice:generate` Generates a new NOTICE file, replacing any existing NOTICE file.

## To add licence headers

`./mvnw license:check` verify if some files miss license header
`./mvnw license:format` add the license header when missing. If a header is existing, it is updated to the new one.
`./mvnw license:remove` remove existing license header

## In dev process when changing the entities

`./mvnw clean generate-sources` will generates new or modified Q__ classes or to update evaluator's entities when updating evaluator lib

## To see deprecated code and warnings

`./mvnw compile -Dmaven.compiler.showWarnings=true -Dmaven.compiler.showDeprecation=true`

## To update maven wrapper

see official doc: https://maven.apache.org/wrapper/
