CREATE TABLE IF NOT EXISTS `checker119`.`court_searches` (
  `court_searches_id` INT NOT NULL AUTO_INCREMENT,
  `search` VARCHAR(45) NULL DEFAULT NULL,
  `status` SET('clear', 'consider', 'schedule') NULL DEFAULT NULL,
  `verification_date` DATE NULL DEFAULT NULL,
  `candidate_candidate_id` INT NOT NULL,
  PRIMARY KEY (`court_searches_id`),
  INDEX `candidate_candidate_id` (`candidate_candidate_id` ASC) VISIBLE,
  CONSTRAINT `court_searches_ibfk_1`
    FOREIGN KEY (`candidate_candidate_id`)
    REFERENCES `checker119`.`candidate` (`candidate_id`))
ENGINE = InnoDB