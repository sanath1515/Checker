package com.checker.user;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class UserApplicationTests {

	@Test
	void contextLoads() {
		assertDoesNotThrow(() -> UserApplication.main(new String[]{}));
	}

}
