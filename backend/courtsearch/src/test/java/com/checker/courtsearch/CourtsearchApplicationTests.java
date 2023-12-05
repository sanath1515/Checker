package com.checker.courtsearch;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class CourtsearchApplicationTests {

	@Test
	void contextLoads() {
		assertDoesNotThrow(() -> CourtsearchApplication.main(new String[]{}));
	}

}
