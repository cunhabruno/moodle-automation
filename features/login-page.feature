Feature: Moodle Ulbra Gravatai Login page

  As an ulbra student
  I want to open Ulbra Gravatai Moodle
  So I can Log in Ulbra Moodle

  @positive1
  Scenario: Ulbra Gravatai Moodle Login page - login and log out
    Given I go to the following page "http://gravatai.ulbra.tche.br/moodle/login/index.php"
    Then I can see "Login page" on "Moodle Login Page"
    And I log in ulbra moodle with the user "105235810" and password "1275955037"
    And I mouse hover on "Pagina Inicial link" on "Moodle Login Page"
    And I select the course "Clique para entrar neste curso"
    And I click on "sair button" on "Moodle Login Page"
  
  @negative1
  Scenario: Ulbra Gravatai Moodle Login page - login with wrong password
    Given I go to the following page "http://gravatai.ulbra.tche.br/moodle/login/index.php"
    And I can see "Login page" on "Moodle Login Page"
    When I log in ulbra moodle with the user "23345678" and password "sss"
    Then I can see "Login error" on "Moodle Login page" with the text "Nome de usuário ou senha errados. Por favor tente outra vez."
    And I can see "Login page" on "Moodle Login Page"