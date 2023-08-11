describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {

    //ir para o site
    cy.visit('https://meupc.net')

    //esperar 1 segundo
    cy.wait(1000)

    //clicar no menu
    cy.get('.navbar-burger').click()

    //esperar 1 segundo
    cy.wait(1000)
    
    //ir até a lista de cadastro
    cy.get('ul.menu-list')

    //pegando o filtro "li""
    .children('li')

    //pegando o filtro da li que tem href com o valor https://meupc.net/cadastro
    .children('a[href="https://meupc.net/cadastro"]')

    //clicar
    .click()

    //digitar nome
    cy.get('input[name="nome"]').type('Thuyzin teste testando')

    //digitar email
    cy.get('input[name="email"]').type('thuyzinteste@exemple.com')

    //digitar senha 
    cy.get('input[placeholder="Defina uma senha"]').type('ThuyzinTESTE')

    //'placeholder' é o nome que aparece na barra de digitação

    //clica para aceitar os termos
    cy.get('input[type="checkbox"]').check({force: true})

    //clicar no botao cadastrar
    cy.contains('Cadastrar-se').click()

    //finalizar ao ver o titulo na tela (Escolha seu nome de usuário)
    cy.contains('Escolha seu nome de usuário').should('be.visible')
  })
})