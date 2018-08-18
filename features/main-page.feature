Feature: Moodle Ulbra Gravatai Main page

  As an ulbra student
  I want to open Ulbra Gravatai Moodle Main Page
  So I can Manage my courses

  @positive
  Scenario: Ulbra Gravatai Moodle Login page - Open course
    Given I go to the following page "http://gravatai.ulbra.tche.br/moodle/login/index.php"
    Then I can see "Login page" on "Moodle Login Page"
    And I log in ulbra moodle with the user "105235810" and password "1275955037"
    When I select the course "1802 - TCC II Gravatai"
    Then I can see "Header" label containing the text "1802 - TCC II Gravatai" on "Course page"
    And I fill in "Forum Search" field on "Course Page" with the value "deu?"
  
  @todo
  Scenario: Ulbra Gravatai Moodle Login page - login with wrong password
    Given I go to the following page "http://gravatai.ulbra.tche.br/moodle/login/index.php"
    And I can see "Login page" on "Moodle Login Page"
    When I log in ulbra moodle with the user "23345678" and password "sss"
    Then I can see "Login error" on "Moodle Login page" with the text "Nome de usuário ou senha errados. Por favor tente outra vez."
    And I can see "Login page" on "Moodle Login Page"