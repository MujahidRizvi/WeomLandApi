describe('Get By latlong. api', function () {
    context('GET /Get User Info.', () => {
      this.beforeEach(function () {
        cy.fixture('land-api-data').then(function (testdata) {
          this.testdata = testdata;
        })
      })
  
      //Positive TestCases
  
      it('okay status', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getbylatlong, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.status).to.eq(this.testdata.okStatus)
          })
      })
      it('return data', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getbylatlong, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).to.have.keys(this.testdata.byidproperties)
          })
      })

      it('return data by properties', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getbylatlong, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).to.have.keys(this.testdata.searchFilterProperties)
          })
      })

      it('should display success as TRUE when user inputs valid parameters', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.getbylatlong, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body.success).equals(true)
          })
      })

            //Negative TestCases

            it('user does not provide radius', function () {
                cy.request({ method: this.testdata.get, url: this.testdata.rgetbylatlong, headers: {"Cookie": this.testdata.btoken}, failOnStatusCode: false }).then(
                  (response) => {
                    expect(response.status).to.eq(this.testdata.unprocessableEntityStatus)
                  })
              })

              it('user does not provide assetType', function () {
                cy.request({ method: this.testdata.get, url: this.testdata.agetbylatlong, headers: {"Cookie": this.testdata.btoken}, failOnStatusCode: false }).then(
                  (response) => {
                    expect(response.status).to.eq(this.testdata.unprocessableEntityStatus)
                  })
              })
              it('user does not provide lat', function () {
                cy.request({ method: this.testdata.get, url: this.testdata.latgetbylatlong, headers: {"Cookie": this.testdata.btoken}, failOnStatusCode: false }).then(
                  (response) => {
                    expect(response.status).to.eq(this.testdata.unprocessableEntityStatus)
                  })
              })
              it('user does not provide long', function () {
                cy.request({ method: this.testdata.get, url: this.testdata.longgetbylatlong, headers: {"Cookie": this.testdata.btoken}, failOnStatusCode: false }).then(
                  (response) => {
                    expect(response.status).to.eq(this.testdata.unprocessableEntityStatus)
                  })
              })
            })
            it('user does not provide Cookie', function () {
              cy.request({ method: this.testdata.get, url: this.testdata.getbylatlong, headers: {}, failOnStatusCode: false }).then(
                (response) => {
                  expect(response.status).to.eq(this.testdata.unauthorized)
                })
            })
   

      
    });
  