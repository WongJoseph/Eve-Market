package com.ex.evemarketback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.ex.evemarketback.impl")
@EntityScan(basePackages = "com.ex.evemarketback.domain")
public class EvemarketbackApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvemarketbackApplication.class, args);
	}
}
