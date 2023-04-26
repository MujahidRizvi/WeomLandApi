describe('Get By Id. api', function () {
    context('GET /Get User Info.', () => {
      this.beforeEach(function () {
        cy.fixture('land-api-data').then(function (testdata) {
          this.testdata = testdata;
        })
      })
  
      //Positive TestCases
  
      it('okay status', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getById, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.status).to.eq(this.testdata.okStatus)
          })
      })
      it('return data', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getById, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).to.have.keys(this.testdata.byidproperties)
          })
      })

    })

    it('return data by properties', function () {
      cy.request({ method: this.testdata.get, url: this.testdata.getById, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).to.have.keys(this.testdata.searchFilterProperties)
        })
    })

    it('should display success as TRUE when user inputs valid parameters', function () {
      cy.request({ method: this.testdata.get, url: this.testdata.getById, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body.success).equals(true)
        })
    })

  
      //Negative TestCases

      it('user does not provide id', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.bgetById, headers: {"Cookie": this.testdata.btoken}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.status).to.eq(this.testdata.notfound)
          })
      })




      
    });
  
  