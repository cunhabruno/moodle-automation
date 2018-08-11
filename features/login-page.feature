Feature: Moodle Ulbra Gravatai Login page

  As an ulbra student
  I want to open Ulbra Gravatai Moodle
  So I can Log in Ulbra Moodle

  Scenario: Open Ulbra Gravatai Moodle Login page
    Given I go to the following page "http://gravatai.ulbra.tche.br/moodle/login/index.php"
    Then I can see "Login page" on "Moodle Main Page"
    And I log in ulbra moodle with the user "105235810" and password "1275955037"