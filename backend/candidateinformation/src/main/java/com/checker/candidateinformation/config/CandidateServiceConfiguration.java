package com.checker.candidateinformation.config;
import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.MigrationVersion;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = "com.checker.candidateinformation.entity")
@EnableJpaRepositories(basePackages = "com.checker.candidateinformation.repository")
public class CandidateServiceConfiguration {
    @Value("${spring.datasource.url}")
    private String databaseUrl;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.driver-class-name}")
    private String driverClassName;
    @Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
                .driverClassName(driverClassName)
                .url(databaseUrl)
                .username(username)
                .password(password)
                .build();
    }


    @Bean(initMethod = "migrate")
    public Flyway flyway() {
        return Flyway.configure()
                .dataSource(getDataSource())
                .baselineOnMigrate(true)
                .baselineVersion(MigrationVersion.fromVersion("1")) // Use the appropriate version here
                .locations("db/migration")
                .target(MigrationVersion.LATEST)
                .outOfOrder(true)
                .validateOnMigrate(true)
                .load();
    }
}
