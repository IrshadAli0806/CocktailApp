import { CockTailDataService } from './cock-tail-data.service';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient} from '@angular/common/http';

describe('CockTailDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: CockTailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CockTailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sendGetRequest() should return data', () => {
    service.sendGetRequest().subscribe((res) => {
      expect(res).toContain('{"idDrink":"17222","strDrink":"A1"');
    });
    const reqMock = httpTestingController.expectOne((req) => req.method === 'GET' && req.url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    expect(reqMock.request.method).toBe('GET');
    reqMock.flush('{"idDrink":"17222","strDrink":"A1"');
  });

  it('sendGetRequest() should return data >> contains Shot glass', () => {
    service.sendGetRequest().subscribe((res) => {
      expect(res).toContain('Shot glass');
    });
    const reqMock = httpTestingController.expectOne((req) => req.method === 'GET' && req.url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    expect(reqMock.request.method).toBe('GET');
    reqMock.flush('Shot glass');
  });
});
