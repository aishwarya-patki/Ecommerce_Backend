import { TestBed } from '@angular/core/testing';

import { AdminServiceService } from './admin-service.service';

describe('AdminServiceService', () => {
  let service: AdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
var Request = require("request");

describe("AdminServiceService", () => {
    var server;
    beforeAll(() => {
        server = require("../../../../Ecommerce_Backend/backend/app.js");
    });
    afterAll(() => {
        server.close();
    });
    describe("GET /", () => {
        var data = {
          status:0,
          body:""
        };
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status=response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("WELCOME TO SERVER");
        });
    });
   
});
