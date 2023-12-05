CREATE TABLE IF NOT EXISTS `checker119`.`adverse_action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` SET('clear', 'consider', 'schedule') NULL DEFAULT NULL,
  `pre_notice_date` DATE NULL DEFAULT NULL,
  `post_notice_date` DATE NULL DEFAULT NULL,
  `candidate_candidate_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `candidate_candidate_id` (`candidate_candidate_id` ASC) VISIBLE,
  CONSTRAINT `adverse_action_ibfk_1`
    FOREIGN KEY (`candidate_candidate_id`)
    REFERENCES `checker119`.`candidate` (`candidate_id`))
ENGINE = InnoDB
